import { Nav }          from "@/components/sections/Nav";
import { Hero }         from "@/components/sections/Hero";
import { About }        from "@/components/sections/About";
import { Company }      from "@/components/sections/Company";
import { Services }     from "@/components/sections/Services";
import { Tools }        from "@/components/sections/Tools";
import { Cases }        from "@/components/sections/Cases";
import { Videos }       from "@/components/sections/Videos";
import { Pain }         from "@/components/sections/Pain";
import { Metrics }      from "@/components/sections/Metrics";
import { Differentials } from "@/components/sections/Differentials";
import { CTAFinal }     from "@/components/sections/CTAFinal";
import { Footer }       from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Company />
        <Services />
        <Tools />
        <Cases />
        <Videos />
        <Pain />
        <Metrics />
        <Differentials />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
