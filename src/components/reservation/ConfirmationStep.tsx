import React, { useState } from 'react';
import { CheckCircle, Calendar, Clock, User, Phone, MessageSquare, ChevronLeft } from 'lucide-react';
import { useReservation } from '../../context/ReservationContext';

const ConfirmationStep: React.FC = () => {
  const { reservationData, prevStep, resetReservation } = useReservation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    
    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const sendToWhatsApp = () => {
    const { service, date, time, customerInfo } = reservationData;
    
    const message = `*RESERVASI BARBERSHOP*

🔸 *Layanan:* ${service?.name}
💰 *Harga:* ${service?.price}
⏱️ *Durasi:* ${service?.duration}

📅 *Tanggal:* ${formatDate(date)}
🕒 *Waktu:* ${time} WIB

👤 *Nama:* ${customerInfo.name}
📱 *Telepon:* ${customerInfo.phone}${customerInfo.notes ? `\n📝 *Catatan:* ${customerInfo.notes}` : ''}

Mohon konfirmasi ketersediaan jadwal. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6285921744189?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleConfirmReservation = async () => {
    setIsSubmitting(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    sendToWhatsApp();
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleNewReservation = () => {
    resetReservation();
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="animate-fade-in text-center">
        <div className="max-w-md mx-auto">
          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 mb-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-500 mb-2">
              Reservasi Berhasil!
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Data reservasi Anda telah dikirim ke WhatsApp admin. Silakan tunggu konfirmasi dari kami.
            </p>
          </div>
          
          <button
            onClick={handleNewReservation}
            className="w-full bg-primary-300 text-dark-900 py-3 rounded-lg font-semibold hover:bg-primary-400 transition-colors"
          >
            Buat Reservasi Baru
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Konfirmasi Reservasi</h3>
        <p className="text-gray-400">Periksa kembali detail reservasi Anda</p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-dark-800 rounded-xl p-6 mb-6 border border-dark-700">
          {/* Service Details */}
          <div className="border-b border-dark-700 pb-4 mb-4">
            <h4 className="text-lg font-semibold mb-3 text-primary-300">
              Detail Layanan
            </h4>
            <div className="space-y-2">
              <p className="text-white font-medium">{reservationData.service?.name}</p>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Harga:</span>
                <span className="text-primary-300 font-semibold">
                  {reservationData.service?.price}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Durasi:</span>
                <span className="text-white">{reservationData.service?.duration}</span>
              </div>
            </div>
          </div>

          {/* Date & Time */}
          <div className="border-b border-dark-700 pb-4 mb-4">
            <h4 className="text-lg font-semibold mb-3 text-primary-300">
              Jadwal
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-gray-400" />
                <span className="text-white">{formatDate(reservationData.date)}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="text-white">{reservationData.time} WIB</span>
              </div>
            </div>
          </div>

          {/* Customer Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-primary-300">
              Data Diri
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <User className="h-5 w-5 text-gray-400" />
                <span className="text-white">{reservationData.customerInfo.name}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="text-white">{reservationData.customerInfo.phone}</span>
              </div>
              {reservationData.customerInfo.notes && (
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 text-gray-400 mt-0.5" />
                  <span className="text-white text-sm leading-relaxed">
                    {reservationData.customerInfo.notes}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-primary-300/10 border border-primary-300/20 rounded-lg p-4 mb-6">
          <p className="text-primary-300 text-sm leading-relaxed">
            Dengan menekan tombol "Konfirmasi Reservasi", data reservasi akan dikirim ke WhatsApp admin untuk konfirmasi lebih lanjut.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-6">
        <button
          onClick={prevStep}
          disabled={isSubmitting}
          className="flex items-center space-x-2 px-6 py-3 bg-dark-800 text-white rounded-lg hover:bg-dark-700 transition-colors disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Kembali</span>
        </button>
        
        <button
          onClick={handleConfirmReservation}
          disabled={isSubmitting}
          className="flex items-center space-x-2 px-8 py-3 bg-primary-300 text-dark-900 rounded-lg hover:bg-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin"></div>
              <span>Mengirim...</span>
            </>
          ) : (
            <>
              <CheckCircle className="h-4 w-4" />
              <span>Konfirmasi Reservasi</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ConfirmationStep;