import { PremiumNavbar } from "@/components/PremiumNavbar";
import { Hero } from "@/components/Hero";
import { PremiumAbout } from "@/components/PremiumAbout";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Locations } from "@/components/Locations";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen">
        <PremiumNavbar />
        <Hero />
        <PremiumAbout />
        <Services />
        <Gallery />
        <Testimonials />
        <Booking />
        <Locations />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default Index;
