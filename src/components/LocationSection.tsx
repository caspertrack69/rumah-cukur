import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const LocationSection: React.FC = () => {
  const openMaps = () => {
    window.open('https://maps.app.goo.gl/Yx2KN1XvX3etiTc49', '_blank');
  };

  return (
    <section id="location" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lokasi & Kontak
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Kunjungi barbershop kami di lokasi yang mudah dijangkau
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-dark-800 p-6 rounded-xl border border-dark-700">
              <h3 className="text-2xl font-bold mb-6 text-primary-300">
                Informasi Kontak
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-300/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Alamat</h4>
                    <p className="text-gray-400 leading-relaxed">
                      RUMAH CUKUR<br />
                      Jl. Letkol Istiqlah No.135, Lingkungan Mojoroto R, Penataban, Kec. Giri, Kabupaten Banyuwangi, Jawa Timur 68422
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-300/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Jam Operasional</h4>
                    <div className="text-gray-400 space-y-1">
                      <p>Senin - Jumat: 09:00 - 21:00 WIB</p>
                      <p>Sabtu - Minggu: 08:00 - 22:00 WIB</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-300/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-300" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Telepon</h4>
                    <p className="text-gray-400">+62 859-2174-4189</p>
                  </div>
                </div>
              </div>

              <button
                onClick={openMaps}
                className="w-full mt-6 bg-primary-300 text-dark-900 py-3 px-6 rounded-lg font-semibold hover:bg-primary-400 transition-colors flex items-center justify-center space-x-2"
              >
                <Navigation className="h-5 w-5" />
                <span>Buka di Google Maps</span>
              </button>
            </div>
          </div>

          {/* Map Embed */}
          <div className="relative">
            <div className="bg-dark-800 p-4 rounded-xl border border-dark-700">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78909.61131605673!2d114.32427516331913!3d-8.142673911885828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1456c414665fd%3A0x8d5c2e4fadc4ccf9!2sRUMAH%20CUKUR!5e1!3m2!1sen!2sid!4v1749871018557!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;