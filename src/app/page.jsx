import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import ScrollingReviews from '../components/scrolling-reviews';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" data-theme="dark">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <ScrollingReviews />
      <Clients />
      <Footer />
    </div>
  );
}
