import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventShowcase from "@/components/EventShowcase";
import FacilitiesSection from "@/components/FacilitiesSection";
import VideoShowcase from "@/components/VideoShowcase";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import LocationSection from "@/components/LocationSection";
import BookingSection from "@/components/BookingSection";
import SocialSection from "@/components/SocialSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Preloader />
      <Navbar />
      <HeroSection />
      <EventShowcase />
      <FacilitiesSection />
      <VideoShowcase />
      <GallerySection />
      <PricingSection />
      <LocationSection />
      <BookingSection />
      <SocialSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
