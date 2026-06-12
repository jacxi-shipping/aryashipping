"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useI18n } from "@/components/I18nProvider";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const { t, isRtl } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative z-10 px-6 py-32 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
            {t.features.heading} <br/> <span className="text-[#00a3ff]">{t.features.accent}</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((feature, i) => (
            <div
              key={i}
              ref={el => {
                if (el) cardsRef.current[i] = el;
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <div className={`absolute -top-4 text-8xl opacity-10 transition-transform group-hover:scale-110 group-hover:opacity-20 ${isRtl ? "-left-4" : "-right-4"}`}>
                {feature.icon}
              </div>
              <div className="relative z-10">
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.desc}</p>
              </div>

              <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#00a3ff]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
