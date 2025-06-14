import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ServiceSection from './components/ServiceSection';
import LocationSection from './components/LocationSection';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import BottomNavigation from './components/BottomNavigation';
import { ReservationProvider } from './context/ReservationContext';

function App() {
  return (
    <ReservationProvider>
      <div className="min-h-screen bg-dark-900 text-white">
        <Header />
        <main>
          <HeroSection />
          <PortfolioSection />
          <ServiceSection />
          <LocationSection />
          <ReservationForm />
        </main>
        <Footer />
        <BottomNavigation />
        {/* Add bottom padding to prevent content from being hidden behind bottom nav on mobile */}
        <div className="h-16 md:hidden"></div>
      </div>
    </ReservationProvider>
  );
}

export default App;