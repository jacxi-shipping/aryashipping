import Scene from "@/components/3d/Scene";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import Quote from "@/components/sections/Quote";
import Footer from "@/components/sections/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#030609]">
      <Scene />
      <div className="language-switcher-shell fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
        <LanguageSwitcher />
      </div>

      <div className="relative z-10 w-full">
        <Hero />
        <Features />
        <Process />
        <Quote />
        <Footer />
      </div>
    </main>
  );
}
