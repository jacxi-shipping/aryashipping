"use client";

import { Languages } from "lucide-react";
import { localeMeta, locales } from "@/lib/i18n";
import { useI18n } from "@/components/I18nProvider";

type LanguageSwitcherProps = {
  compact?: boolean;
};

export default function LanguageSwitcher({ compact = false }: LanguageSwitcherProps) {
  const { locale, setLocale, t, isRtl } = useI18n();

  return (
    <div
      className={`flex items-center gap-2 ${compact ? "text-xs" : "rounded-full border border-white/10 bg-black/35 p-1.5 text-xs shadow-2xl backdrop-blur-xl"}`}
      aria-label={t.footer.languageLabel}
    >
      {!compact && <Languages className="h-4 w-4 text-white/50" aria-hidden="true" />}
      <div className="flex items-center gap-1" dir={isRtl ? "rtl" : "ltr"}>
        {locales.map((item) => {
          const meta = localeMeta[item];
          const isActive = item === locale;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setLocale(item)}
              className={`min-w-10 rounded-full px-3 py-2 font-bold transition-colors ${
                isActive
                  ? "bg-[#00a3ff] text-[#03111d]"
                  : "text-white/50 hover:bg-white/10 hover:text-white"
              }`}
              lang={item}
              dir={meta.dir}
              aria-pressed={isActive}
              title={meta.label}
            >
              {compact ? meta.code : meta.nativeLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}
