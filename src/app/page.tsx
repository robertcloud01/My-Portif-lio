import { Hero } from "@/components/sections/Hero";

import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <iframe
        src="https://mjolnir-hazel.vercel.app/"
        className="w-full h-screen border-none bg-transparent block"
        title="Mjolnir Experience"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
    </main>
  );
}
