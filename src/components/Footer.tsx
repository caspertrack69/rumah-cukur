import React from 'react';
import { Scissors, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-700 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-300 p-2 rounded-lg">
                <Scissors className="h-6 w-6 text-dark-900" />
              </div>
              <span className="text-xl font-bold text-white">
                Rumah Cukur
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Barbershop terpercaya dengan layanan profesional dan suasana yang nyaman untuk semua kalangan.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak & Lokasi</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-primary-300" />
                <span>Jl. Barbershop No. 123, Jakarta</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-primary-300" />
                <span>+62 859-2174-4189</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Clock className="h-5 w-5 text-primary-300" />
                <span>09:00 - 21:00 WIB</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-dark-800 p-3 rounded-lg hover:bg-primary-300 hover:text-dark-900 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-dark-800 p-3 rounded-lg hover:bg-primary-300 hover:text-dark-900 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Rumah Cukur. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;