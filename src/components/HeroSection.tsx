import React from 'react';
import { Clock, Star, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 md:pt-20 min-h-screen flex items-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Potong Rambut
              <span className="block text-primary-300">Profesional</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Nikmati pengalaman barbershop terbaik dengan layanan berkualitas tinggi dan suasana yang nyaman.
            </p>
            <button
              onClick={scrollToReservation}
              className="bg-primary-300 text-dark-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-400 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Reservasi Sekarang
            </button>
          </div>

          {/* Features */}
          <div className="space-y-6 animate-slide-up">
            <div className="bg-dark-800/50 backdrop-blur p-6 rounded-xl border border-dark-700 hover:border-primary-300/30 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-300/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Buka Setiap Hari</h3>
                  <p className="text-gray-400">09:00 - 21:00 WIB</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-800/50 backdrop-blur p-6 rounded-xl border border-dark-700 hover:border-primary-300/30 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-300/10 p-3 rounded-lg">
                  <Star className="h-6 w-6 text-primary-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Rating 4.9/5</h3>
                  <p className="text-gray-400">Berdasarkan 500+ review</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-800/50 backdrop-blur p-6 rounded-xl border border-dark-700 hover:border-primary-300/30 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-primary-300/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-300" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Lokasi Strategis</h3>
                  <p className="text-gray-400">Mudah dijangkau & parkir luas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;