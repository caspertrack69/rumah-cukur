import React, { useState } from 'react';
import { useReservation } from '../context/ReservationContext';
import ServiceStep from './reservation/ServiceStep';
import DateTimeStep from './reservation/DateTimeStep';
import CustomerInfoStep from './reservation/CustomerInfoStep';
import ConfirmationStep from './reservation/ConfirmationStep';
import ProgressBar from './reservation/ProgressBar';

const ReservationForm: React.FC = () => {
  const { currentStep } = useReservation();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ServiceStep />;
      case 2:
        return <DateTimeStep />;
      case 3:
        return <CustomerInfoStep />;
      case 4:
        return <ConfirmationStep />;
      default:
        return <ServiceStep />;
    }
  };

  return (
    <section id="reservation" className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Buat Reservasi
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ikuti langkah mudah untuk membuat reservasi
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ProgressBar />
          <div className="mt-8">
            {renderStep()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;