'use client';
import React, { useEffect, useState } from 'react';

const AskQuestionButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        // Sayfanın yukarıdan ne kadar kaydırıldığını kontrol et
        const scrollThreshold = 1250; // 800px olarak belirlenen eşik değeri
        if (window.scrollY >= scrollThreshold) {
            setIsVisible(false); // Eğer scroll 800px'i geçtiyse görünmez yap
        } else {
            setIsVisible(true); // Scroll 800px altındaysa görünür yap
        }
    };

    useEffect(() => {
        // Scroll event listener'ını ekle
        window.addEventListener('scroll', handleScroll);

        // Cleanup işlemi için listener'ı kaldır
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <p
                    className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-md p-3 shadow-lg flex items-center justify-center cursor-pointer"
                    style={{ zIndex: 9999 }}
                    onClick={() => alert('Bize soru sor!')}
                >
                    Bize soru sor
                </p>
            )}
        </>
    );
};

export default AskQuestionButton;
