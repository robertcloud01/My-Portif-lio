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
import { MjolnirExperience } from "@/components/sections/MjolnirExperience";

export default function Home() {
  return (
    <main id="top" className="flex flex-col">
      <Hero />
      <MjolnirExperience />
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
