import fs from "fs";
import path from "path";

// 單一真相來源：實績圖數量「自動」讀取 public/images/works/ 內的 NN.jpg 檔。
// 新增實績圖只要把檔案（例如 40.jpg）放進該資料夾即可 —— gallery 縮圖牆、
// works 詳情頁、sitemap、首頁輪播 CTA（中/英/德）都會自動更新，無需再改任何數字。
// 註：檔案需以連續數字命名（01.jpg、02.jpg…）。於 build 時計算（皆為靜態頁）。
function countWorkImages(): number {
  try {
    const dir = path.join(process.cwd(), "public", "images", "works");
    return fs.readdirSync(dir).filter((f) => /^\d+\.jpe?g$/i.test(f)).length;
  } catch {
    return 0;
  }
}

export const WORK_COUNT = countWorkImages();
