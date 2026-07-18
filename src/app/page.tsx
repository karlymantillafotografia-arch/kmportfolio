import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { FeaturedPortfolio } from "@/components/sections/FeaturedPortfolio";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Services } from "@/components/sections/Services";
import { VideosAndConsulting } from "@/components/sections/VideosAndConsulting";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <FeaturedPortfolio />
      <BeforeAfter carousel mobileLimit={4} />
      <Services compact />
      <VideosAndConsulting />
      <CtaBanner />
    </PageShell>
  );
}
