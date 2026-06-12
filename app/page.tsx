import Scene from "@/components/3d/Scene";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Process from "@/components/sections/Process";
import Quote from "@/components/sections/Quote";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      <Scene />

      <div className="relative z-10 w-full">
        <Header />
        <Hero />
        <Features />
        <Process />
        <Quote />
        <Footer />
      </div>
    </main>
  );
}
