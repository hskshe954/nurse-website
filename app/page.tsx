import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingContact from "@/components/FloatingContact";
import Feedback from "@/components/Feedback";
import About from "@/components/About";
import Services from "@/components/Services";
import ResultsGallery from "@/components/ResultsGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FloatingContact />
      <Feedback />
      <About />
      <Services />
      <ResultsGallery />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}