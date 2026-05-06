import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

const BUCKET_NAME = "contact-attachments";
const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB
const MAX_FILES = 5;
const ALLOWED_EXTENSIONS = [
  "pdf",
  "dwg",
  "dxf",
  "step",
  "stp",
  "iges",
  "igs",
  "stl",
  "jpg",
  "jpeg",
  "png",
  "webp",
];

async function ensureBucket(): Promise<boolean> {
  if (!supabaseAdmin) return false;
  try {
    const { data: buckets, error } = await supabaseAdmin.storage.listBuckets();
    if (error) {
      console.error("listBuckets error:", error);
      return false;
    }
    const exists = buckets?.some((b) => b.name === BUCKET_NAME);
    if (!exists) {
      const { error: createErr } = await supabaseAdmin.storage.createBucket(
        BUCKET_NAME,
        {
          public: false,
          fileSizeLimit: MAX_FILE_SIZE,
        }
      );
      if (createErr) {
        console.error("createBucket error:", createErr);
        return false;
      }
    }
    return true;
  } catch (e) {
    console.error("ensureBucket exception:", e);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    // 改用 FormData（multipart）以支援檔案上傳
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    let message = String(formData.get("message") || "").trim();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "姓名、Email 和訊息內容為必填欄位" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email 格式不正確" },
        { status: 400 }
      );
    }

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: "資料庫尚未設定" },
        { status: 503 }
      );
    }

    // Handle file uploads
    const allFiles = formData.getAll("attachments");
    const files: File[] = [];
    for (const f of allFiles) {
      if (f instanceof File && f.size > 0) {
        files.push(f);
      }
    }

    if (files.length > MAX_FILES) {
      return NextResponse.json(
        { error: `最多 ${MAX_FILES} 個附件` },
        { status: 400 }
      );
    }

    // Validate each file
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `檔案「${file.name}」超過 25MB 限制` },
          { status: 400 }
        );
      }
      const ext = file.name.split(".").pop()?.toLowerCase() || "";
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        return NextResponse.json(
          { error: `不支援的檔案格式：${ext}` },
          { status: 400 }
        );
      }
    }

    // Upload files
    const attachmentLinks: { name: string; url: string }[] = [];

    if (files.length > 0) {
      const bucketReady = await ensureBucket();
      if (!bucketReady) {
        return NextResponse.json(
          { error: "儲存空間設定錯誤，請稍後再試或直接 email 附件" },
          { status: 500 }
        );
      }

      const now = new Date();
      const folder = `${now.getFullYear()}/${String(
        now.getMonth() + 1
      ).padStart(2, "0")}`;

      for (const file of files) {
        const safeName = file.name.replace(/[^\w.\-]/g, "_");
        const filename = `${folder}/${Date.now()}-${Math.random()
          .toString(36)
          .slice(2, 8)}-${safeName}`;

        const arrayBuffer = await file.arrayBuffer();
        const { error: uploadError } = await supabaseAdmin.storage
          .from(BUCKET_NAME)
          .upload(filename, arrayBuffer, {
            contentType: file.type || "application/octet-stream",
            upsert: false,
          });

        if (uploadError) {
          console.error("Upload error:", uploadError);
          return NextResponse.json(
            { error: `檔案「${file.name}」上傳失敗` },
            { status: 500 }
          );
        }

        // 簽署 URL 有效 1 年（業主可在 Supabase dashboard 直接看到原檔）
        const { data: urlData } = await supabaseAdmin.storage
          .from(BUCKET_NAME)
          .createSignedUrl(filename, 60 * 60 * 24 * 365);

        if (urlData?.signedUrl) {
          attachmentLinks.push({ name: file.name, url: urlData.signedUrl });
        }
      }

      // 把附件 URL 串到 message 末尾
      if (attachmentLinks.length > 0) {
        message += "\n\n--- 附件 ---";
        attachmentLinks.forEach((att) => {
          message += `\n${att.name}: ${att.url}`;
        });
      }
    }

    // Insert submission
    const { data, error } = await supabaseAdmin
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          phone: phone || null,
          subject: subject || null,
          message,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "提交失敗，請稍後再試" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data,
        attachments: attachmentLinks.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "伺服器錯誤，請稍後再試" },
      { status: 500 }
    );
  }
}
