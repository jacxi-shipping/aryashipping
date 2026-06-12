"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/components/I18nProvider";

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const { t, isRtl, locale } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );

      gsap.utils.toArray('.process-item').forEach((item: any, i) => {
        gsap.fromTo(
          item,
          { x: isRtl ? 50 : -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 70%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isRtl, locale]);

  return (
    <section id="process" className="relative z-10 bg-[#020406] px-6 py-32 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-20 text-center text-3xl font-black uppercase tracking-tight sm:text-5xl">
          {t.process.headingPrefix} <span className="text-[#00a3ff]">{t.process.headingAccent}</span>
        </h2>

        <div ref={containerRef} className="relative mx-auto max-w-3xl">
          <div className={`absolute top-0 h-full w-[2px] bg-white/10 ${isRtl ? "right-[27px] sm:right-[39px]" : "left-[27px] sm:left-[39px]"}`}>
            <div ref={lineRef} className="h-full w-full origin-top bg-[#00a3ff]" />
          </div>

          <div className="grid gap-12">
            {t.process.steps.map((step, i) => (
              <div key={i} className="process-item relative flex items-start gap-6 sm:gap-12">
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#030609] font-black text-[#00a3ff] shadow-[0_0_30px_rgba(0,163,255,0.2)] sm:h-20 sm:w-20 sm:text-xl">
                  {step.num}
                </div>
                <div className="pt-2 sm:pt-4">
                  <h3 className="text-xl font-bold sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-white/60 sm:text-lg">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
