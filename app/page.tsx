import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoTicker from "./sections/LogoTicker";
import ProductShowcase from "./sections/ProductShowcase";
import CallToAction from "./sections/CallToAction";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <LogoTicker />
        <ProductShowcase />
        <Pricing />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
