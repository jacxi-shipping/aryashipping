"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useI18n } from "@/components/I18nProvider";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const { t, isRtl } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={`absolute left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 sm:px-12 lg:px-24 ${isRtl ? "flex-row-reverse" : ""}`}>
      <div className="font-black text-xl tracking-tighter uppercase flex items-center gap-2">
        <div className="w-8 h-8 bg-[#00a3ff] rounded-sm flex items-center justify-center text-white">
          A
        </div>
        <span>{t.brand}</span>
      </div>

      <div className={`flex items-center gap-3 ${isRtl ? "flex-row-reverse" : ""}`}>
        <LanguageSwitcher />
        {mounted && (
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            aria-label={t.header.themeToggle}
          >
            {theme === "dark" ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-black" />}
          </button>
        )}
      </div>
    </header>
  );
}
