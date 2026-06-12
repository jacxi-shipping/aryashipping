"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { localeMeta, locales, translations, type Locale } from "@/lib/i18n";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
  dir: (typeof localeMeta)[Locale]["dir"];
  isRtl: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const storageKey = "arya-shipping-locale";

function isLocale(value: string | null): value is Locale {
  return !!value && locales.includes(value as Locale);
}

export default function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(storageKey);
    if (isLocale(savedLocale)) {
      setLocaleState(savedLocale);
      return;
    }

    const browserLocale = window.navigator.language.toLowerCase();
    if (browserLocale.startsWith("ps")) {
      setLocaleState("ps");
    } else if (browserLocale.startsWith("fa") || browserLocale.startsWith("prs")) {
      setLocaleState("fa");
    }
  }, []);

  useEffect(() => {
    const { dir } = localeMeta[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.documentElement.dataset.locale = locale;
    document.title = translations[locale].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", translations[locale].meta.description);
    window.localStorage.setItem(storageKey, locale);
  }, [locale]);

  const value = useMemo(() => {
    const dir = localeMeta[locale].dir;

    return {
      locale,
      setLocale: setLocaleState,
      t: translations[locale],
      dir,
      isRtl: dir === "rtl",
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }

  return context;
}
