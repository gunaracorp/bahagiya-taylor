import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { CtaBanner } from "@/components/cta-banner";
import { FloatingActions } from "@/components/floating-actions";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Navbar } from "@/components/navbar";
import { Portfolio } from "@/components/portfolio";
import { Preloader } from "@/components/preloader";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";
import { WhyUs } from "@/components/why-us";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
