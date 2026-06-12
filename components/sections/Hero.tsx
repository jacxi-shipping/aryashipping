"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MoveRight } from "lucide-react";
import { useI18n } from "@/components/I18nProvider";

export default function Hero() {
  const { t, isRtl } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        headlineRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
      )
      .fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-32 pb-20 text-center sm:px-12 lg:px-24"
    >
      <div className="max-w-5xl">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00a3ff] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00a3ff] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00a3ff]"></span>
            </span>
            {t.hero.badge}
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-balance text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl lg:text-8xl"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          {t.hero.titlePrefix} <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
            {t.hero.titleAccent}
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mx-auto mt-8 max-w-2xl text-balance text-lg text-white/60 sm:text-xl"
        >
          {t.hero.subtitle}
        </p>

        <div ref={ctaRef} className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#quote"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">{t.hero.primaryCta}</span>
            <MoveRight
              className={`relative z-10 h-4 w-4 transition-transform ${
                isRtl ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"
              }`}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#00a3ff] to-[#00a3ff]/80 opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#process"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white/70 transition-colors hover:text-white"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
