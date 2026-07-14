import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { HeroSection } from "@/components/site/HeroSection";
import { CompanyIntroduction } from "@/components/site/CompanyIntroduction";
import { ServicesSection } from "@/components/site/ServicesSection";
import { SolutionsSection } from "@/components/site/SolutionsSection";
import { WorkflowSection } from "@/components/site/WorkflowSection";
import { AdvantagesSection } from "@/components/site/AdvantagesSection";
import { ProjectScopeSection } from "@/components/site/ProjectScopeSection";
import { LocationSection } from "@/components/site/LocationSection";
import { ContactCTA } from "@/components/site/ContactCTA";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CV. Chandra Teknika",
  description:
    "Penyedia kebutuhan lighting, lampu LED, perlengkapan elektrikal, pengadaan, dan dukungan teknis.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Ketintang Baru IV B No. 15",
    addressLocality: "Surabaya",
    addressRegion: "Jawa Timur",
    postalCode: "60231",
    addressCountry: "ID",
  },
  areaServed: "Surabaya, Jawa Timur",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CV. Chandra Teknika | Lighting dan Elektrikal Surabaya" },
      {
        name: "description",
        content:
          "CV. Chandra Teknika menyediakan kebutuhan lighting, lampu LED, perlengkapan elektrikal, pengadaan, dan dukungan teknis untuk bisnis serta proyek di Surabaya.",
      },
      { property: "og:title", content: "CV. Chandra Teknika | Lighting dan Elektrikal Surabaya" },
      {
        property: "og:description",
        content:
          "Solusi lighting dan elektrikal untuk kebutuhan bisnis dan proyek. Berbasis di Surabaya.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-[color:var(--warm)] text-[color:var(--charcoal)]">
      <Header />
      <main>
        <HeroSection />
        <CompanyIntroduction />
        <ServicesSection />
        <SolutionsSection />
        <WorkflowSection />
        <AdvantagesSection />
        <ProjectScopeSection />
        <LocationSection />
        <ContactCTA />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
