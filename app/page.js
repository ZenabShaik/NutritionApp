import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ResultsSection from "@/components/ResultsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      name: "NutriBalance",
      areaServed: [
        "Hyderabad",
        "Bangalore",
        "Nizamabad",
        "Adilabad",
        "Nirmal",
        "Armoor"
      ],
      serviceType: [
        "Weight Loss Diet Plan",
        "Diabetes Diet Plan",
        "PCOS Diet Plan"
      ]
    })
  }}
/>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <Problems />
      <About />
      <Services />
      <Pricing />
      <Testimonials />
      <ResultsSection />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
