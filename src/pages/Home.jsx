import { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import ProductsInAction from '../components/ProductsInAction';
import ReviewsSection from '../components/ReviewsSection';
import SupportBar from '../components/SupportBar';
import Footer from '../components/Footer';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Navbar />
        <main>
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <ProductsSection />
          <ProductsInAction />
          <ReviewsSection />
          <SupportBar />
        </main>
        <Footer />
      </div>
    </>
  );
}