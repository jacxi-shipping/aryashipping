"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Smartphone, Download, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function MobileApp() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
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
        phoneRef.current,
        { x: 50, opacity: 0, rotationY: 15 },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
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
    <section ref={sectionRef} className="relative z-10 overflow-hidden bg-black/5 dark:bg-white/5 py-32" id="mobile-app">
      <div className="container mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">

          <div ref={textRef} className="w-full lg:w-1/2">
            <h2 className="mb-6 text-3xl font-black uppercase tracking-tight sm:text-5xl">
              Command Your Cargo <br/> <span className="text-[#00a3ff]">On The Go</span>
            </h2>
            <p className="mb-8 text-lg text-black/60 dark:text-white/60">
              Take absolute control of your vehicle shipments anywhere, anytime. Our proprietary mobile application gives you real-time intelligence and secure communication right in your pocket.
            </p>

            <ul className="mb-10 space-y-4">
              {[
                "Real-time GPS tracking from port to destination",
                "Instant push notifications on clearance updates",
                "Secure document upload and management",
                "Direct line to your dedicated command agent"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#00a3ff]" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 rounded-xl bg-foreground px-6 py-3 text-background transition-transform hover:scale-105">
                <Download className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-[10px] font-semibold uppercase tracking-wider opacity-80">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>

              <button className="flex items-center gap-3 rounded-xl bg-foreground px-6 py-3 text-background transition-transform hover:scale-105">
                <Download className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-[10px] font-semibold uppercase tracking-wider opacity-80">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div ref={phoneRef} className="relative flex w-full justify-center lg:w-1/2 perspective-[1000px]">
            {/* Phone Mockup Frame */}
            <div className="relative h-[600px] w-[280px] rounded-[3rem] border-8 border-foreground bg-background shadow-2xl">
              {/* Dynamic Island / Notch */}
              <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-3xl bg-foreground"></div>

              {/* Screen Content */}
              <div className="flex h-full w-full flex-col overflow-hidden rounded-[2.5rem] bg-card p-6">
                <div className="mb-6 mt-8 flex items-center justify-between">
                  <div className="h-8 w-8 rounded-full bg-[#00a3ff]/20 flex items-center justify-center text-[#00a3ff]">
                    <Smartphone size={16} />
                  </div>
                  <div className="h-2 w-12 rounded-full bg-border"></div>
                </div>

                <h3 className="mb-2 text-xl font-bold">Active Shipment</h3>
                <div className="mb-6 rounded-2xl bg-black/5 dark:bg-white/5 p-4">
                  <div className="mb-2 text-xs font-semibold text-[#00a3ff] uppercase">In Transit</div>
                  <div className="text-sm font-bold">VIN: 1HGCM82633A******</div>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border">
                    <div className="h-full w-[65%] bg-[#00a3ff]"></div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                    <span>Mersin</span>
                    <span>Afghanistan</span>
                  </div>
                </div>

                <h3 className="mb-2 text-sm font-bold text-muted-foreground uppercase">Recent Updates</h3>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-3">
                      <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#00a3ff]"></div>
                      <div>
                        <div className="text-sm font-medium">Customs Cleared</div>
                        <div className="text-xs text-muted-foreground">2 hours ago • Mersin Gateway</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative glows */}
            <div className="absolute -right-12 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#00a3ff] opacity-20 blur-[100px]"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
