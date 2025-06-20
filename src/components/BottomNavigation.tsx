import React, { useState, useEffect } from 'react';
import { Home, Scissors, Calendar, Phone, MapPin } from 'lucide-react';

const navItems = [
  {
    id: 'home',
    label: 'Beranda',
    icon: Home,
    action: (scrollToSection: (id: string) => void, handleContactClick: () => void) => () => scrollToSection('home'),
  },
  {
    id: 'services',
    label: 'Layanan',
    icon: Scissors,
    action: (scrollToSection: (id: string) => void, handleContactClick: () => void) => () => scrollToSection('services'),
  },
  {
    id: 'location',
    label: 'Lokasi',
    icon: MapPin,
    action: (scrollToSection: (id: string) => void, handleContactClick: () => void) => () => scrollToSection('location'),
  },
  {
    id: 'reservation',
    label: 'Reservasi',
    icon: Calendar,
    action: (scrollToSection: (id: string) => void, handleContactClick: () => void) => () => scrollToSection('reservation'),
  },
  {
    id: 'contact',
    label: 'Kontak',
    icon: Phone,
    action: (scrollToSection: (id: string) => void, handleContactClick: () => void) => handleContactClick,
  },
];

const BottomNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const message = encodeURIComponent('Halo, saya ingin bertanya tentang layanan barbershop Rumah Cukur.');
    const whatsappUrl = `https://wa.me/6285921744189?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'location', 'reservation'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bottom navigation (mobile)
  const renderBottomNav = () => (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur-sm border-t border-dark-700 md:hidden">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id || (item.id === 'contact' && false);
          return (
            <button
              key={item.id}
              onClick={item.action(scrollToSection, handleContactClick)}
              className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
                isActive
                  ? 'text-primary-300'
                  : 'text-gray-400 hover:text-primary-300'
              }`}
            >
              <IconComponent className="h-4 w-4" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );

  // Top navbar (desktop/tablet)
  const renderTopNav = () => (
    <nav className="hidden md:flex fixed top-0 left-0 right-0 z-40 bg-dark-900/95 backdrop-blur-sm border-b border-dark-700 h-16 items-center justify-center">
      <div className="flex gap-8">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeSection === item.id || (item.id === 'contact' && false);
          return (
            <button
              key={item.id}
              onClick={item.action(scrollToSection, handleContactClick)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'text-primary-300 bg-dark-800'
                  : 'text-gray-300 hover:text-primary-300 hover:bg-dark-800/70'
              }`}
            >
              <IconComponent className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );

  return (
    <>
      {renderTopNav()}
      {renderBottomNav()}
    </>
  );
};

export default BottomNavigation;