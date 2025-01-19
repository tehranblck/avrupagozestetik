'use client';
import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const AskQuestionButton: React.FC = () => {
    const phoneNumber = '+905301790402'; // WhatsApp numarası
    const [isButtonVisible, setIsButtonVisible] = useState(true); // Buton görünürlüğü durumu

    // WhatsApp'a yönlendirme işlemi
    const handleWhatsAppRedirect = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank'); // Yeni sekmede WhatsApp'a yönlendirme
    };

    // Scroll durumunu kontrol etme
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 1200) {
                setIsButtonVisible(false); // 1200px'den fazla scroll yapıldığında buton gizlenir
            } else {
                setIsButtonVisible(true); // 1200px'den az scroll yapıldığında buton görünür
            }
        };

        // Scroll event listener'ı ekliyoruz
        window.addEventListener('scroll', handleScroll);

        // Cleanup işlemi
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* WhatsApp Butonu */}
            {isButtonVisible && (
                <div className="fixed bottom-4 right-4 z-50">
                    <button
                        onClick={handleWhatsAppRedirect} // Butona tıkladığında WhatsApp'a yönlendirme yapılır
                        className="bg-green-500 text-white px-4 py-2 flex items-center gap-3 font-medium rounded-lg shadow-lg border border-green-600 hover:bg-green-600 transition-all duration-300"
                    >
                        WhatsApp <FaWhatsapp className="text-2xl" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default AskQuestionButton;
