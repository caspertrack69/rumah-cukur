import React, { useState } from 'react';
import { User, Phone, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReservation } from '../../context/ReservationContext';

const CustomerInfoStep: React.FC = () => {
  const { reservationData, setReservationData, nextStep, prevStep } = useReservation();
  
  const [formData, setFormData] = useState({
    name: reservationData.customerInfo.name,
    phone: reservationData.customerInfo.phone,
    notes: reservationData.customerInfo.notes,
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
  });

  const validateForm = () => {
    const newErrors = { name: '', phone: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor telepon harus diisi';
      isValid = false;
    } else if (!/^(\+62|62|0)[0-9]{9,12}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Format nomor telepon tidak valid';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleContinue = () => {
    if (validateForm()) {
      setReservationData({
        customerInfo: formData,
      });
      nextStep();
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Data Diri</h3>
        <p className="text-gray-400">Lengkapi data diri untuk reservasi</p>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="flex items-center space-x-2 mb-3">
            <User className="h-5 w-5 text-primary-300" />
            <span className="text-sm font-medium">Nama Lengkap *</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="Masukkan nama lengkap"
            className={`w-full px-4 py-3 bg-dark-800 border-2 rounded-lg focus:outline-none transition-colors ${
              errors.name
                ? 'border-red-500 focus:border-red-400'
                : 'border-dark-700 focus:border-primary-300'
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-2">{errors.name}</p>
          )}
        </div>

        {/* Phone Input */}
        <div>
          <label htmlFor="phone" className="flex items-center space-x-2 mb-3">
            <Phone className="h-5 w-5 text-primary-300" />
            <span className="text-sm font-medium">Nomor Telepon *</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="08xxxxxxxxxx"
            className={`w-full px-4 py-3 bg-dark-800 border-2 rounded-lg focus:outline-none transition-colors ${
              errors.phone
                ? 'border-red-500 focus:border-red-400'
                : 'border-dark-700 focus:border-primary-300'
            }`}
          />
          {errors.phone && (
            <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
          )}
        </div>

        {/* Notes Input */}
        <div>
          <label htmlFor="notes" className="flex items-center space-x-2 mb-3">
            <MessageSquare className="h-5 w-5 text-primary-300" />
            <span className="text-sm font-medium">Catatan (Opsional)</span>
          </label>
          <textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => handleInputChange('notes', e.target.value)}
            placeholder="Catatan khusus untuk reservasi (opsional)"
            rows={4}
            className="w-full px-4 py-3 bg-dark-800 border-2 border-dark-700 rounded-lg focus:outline-none focus:border-primary-300 transition-colors resize-none"
          />
        </div>

        <div className="text-xs text-gray-400 bg-dark-800 p-3 rounded-lg">
          <p>* Data yang Anda berikan akan digunakan untuk konfirmasi reservasi melalui WhatsApp.</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-8">
        <button
          onClick={prevStep}
          className="flex items-center space-x-2 px-6 py-3 bg-dark-800 text-white rounded-lg hover:bg-dark-700 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Kembali</span>
        </button>
        
        <button
          onClick={handleContinue}
          className="flex items-center space-x-2 px-6 py-3 bg-primary-300 text-dark-900 rounded-lg hover:bg-primary-400 transition-colors"
        >
          <span>Lanjutkan</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CustomerInfoStep;