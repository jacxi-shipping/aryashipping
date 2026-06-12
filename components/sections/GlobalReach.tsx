"use client";

import { useI18n } from "@/components/I18nProvider";
import GlobeMap from "@/components/3d/GlobeMap";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalReach() {
  const { isRtl } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(
        containerRef.current,
        { scale: 0.95, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 px-6 py-32 sm:px-12 lg:px-24" id="global-reach">
      <div className="mx-auto max-w-7xl">
        <div ref={textRef} className={`mb-16 ${isRtl ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-5xl">
            Our Global <span className="text-[#00a3ff]">Reach</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-black/60 dark:text-white/60">
            Connecting major hubs across the globe. From the USA to Mersin and onward to Afghanistan, we ensure your cargo reaches its destination efficiently.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative mx-auto h-[500px] w-full overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 shadow-sm backdrop-blur-sm lg:h-[700px]"
        >
          <GlobeMap />
        </div>
      </div>
    </section>
  );
}
