import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
}

interface CustomerInfo {
  name: string;
  phone: string;
  notes: string;
}

interface ReservationData {
  service: Service | null;
  date: string;
  time: string;
  customerInfo: CustomerInfo;
}

interface ReservationContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  reservationData: ReservationData;
  setReservationData: (data: Partial<ReservationData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetReservation: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

const initialReservationData: ReservationData = {
  service: null,
  date: '',
  time: '',
  customerInfo: {
    name: '',
    phone: '',
    notes: '',
  },
};

export const ReservationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [reservationData, setReservationDataState] = useState<ReservationData>(initialReservationData);

  const setReservationData = (data: Partial<ReservationData>) => {
    setReservationDataState(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const resetReservation = () => {
    setCurrentStep(1);
    setReservationDataState(initialReservationData);
  };

  return (
    <ReservationContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        reservationData,
        setReservationData,
        nextStep,
        prevStep,
        resetReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error('useReservation must be used within a ReservationProvider');
  }
  return context;
};