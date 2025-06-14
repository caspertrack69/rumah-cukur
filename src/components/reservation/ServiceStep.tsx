import React from 'react';
import { Scissors, Sparkles, Shirt, Crown } from 'lucide-react';
import { useReservation } from '../../context/ReservationContext';

const ServiceStep: React.FC = () => {
  const { reservationData, setReservationData, nextStep } = useReservation();

  const services = [
    {
      id: 'haircut',
      name: 'Potong Rambut',
      price: 'Rp 25.000',
      duration: '30 menit',
      description: 'Potong rambut klasik dengan teknik profesional',
      icon: Scissors,
    },
    {
      id: 'premium',
      name: 'Premium Cut',
      price: 'Rp 50.000',
      duration: '45 menit',
      description: 'Potong rambut + styling + treatment',
      icon: Crown,
    },
    {
      id: 'shave',
      name: 'Cukur Jenggot',
      price: 'Rp 20.000',
      duration: '20 menit',
      description: 'Cukur jenggot dengan pisau cukur tradisional',
      icon: Sparkles,
    },
    {
      id: 'complete',
      name: 'Paket Lengkap',
      price: 'Rp 65.000',
      duration: '60 menit',
      description: 'Potong rambut + cukur jenggot + treatment',
      icon: Shirt,
    },
  ];

  const handleServiceSelect = (service: typeof services[0]) => {
    setReservationData({ service });
    nextStep();
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Pilih Layanan</h3>
        <p className="text-gray-400">Pilih layanan yang Anda inginkan</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {services.map((service) => {
          const IconComponent = service.icon;
          const isSelected = reservationData.service?.id === service.id;

          return (
            <button
              key={service.id}
              onClick={() => handleServiceSelect(service)}
              className={`p-6 rounded-xl border-2 transition-all duration-200 text-left hover:transform hover:scale-105 ${
                isSelected
                  ? 'border-primary-300 bg-primary-300/10'
                  : 'border-dark-700 bg-dark-800 hover:border-primary-300/50'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${
                  isSelected ? 'bg-primary-300' : 'bg-primary-300/10'
                }`}>
                  <IconComponent className={`h-6 w-6 ${
                    isSelected ? 'text-dark-900' : 'text-primary-300'
                  }`} />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">{service.name}</h4>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-300 font-bold">
                      {service.price}
                    </span>
                    <span className="text-sm text-gray-400">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceStep;