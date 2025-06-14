import React, { useState } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReservation } from '../../context/ReservationContext';

const DateTimeStep: React.FC = () => {
  const { reservationData, setReservationData, nextStep, prevStep } = useReservation();
  const [selectedDate, setSelectedDate] = useState(reservationData.date);
  const [selectedTime, setSelectedTime] = useState(reservationData.time);

  // Generate next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    
    return dates;
  };

  // Available time slots
  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
  ];

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const formatDisplayDate = (date: Date) => {
    const days = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
      'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'
    ];
    
    return {
      day: days[date.getDay()],
      date: date.getDate(),
      month: months[date.getMonth()],
    };
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setReservationData({ date: selectedDate, time: selectedTime });
      nextStep();
    }
  };

  const dates = generateDates();

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Pilih Tanggal & Waktu</h3>
        <p className="text-gray-400">Pilih tanggal dan jam yang sesuai untuk Anda</p>
      </div>

      {/* Date Selection */}
      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="h-5 w-5 text-primary-300" />
          <h4 className="text-lg font-semibold">Pilih Tanggal</h4>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
          {dates.map((date) => {
            const dateStr = formatDate(date);
            const displayDate = formatDisplayDate(date);
            const isSelected = selectedDate === dateStr;
            const isToday = formatDate(new Date()) === dateStr;

            return (
              <button
                key={dateStr}
                onClick={() => setSelectedDate(dateStr)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 hover:transform hover:scale-105 ${
                  isSelected
                    ? 'border-primary-300 bg-primary-300/20'
                    : 'border-dark-700 bg-dark-800 hover:border-primary-300/50'
                }`}
              >
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">
                    {displayDate.day}
                  </div>
                  <div className={`text-lg font-semibold ${
                    isSelected ? 'text-primary-300' : 'text-white'
                  }`}>
                    {displayDate.date}
                  </div>
                  <div className="text-xs text-gray-400">
                    {displayDate.month}
                  </div>
                  {isToday && (
                    <div className="text-xs text-primary-300 mt-1">Hari ini</div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div className="mb-8 animate-slide-up">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="h-5 w-5 text-primary-300" />
            <h4 className="text-lg font-semibold">Pilih Waktu</h4>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
            {timeSlots.map((time) => {
              const isSelected = selectedTime === time;

              return (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg border-2 transition-all duration-200 hover:transform hover:scale-105 ${
                    isSelected
                      ? 'border-primary-300 bg-primary-300/20 text-primary-300'
                      : 'border-dark-700 bg-dark-800 hover:border-primary-300/50 text-white'
                  }`}
                >
                  <div className="text-sm font-semibold">{time}</div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        <button
          onClick={prevStep}
          className="flex items-center space-x-2 px-6 py-3 bg-dark-800 text-white rounded-lg hover:bg-dark-700 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Kembali</span>
        </button>
        
        <button
          onClick={handleContinue}
          disabled={!selectedDate || !selectedTime}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
            selectedDate && selectedTime
              ? 'bg-primary-300 text-dark-900 hover:bg-primary-400'
              : 'bg-dark-700 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>Lanjutkan</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default DateTimeStep;