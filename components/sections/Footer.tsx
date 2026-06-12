"use client";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/components/I18nProvider";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="relative z-10 border-t border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-[#020406] px-6 py-12 sm:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-black uppercase tracking-widest text-black dark:text-white">{t.brand}</h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-black/50 dark:text-white/50">
            {t.footer.description}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40">{t.footer.connect}</h4>
          <ul className="mt-4 space-y-3 text-sm text-black/70 dark:text-white/70">
            <li><a href="#" className="hover:text-[#00a3ff] transition-colors">{t.footer.whatsapp}</a></li>
            <li><a href="#" className="hover:text-[#00a3ff] transition-colors">{t.footer.email}</a></li>
            <li><a href="#" className="hover:text-[#00a3ff] transition-colors">{t.footer.portal}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 dark:text-white/40">{t.footer.legal}</h4>
          <ul className="mt-4 space-y-3 text-sm text-black/70 dark:text-white/70">
            <li><a href="#" className="hover:text-[#00a3ff] transition-colors">{t.footer.terms}</a></li>
            <li><a href="#" className="hover:text-[#00a3ff] transition-colors">{t.footer.privacy}</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-black/10 dark:border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-black/40 dark:text-white/40">{t.footer.copyright}</p>
        <LanguageSwitcher compact />
      </div>
    </footer>
  );
}
