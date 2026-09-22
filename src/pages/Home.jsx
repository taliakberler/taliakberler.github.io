import { SiteHeader } from "@/components/SiteHeader";
import { Fireflies } from "@/components/Fireflies";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export const Home = () => (
  <>
    <Fireflies />
    <SiteHeader />
    <main className="relative z-10">
      <Hero />
      <Skills />
      <Work />
      <Experience />
      <Writing />
      <Contact />
    </main>
    <div className="relative z-10">
      <SiteFooter />
    </div>
  </>
);
