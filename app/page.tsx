"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Route", id: "route" },
  { label: "Services", id: "services" },
  { label: "Process", id: "process" },
  { label: "Quote", id: "quote" },
];

const tradeLanes = [
  "USA to Afghanistan",
  "Canada to Afghanistan",
  "North America to Mersin",
  "Mersin to Afghanistan",
  "Auction pickup to port",
  "Port to final handover",
];

const routeStages = [
  {
    code: "01",
    title: "USA & Canada",
    detail: "Auction release, seller pickup, documentation, and port delivery.",
  },
  {
    code: "02",
    title: "Mersin Port",
    detail: "Ocean arrival, vehicle handling, document control, and onward transit coordination.",
  },
  {
    code: "03",
    title: "Afghanistan",
    detail: "Customs guidance, inland movement, status updates, and final handover.",
  },
];

const services = [
  {
    title: "Auction & Seller Release",
    description:
      "We coordinate vehicle release from auctions, dealers, private sellers, and storage yards across the USA and Canada.",
    icon: <KeyIcon />,
  },
  {
    title: "North America Export",
    description:
      "Pickup, inland transport, port delivery, export paperwork, and loading coordination are handled as one controlled workflow.",
    icon: <RoRoIcon />,
  },
  {
    title: "Ocean Freight to Mersin",
    description:
      "Ro-Ro and container options are aligned with vehicle condition, budget, route timing, and port availability.",
    icon: <ContainerIcon />,
  },
  {
    title: "Afghanistan Delivery",
    description:
      "Mersin-to-Afghanistan transit is coordinated with customs steps, route visibility, and final handover support.",
    icon: <RouteIcon />,
  },
];

const processSteps = [
  ["Quote", "Share vehicle, origin, destination, and document details."],
  ["Secure", "Confirm seller release, pickup plan, and export requirements."],
  ["Export", "Move the vehicle to port and prepare ocean freight handling."],
  ["Mersin", "Receive the vehicle through Mersin Port and prepare onward transit."],
  ["Deliver", "Coordinate customs steps and handover in Afghanistan."],
];

const proofPoints = [
  ["USA", "Primary origin"],
  ["Canada", "Secondary origin"],
  ["Mersin", "Gateway port"],
  ["AFG", "Final market"],
];

const vehicleTypes = ["Luxury Cars", "SUVs", "Classics", "Dealer Stock", "EVs", "Fleet Vehicles"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const animated = document.querySelectorAll<HTMLElement>("[data-animate]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    animated.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-[#05070a] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070a]/78 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Arya Shipping home">
            <span className="flex h-10 w-10 items-center justify-center border border-[#00a3ff]/55 bg-[#00a3ff]/10 text-sm font-black tracking-[0.08em] text-[#60c8ff] blue-ring">
              AS
            </span>
            <span className="text-lg font-bold tracking-wide">Arya Shipping</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/72 md:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition hover:text-[#60c8ff]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:+971000000000" className="text-sm font-semibold text-white/80 hover:text-white">
              +971 00 000 0000
            </a>
            <a
              href="#quote"
              className="magnetic-button bg-[#00a3ff] px-5 py-3 text-sm font-black text-[#03111d] shadow-[0_0_30px_rgba(0,163,255,0.45)] transition hover:bg-[#63caff]"
            >
              Get a Quote
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center border border-white/15 md:hidden"
          >
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-0.5 w-5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-0.5 w-5 bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <nav className="border-t border-white/10 bg-[#070b10] px-5 py-5 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-base font-semibold text-white/82"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <section id="top" className="premium-hero relative min-h-[100svh] border-b border-white/10 pt-20">
        <Image
          src="/images/arya-shipping-hero.png"
          alt="Premium vehicle prepared for secure international shipping"
          fill
          priority
          sizes="100vw"
          className="hero-kenburns hero-image object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#05070a_0%,rgba(5,7,10,0.9)_34%,rgba(5,7,10,0.48)_68%,rgba(5,7,10,0.12)_100%)]" />
        <div className="absolute inset-0 grid-lines opacity-30" />
        <div className="scanline absolute inset-0" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 pb-36 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="pulse-badge mb-6 inline-flex items-center gap-3 border border-[#00a3ff]/35 bg-[#00a3ff]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#79d4ff]">
              <span className="h-2 w-2 bg-[#00a3ff] shadow-[0_0_18px_rgba(0,163,255,0.9)]" />
              USA & Canada to Afghanistan via Mersin
            </div>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-normal text-white sm:text-6xl lg:text-7xl">
              North American cars. Afghan destinations. One controlled corridor.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl">
              Arya Shipping coordinates pickup, export, ocean freight to Mersin Port, onward transit, customs support, and final delivery in Afghanistan.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#quote" className="magnetic-button bg-[#00a3ff] px-7 py-4 text-center text-base font-black text-[#03111d] shadow-[0_0_38px_rgba(0,163,255,0.48)] transition hover:bg-[#6bd0ff]">
                Price My Shipment
              </a>
              <a href="https://wa.me/971000000000" className="magnetic-button border border-white/18 bg-white/8 px-7 py-4 text-center text-base font-bold text-white backdrop-blur transition hover:border-[#00a3ff]/70 hover:text-[#8ddcff]">
                WhatsApp Routing Desk
              </a>
            </div>
          </div>

          <RouteCommandPanel />
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 border-y border-white/10 bg-[#05070a]/88 py-3 backdrop-blur">
          <InfiniteMarquee items={tradeLanes} />
        </div>
      </section>

      <section id="route" className="scroll-mt-24 bg-[#05070a] px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center" data-animate>
          <div>
            <SectionHeading eyebrow="The corridor" title="A dedicated route architecture, not a generic shipping page." />
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
              The site now needs to sell one operational truth: Arya Shipping understands this exact vehicle corridor. Every section should reinforce North America origin, Mersin gateway control, and Afghanistan delivery confidence.
            </p>
          </div>

          <div className="route-architecture">
            {routeStages.map((stage) => (
              <article key={stage.code} className="route-stage">
                <span>{stage.code}</span>
                <div>
                  <h3>{stage.title}</h3>
                  <p>{stage.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-y border-white/10 bg-[#080b10] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl" data-animate>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading eyebrow="Capabilities" title="Designed for buyers, dealers, and fleets moving cars into Afghanistan." />
            <p className="max-w-xl text-lg leading-8 text-white/58 lg:justify-self-end">
              Each capability is framed around a real decision the customer has to make: release, pickup, export method, gateway handling, and delivery.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className={`premium-card ${index === 0 ? "md:row-span-2" : ""}`}>
                <div className="mb-10 flex h-14 w-14 items-center justify-center border border-[#00a3ff]/35 bg-[#00a3ff]/10 text-[#5ec8ff]">
                  {service.icon}
                </div>
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[#00a3ff]">0{index + 1}</span>
                <h3 className="mt-4 max-w-md text-3xl font-black leading-tight">{service.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/62">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-white/10 bg-[#05070a] py-6">
        <InfiniteMarquee items={vehicleTypes} reverse />
      </section>

      <section id="process" className="scroll-mt-24 bg-[#080b10] px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl" data-animate>
          <SectionHeading eyebrow="Process" title="A high-control workflow from vehicle release to Afghanistan handover." />
          <div className="process-ladder mt-14">
            {processSteps.map(([title, copy], index) => (
              <article key={title} className="process-step">
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="scroll-mt-24 bg-[#05070a] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Quote desk" title="Make the next action feel like a premium concierge handoff." />
            <div className="mt-10 grid grid-cols-2 gap-3">
              {proofPoints.map(([value, label]) => (
                <div key={label} className="stat-card border border-white/10 bg-white/[0.035] p-5">
                  <div className="text-3xl font-black text-[#65ccff]">{value}</div>
                  <div className="mt-2 text-sm font-semibold text-white/58">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <form className="quote-panel">
            <div className="grid gap-4 sm:grid-cols-2">
              <label>
                <span>Origin</span>
                <select defaultValue="USA">
                  <option>USA</option>
                  <option>Canada</option>
                </select>
              </label>
              <label>
                <span>Destination</span>
                <input defaultValue="Afghanistan" />
              </label>
              <label>
                <span>Vehicle type</span>
                <select defaultValue="SUV">
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Pickup</option>
                  <option>Luxury / Classic</option>
                  <option>Non-running</option>
                </select>
              </label>
              <label>
                <span>Service</span>
                <select defaultValue="Mersin route">
                  <option>Mersin route</option>
                  <option>Ro-Ro</option>
                  <option>Container</option>
                  <option>Pickup + shipping</option>
                </select>
              </label>
            </div>
            <label className="mt-4 block">
              <span>Vehicle / auction link</span>
              <input placeholder="Paste VIN, lot number, or vehicle URL" />
            </label>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:quotes@aryashipping.com" className="magnetic-button flex-1 bg-[#00a3ff] px-6 py-4 text-center font-black text-[#03111d]">
                Send Quote Request
              </a>
              <a href="https://wa.me/971000000000" className="flex-1 border border-white/15 px-6 py-4 text-center font-bold text-white/82 hover:border-[#00a3ff]/60">
                WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#080b10] px-5 py-12 pb-28 sm:px-8 md:pb-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="text-xl font-black">Arya Shipping</div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/58">
              Vehicle shipping from the USA and Canada to Afghanistan through Mersin Port for private buyers, dealers, and fleet clients.
            </p>
            <div className="mt-5 flex gap-2 text-xs font-bold text-white/60">
              <button className="border border-white/12 px-3 py-2">EN</button>
              <button className="border border-white/12 px-3 py-2">PS</button>
              <button className="border border-white/12 px-3 py-2">DR</button>
            </div>
          </div>
          <FooterColumn title="Navigate" items={navItems} />
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/46">Contact</h4>
            <div className="mt-5 grid gap-3 text-sm text-white/68">
              <a href="mailto:info@aryashipping.com">info@aryashipping.com</a>
              <a href="tel:+971000000000">+971 00 000 0000</a>
              <a href="https://wa.me/971000000000">WhatsApp</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/46">Legal</h4>
            <div className="mt-5 grid gap-3 text-sm text-white/68">
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Insurance Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 bg-[#05070a]/92 p-3 backdrop-blur md:hidden">
        <a href="#quote" className="bg-[#00a3ff] px-4 py-3 text-center text-sm font-black text-[#03111d]">
          Get Quote
        </a>
        <a href="https://wa.me/971000000000" className="border border-white/15 px-4 py-3 text-center text-sm font-bold text-white">
          WhatsApp
        </a>
      </div>
    </main>
  );
}

function RouteCommandPanel() {
  return (
    <aside className="command-panel hidden lg:block">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#00a3ff]">Route control</p>
          <h2 className="mt-2 text-2xl font-black">Mersin Gateway</h2>
        </div>
        <span className="border border-[#00a3ff]/35 bg-[#00a3ff]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#7cd5ff]">
          Active
        </span>
      </div>

      <div className="route-map">
        <div className="route-map-line" />
        {["North America", "Mersin", "Afghanistan"].map((item, index) => (
          <div key={item} className="route-node" style={{ left: `${index * 50}%` }}>
            <span />
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-3">
        {routeStages.map((stage) => (
          <div key={stage.code} className="flex items-start gap-4 border border-white/10 bg-white/[0.035] p-4">
            <span className="text-sm font-black text-[#00a3ff]">{stage.code}</span>
            <div>
              <h3 className="font-black">{stage.title}</h3>
              <p className="mt-1 text-sm leading-6 text-white/55">{stage.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="text-sm font-black uppercase tracking-[0.24em] text-[#00a3ff]">{eyebrow}</p>
      <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function FooterColumn({ title, items }: { title: string; items: { label: string; id: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-black uppercase tracking-[0.2em] text-white/46">{title}</h4>
      <div className="mt-5 grid gap-3 text-sm text-white/68">
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="hover:text-[#72d2ff]">
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function InfiniteMarquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {repeatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="marquee-item inline-flex items-center border border-white/10 bg-white/[0.04] px-5 py-3 text-xs font-black uppercase leading-none tracking-[0.16em] text-white/68"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function KeyIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
      <path d="M20 25a8 8 0 1 1 3-6.2L42 18v7h-5v5h-6v-5H20Z" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M12 20h.1" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
    </svg>
  );
}

function RoRoIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
      <path d="M6 30h30l6-8H26l-4-6H10l-4 14Z" stroke="currentColor" strokeWidth="2.6" />
      <path d="M10 34h28M14 38h18M14 24h8" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" />
    </svg>
  );
}

function ContainerIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
      <path d="M7 15h34v22H7V15Z" stroke="currentColor" strokeWidth="2.6" />
      <path d="M14 15v22M22 15v22M30 15v22M7 23h34" stroke="currentColor" strokeWidth="2.2" />
      <path d="M15 33h6m6 0h6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" aria-hidden="true">
      <path d="M10 34c8-18 20 6 28-14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" />
      <path d="M10 38a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM38 22a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="2.6" />
      <path d="M18 18h8M22 14v8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" />
    </svg>
  );
}
