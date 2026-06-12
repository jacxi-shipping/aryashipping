"use client";

import { useI18n } from "@/components/I18nProvider";

export default function Quote() {
  const { t } = useI18n();

  return (
    <section id="quote" className="relative z-10 px-6 py-32 sm:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
            {t.quote.heading} <br/> <span className="text-[#00a3ff]">{t.quote.accent}</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-white/60">
            {t.quote.intro}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4">
            {t.quote.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-3xl font-black text-[#00a3ff]">{stat.value}</div>
                <div className="mt-2 text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <form className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a1017]/80 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#00a3ff]/10 to-transparent opacity-50" />

          <div className="relative z-10 grid gap-6 sm:grid-cols-2">
            <label className="block space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">{t.quote.fields.origin}</span>
              <select className="w-full appearance-none rounded-lg border border-white/10 bg-black/50 p-4 text-white outline-none transition-colors focus:border-[#00a3ff] focus:bg-black/80">
                <option>{t.quote.countries.usa}</option>
                <option>{t.quote.countries.canada}</option>
              </select>
            </label>
            <label className="block space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">{t.quote.fields.destination}</span>
              <input readOnly value={t.quote.countries.afghanistan} className="w-full rounded-lg border border-white/10 bg-black/50 p-4 text-white/50 outline-none" />
            </label>
            <label className="block space-y-2 sm:col-span-2">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">{t.quote.fields.vehicle}</span>
              <input placeholder={t.quote.fields.vehiclePlaceholder} className="w-full rounded-lg border border-white/10 bg-black/50 p-4 text-white outline-none transition-colors focus:border-[#00a3ff] focus:bg-black/80 placeholder:text-white/20" />
            </label>

            <button type="button" className="group relative mt-4 overflow-hidden rounded-lg bg-[#00a3ff] p-4 font-black text-[#03111d] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:col-span-2">
              <span className="relative z-10">{t.quote.submit}</span>
              <div className="absolute inset-0 z-0 bg-white opacity-0 transition-opacity group-hover:opacity-20" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
