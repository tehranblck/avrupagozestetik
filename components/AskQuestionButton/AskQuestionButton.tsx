'use client';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const AskQuestionButton: React.FC = () => {
    const phoneNumber = '+905327044102'; // WhatsApp numarası

    // WhatsApp'a yönlendirme işlemi
    const handleWhatsAppRedirect = () => {
        const whatsappMessage = "Merhaba, size nasıl yardımcı olabilirim?";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank'); // Yeni sekmede WhatsApp'a yönlendirme
    };

    return (
        <div>
            {/* WhatsApp Butonu */}
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={handleWhatsAppRedirect} // Butona tıkladığında WhatsApp'a yönlendirme yapılır
                    className="bg-green-500 text-white px-5 py-3 flex items-center gap-3 font-medium rounded-lg shadow-lg border border-green-600 hover:bg-green-600 transition-all duration-300"
                >
                    WhatsApp <FaWhatsapp className="text-2xl" />
                </button>
            </div>
        </div>
    );
};

export default AskQuestionButton;
