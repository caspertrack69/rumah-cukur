import React from 'react';
import { Scissors, Sparkles, Shirt, Crown } from 'lucide-react';

const ServiceSection: React.FC = () => {
  const services = [
    {
      id: 'haircut',
      name: 'Potong Rambut',
      price: 'Rp 25.000',
      duration: '30 menit',
      description: 'Potong rambut klasik dengan teknik profesional',
      icon: Scissors,
      popular: true,
    },
    {
      id: 'premium',
      name: 'Premium Cut',
      price: 'Rp 50.000',
      duration: '45 menit',
      description: 'Potong rambut + styling + treatment',
      icon: Crown,
      popular: false,
    },
    {
      id: 'shave',
      name: 'Cukur Jenggot',
      price: 'Rp 20.000',
      duration: '20 menit',
      description: 'Cukur jenggot dengan pisau cukur tradisional',
      icon: Sparkles,
      popular: false,
    },
    {
      id: 'complete',
      name: 'Paket Lengkap',
      price: 'Rp 65.000',
      duration: '60 menit',
      description: 'Potong rambut + cukur jenggot + treatment',
      icon: Shirt,
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-20 bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Pilih layanan yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative bg-dark-900 p-6 rounded-xl border border-dark-700 hover:border-primary-300/50 transition-all duration-200 hover:transform hover:scale-105 animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-300 text-dark-900 px-3 py-1 text-sm font-semibold rounded-full">
                      Terpopuler
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className="bg-primary-300/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-primary-300">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.duration}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;