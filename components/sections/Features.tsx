"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShipIcon, CraneIcon, TruckIcon, DocumentIcon } from "../icons";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Mersin Gateway",
    desc: "Optimized route via Turkey. Bypass standard congestion points with our dedicated terminal agreements.",
    icon: ShipIcon
  },
  {
    title: "Ro-Ro & Container",
    desc: "Flexible loading options. Choose between fast Roll-on/Roll-off or secure containerized transport.",
    icon: CraneIcon
  },
  {
    title: "Afghanistan Inland",
    desc: "Seamless handover at the border. We manage the complex logistics so you don't have to.",
    icon: TruckIcon
  },
  {
    title: "Customs Clearing",
    desc: "Pre-cleared paperwork. Our agents handle the bureaucratic friction before the vessel arrives.",
    icon: DocumentIcon
  }
];

export default function Features() {
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
            Uncompromising <br/> <span className="text-[#00a3ff]">Infrastructure.</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                ref={el => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <div className="absolute -right-4 -top-4 opacity-10 transition-transform group-hover:scale-110 group-hover:opacity-20 text-[#00a3ff]">
                  <Icon className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4 text-[#00a3ff]">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-sm text-white/60">{feature.desc}</p>
                </div>

                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#00a3ff]/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
