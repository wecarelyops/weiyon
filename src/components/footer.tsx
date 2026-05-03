import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const navigation = [
  { name: "首頁", href: "/" },
  { name: "關於我們", href: "/about" },
  { name: "加工品目", href: "/products" },
  { name: "實績展示", href: "/gallery" },
  { name: "部落格", href: "/blog" },
  { name: "常見問題", href: "/faq" },
  { name: "聯絡我們", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-[var(--bg)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[var(--accent)] rounded-lg flex items-center justify-center">
                <span className="text-[var(--primary)] font-bold text-lg">W</span>
              </div>
              <div>
                <span className="font-bold text-lg">偉勇工業社</span>
                <span className="block text-xs text-gray-400">Weiyon Industry</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              深耕產業 40 年的金屬零件製造專家，致力於提供高品質的 CNC 精密加工服務。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">快速連結</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-[var(--accent)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">加工品目</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>CNC 精密加工</li>
              <li>半導體設備零件</li>
              <li>機器人自動化組件</li>
              <li>航太零件加工</li>
              <li>氣壓缸零件</li>
              <li>汽車配件</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">聯絡資訊</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--accent)]" />
                <span>台中市烏日區環中路八段332巷118弄35號</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0 text-[var(--accent)]" />
                <a href="tel:0423356451" className="hover:text-[var(--bg)] transition-colors">
                  04-23356451
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0 text-[var(--accent)]" />
                <a href="mailto:agesmyth@gmail.com" className="hover:text-[var(--bg)] transition-colors">
                  agesmyth@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4 flex-shrink-0 text-[var(--accent)]" />
                <span>週一至週六 08:00 - 17:30</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} 偉勇工業社. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            專業CNC精密加工 / 金屬零件製造
          </p>
        </div>
      </div>
    </footer>
  );
}
