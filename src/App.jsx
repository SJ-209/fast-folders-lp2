import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
// import SecuritySection from './components/SecuritySection';
import ScrollingReviews from './components/scrolling-reviews';
import Clients from './components/Clients';
import Footer from './components/Footer';



function App() {
  return (
    <div className="min-h-screen" data-theme="dark">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <ScrollingReviews />
      <Clients />
      {/* <UninstallFeedback /> */}
      {/* <SecuritySection /> */}
      <Footer />
    </div>
  );
}

export default App;