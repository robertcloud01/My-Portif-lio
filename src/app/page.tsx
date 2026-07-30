import { Hero } from "@/components/sections/Hero";

import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Pricing } from "@/components/sections/Pricing";
import { Projects } from "@/components/sections/Projects";
import { Benefits } from "@/components/sections/Benefits";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { TechStackMarquee } from "@/components/sections/TechStackMarquee";
import { PixelDivider } from "@/components/ui/PixelDivider";

export default function Home() {
  return (
    <main id="top" className="flex flex-col">
      <Hero />
      <iframe
        src="https://mjolnir-hazel.vercel.app/"
        className="w-full h-screen border-none bg-transparent block"
        title="Mjolnir Experience"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <About />
      <TechStackMarquee />
      <PixelDivider color="purple" />
      <Services />
      <Process />
      <PixelDivider color="cyan" />
      <Pricing />
      <Projects />
      <PixelDivider color="purple" />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
