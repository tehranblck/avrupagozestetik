'use client';
import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = '+905327044102';

    const handleWhatsAppRedirect = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button
            onClick={handleWhatsAppRedirect}
            className="bg-green-500 text-white text-center ml-3 mt-4 font-semibold rounded-full px-3 py-2 shadow-lg hover:bg-green-600 transition duration-300"
        >
            WhatsApp ile  İletişime Geç
        </button>
    );
};

export default WhatsAppButton;
