import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import TopBar from "./components/TopBar";
import BottomNav from "./components/BottomNav";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSection />
      <About />
      <Services/>
      <Testimonials />
      <Footer />
      <BottomNav />
    </>
  );
}
