"use client";

export default function Quote() {
  return (
    <section id="quote" className="relative z-10 px-6 py-32 sm:px-12 lg:px-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Initiate <br/> <span className="text-[#00a3ff]">Transport.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg text-black/60 dark:text-black dark:text-white/60">
            Provide the details. We execute. Experience the zero-friction handoff.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-3xl font-black text-[#00a3ff]">15+</div>
              <div className="mt-2 text-sm text-black/60 dark:text-black dark:text-white/60">Years Experience</div>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 p-6 backdrop-blur-sm">
              <div className="text-3xl font-black text-[#00a3ff]">24/7</div>
              <div className="mt-2 text-sm text-black/60 dark:text-black dark:text-white/60">Command Center</div>
            </div>
          </div>
        </div>

        <form className="relative overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#0a1017]/80 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#00a3ff]/10 to-transparent opacity-50" />

          <div className="relative z-10 grid gap-6 sm:grid-cols-2">
            <label className="block space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-black dark:text-white/60">Origin</span>
              <select className="w-full appearance-none rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black/50 p-4 text-black dark:text-white outline-none transition-colors focus:border-[#00a3ff] focus:bg-white/90 dark:focus:bg-black/80">
                <option>USA</option>
                <option>Canada</option>
              </select>
            </label>
            <label className="block space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-black dark:text-white/60">Destination</span>
              <input readOnly value="Afghanistan" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black/50 p-4 text-black/50 dark:text-white/50 outline-none" />
            </label>
            <label className="block space-y-2 sm:col-span-2">
              <span className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-black dark:text-white/60">Vehicle Link / VIN</span>
              <input placeholder="Paste Auction Link or VIN" className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black/50 p-4 text-black dark:text-white outline-none transition-colors focus:border-[#00a3ff] focus:bg-white/90 dark:focus:bg-black/80 placeholder:text-black dark:text-white/20" />
            </label>

            <button type="button" className="group relative mt-4 overflow-hidden rounded-lg bg-[#00a3ff] p-4 font-black text-[#03111d] transition-transform hover:scale-[1.02] active:scale-[0.98] sm:col-span-2">
              <span className="relative z-10">Request Intelligence Quote</span>
              <div className="absolute inset-0 z-0 bg-white opacity-0 transition-opacity group-hover:opacity-20" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
