import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ventures from "@/components/Ventures";
import PortfolioAdvisory from "@/components/PortfolioAdvisory";
import Academic from "@/components/Academic";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Ventures />
        <PortfolioAdvisory />
        <Academic />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
