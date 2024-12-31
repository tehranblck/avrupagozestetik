'use client';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const AskQuestionButton: React.FC = () => {
    const phoneNumber = '+905327044102'; // WhatsApp numarası
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal açılma durumu

    // Kategoriler
    const categories = [
        'Üst göz kapağı estetiği',
        'Göz altı estetiği',
        'Kaş kaldırma',
        'Şakak germe',
        'Badem göz estetiği',
        'Burun estetiği',
        'Yüz germe',
        'Medikal estetik',
    ];

    // Modal açma/kapama
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Kategoriye tıklanınca WhatsApp'a dinamik mesaj göndermek
    const handleCategorySelect = (category: string) => {
        const whatsappMessage = `Merhaba, ${category} hakkında bilgi almak istiyorum.`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank'); // Yeni sekmede WhatsApp'a yönlendirme
        setIsModalOpen(false); // Modalı kapat
    };

    return (
        <div>
            {/* WhatsApp Butonu */}
            <div className="fixed bottom-4 right-4 z-50">
                <button
                    onClick={toggleModal} // Butona tıklanınca modal açılır
                    className="bg-green-500 text-white px-5 py-3 flex items-center gap-3 font-medium rounded-lg shadow-lg border border-green-600 hover:bg-green-600 transition-all duration-300"
                >
                    WhatsApp <FaWhatsapp className='text-2xl' />
                </button>
            </div>

            {/* Modal Popup - Kategori Seçimi */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h2 className="text-lg font-semibold text-center mb-4">Kategori Seçin</h2>
                        <div className="space-y-3">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategorySelect(category)} // Kategoriye tıklayınca WhatsApp yönlendirmesi yapılır
                                    className="w-full text-left px-4 py-2 border rounded-md hover:bg-gray-100"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={toggleModal} // Modalı kapatır
                            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
                        >
                            Kapat
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AskQuestionButton;
