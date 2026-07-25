import { Hero } from "@/components/sections/home/Hero";
import { ScrollStatement } from "@/components/sections/home/ScrollStatement";
import { WhoWeAre } from "@/components/sections/home/WhoWeAre";
import { Services } from "@/components/sections/home/Services";
import { FeaturedProjects } from "@/components/sections/home/FeaturedProjects";
import { CaseStudySpotlight } from "@/components/sections/home/CaseStudySpotlight";
import { Process } from "@/components/sections/home/Process";
import { TechStack } from "@/components/sections/home/TechStack";
import { Industries } from "@/components/sections/home/Industries";
import { Achievements } from "@/components/sections/home/Achievements";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { FAQ } from "@/components/sections/home/FAQ";
import { Insights } from "@/components/sections/home/Insights";
import { CTA } from "@/components/sections/home/CTA";
import { Contact } from "@/components/sections/home/Contact";
import { siteConfig } from "@/lib/site-config";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  image: `${siteConfig.url}/og/trisyntax-og.jpg`,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  areaServed: "Worldwide",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <ScrollStatement />
      <WhoWeAre />
      <Services />
      <FeaturedProjects />
      <CaseStudySpotlight />
      <Process />
      <TechStack />
      <Industries />
      <Achievements />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Insights />
      <CTA />
      <Contact />
    </>
  );
}
