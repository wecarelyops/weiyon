import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");

  const navigation = [
    { name: tNav("home"), href: "/" },
    { name: tNav("about"), href: "/about" },
    { name: tNav("products"), href: "/products" },
    { name: tNav("workflow"), href: "/workflow" },
    { name: tNav("gallery"), href: "/gallery" },
    { name: tNav("blog"), href: "/blog" },
    { name: tNav("faq"), href: "/faq" },
    { name: tNav("contact"), href: "/contact" },
  ];

  const services = [
    t("service1"),
    t("service2"),
    t("service3"),
    t("service4"),
    t("service5"),
    t("service6"),
  ];

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
            <p className="text-sm text-gray-400 leading-relaxed">{t("tagline")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
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
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              {t("services")}
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
              {t("contactInfo")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--accent)]" />
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0 text-[var(--accent)]" />
                <a
                  href="tel:0423356451"
                  className="hover:text-[var(--bg)] transition-colors"
                >
                  04-23356451
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail className="w-4 h-4 flex-shrink-0 text-[var(--accent)]" />
                <a
                  href="mailto:agesmyth@gmail.com"
                  className="hover:text-[var(--bg)] transition-colors"
                >
                  agesmyth@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4 flex-shrink-0 text-[var(--accent)]" />
                <span>{t("hours")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {t("copyright")}
          </p>
          <p className="text-sm text-gray-500">{t("subtitle")}</p>
        </div>
      </div>
    </footer>
  );
}
