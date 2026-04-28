import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Featured } from "@/components/Featured";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { featured, featuredHorus } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Featured
          project={featured}
          eyebrow="02 — Featured"
          sectionId="nyxus"
          coverAlt={`${featured.title} screenshot — chat UI with RAG citations and PII redaction`}
          gallery={[
            { src: "/projects/security-scan.png", alt: "OWASP code scanner" },
            { src: "/projects/audit.png", alt: "Audit log table" },
            { src: "/projects/login.png", alt: "Login screen" },
          ]}
        />
        <Featured
          project={featuredHorus}
          eyebrow="03 — Featured"
          sectionId="horus"
        />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
