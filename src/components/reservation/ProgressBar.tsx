import React from 'react';
import { Check } from 'lucide-react';
import { useReservation } from '../../context/ReservationContext';

const ProgressBar: React.FC = () => {
  const { currentStep } = useReservation();

  const steps = [
    { number: 1, title: 'Pilih Layanan' },
    { number: 2, title: 'Pilih Waktu' },
    { number: 3, title: 'Data Diri' },
    { number: 4, title: 'Konfirmasi' },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
                  currentStep > step.number
                    ? 'bg-primary-300 text-dark-900'
                    : currentStep === step.number
                    ? 'bg-primary-300 text-dark-900'
                    : 'bg-dark-700 text-gray-400'
                }`}
              >
                {currentStep > step.number ? (
                  <Check className="h-5 w-5" />
                ) : (
                  step.number
                )}
              </div>
              <span
                className={`mt-2 text-xs md:text-sm font-medium ${
                  currentStep >= step.number ? 'text-primary-300' : 'text-gray-400'
                }`}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 transition-colors ${
                  currentStep > step.number ? 'bg-primary-300' : 'bg-dark-700'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;