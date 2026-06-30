import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingContact from "@/components/FloatingContact";
import Feedback from "@/components/Feedback";
import About from "@/components/About";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
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
      <Gallery />
      <BeforeAfter />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}