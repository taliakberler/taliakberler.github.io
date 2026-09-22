import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Writing } from "@/components/Writing";
import { Contact } from "@/components/Contact";
import { SiteFooter } from "@/components/SiteFooter";

export const Home = () => (
  <>
    <SiteHeader />
    <main>
      <Hero />
      <Approach />
      <Work />
      <Experience />
      <Writing />
      <Contact />
    </main>
    <SiteFooter />
  </>
);
