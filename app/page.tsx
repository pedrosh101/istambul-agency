import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Destinos from "@/components/Destinos";
import Tour from "@/components/Tour";
import Guia from "@/components/Guia";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Intro />
      <Navbar />
      <Hero />
      <About />
      <Destinos />
      <Tour />
      <Guia />
      <Contato />
      <Footer />
    </main>
  );
}
