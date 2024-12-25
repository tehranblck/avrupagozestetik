'use client';
import React, { useState, useEffect } from 'react';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollThreshold = 1400; // 1400px olarak sabit eşik değeri
        if (window.scrollY > scrollThreshold) {
            setIsVisible(true); // Eğer scroll 1400px'i geçerse görünür yap
        } else {
            setIsVisible(false); // 1400px altındaysa görünmez yap
        }
    };

    const handleScrollUp = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={`fixed flex items-center justify-center left-2 bottom-2 z-[99999] text-white bg-blue-500 p-4 rounded-full shadow-lg cursor-pointer text-xs transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                onClick={handleScrollUp}
                style={{
                    pointerEvents: isVisible ? 'auto' : 'none',
                }}
            >
                Yukarı çık
            </div>
        </>
    );
};

export default ScrollUp;
