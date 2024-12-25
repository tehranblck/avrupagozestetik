'use client';
import { FaArrowUp } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const showAfter = window.innerHeight;
        if (window.scrollY > showAfter) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const handleScrollUp = (e: React.MouseEvent) => {
        e.preventDefault(); // Link davranışını engelle
        window.scrollTo({
            top: 0, // En üst pozisyona kaydır
            behavior: 'smooth', // Yumuşak kaydırma
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Scroll olayını dinle
        return () => {
            window.removeEventListener('scroll', handleScroll); // Temizle
        };
    }, []);

    return (
        <>
            <div
                className={`fixed flex items-center justify-center left-2 bottom-2 z-[99999] text-white bg-blue-500 p-4 rounded-full shadow-lg cursor-pointer text-xs transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}
                onClick={handleScrollUp}
                style={{
                    pointerEvents: isVisible ? 'auto' : 'none', // Gizli durumda tıklanamaz
                }}
            >
                Yukarı çık
            </div>
        </>
    );
};

export default ScrollUp;
