import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/About";
import { Contribute } from "@/components/site/Contribute";
import { Flix } from "@/components/site/Flix";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Location } from "@/components/site/Location";
import { Services } from "@/components/site/Services";
import { Social } from "@/components/site/Social";
import { CHURCH } from "@/lib/church";

const TITLE = "Igreja Deus das Nações (IDDNS) | Igreja em Sobradinho II – Brasília, DF";
const DESCRIPTION =
  "Igreja evangélica em Sobradinho II, Brasília – DF. Cultos terça, sexta e domingo às 19h30 e IDDNSFLIX às segundas, 22h. Venha com sua família!";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: CHURCH.name,
  alternateName: CHURCH.short,
  address: {
    "@type": "PostalAddress",
    streetAddress: "AR 16",
    addressLocality: "Sobradinho II, Brasília",
    addressRegion: "DF",
    postalCode: CHURCH.cep,
    addressCountry: "BR",
  },
  sameAs: [CHURCH.instagram.url, CHURCH.youtube.url],
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "19:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "19:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "19:30" },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "igreja Sobradinho II, igreja evangélica Sobradinho, igreja Brasília DF, Igreja Deus das Nações, IDDNS, culto Sobradinho",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "geo.region", content: "BR-DF" },
      { name: "geo.placename", content: "Sobradinho II, Brasília" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Flix />
        <Social />
        <Contribute />
        <Location />
      </main>
      <Footer />
    </>
  );
}
