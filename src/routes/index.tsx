import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Loader } from "@/components/portfolio/Loader";
import { FloatingContact } from "@/components/portfolio/FloatingContact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karim Ibrahim — Sales, Marketing & Business Development Specialist" },
      { name: "description", content: "Portfolio of Karim Ibrahim Khalil — Sales, Marketing & Business Development Specialist with experience across Medrar, X.Dot Agency, Arqam FC, Fashion Avenue and more." },
      { property: "og:title", content: "Karim Ibrahim — Portfolio" },
      { property: "og:description", content: "Sales, Marketing & Business Development Specialist. Cairo, Egypt." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Loader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
      <FloatingContact />
    </main>
  );
}
