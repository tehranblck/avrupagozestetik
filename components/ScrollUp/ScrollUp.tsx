'use client';
import { FaArrowUp } from "react-icons/fa6";
import React from 'react';

const ScrollUp = () => {
    const handleScrollUp = (e: React.MouseEvent) => {
        e.preventDefault(); // Link davranışını engelle
        window.scrollTo({
            top: 0, // En üst pozisyona kaydır
            behavior: 'smooth', // Yumuşak kaydırma
        });
    };

    return (
        <>
            <FaArrowUp className="text-5xl text-white bg-blue-500 px-4 rounded-full  fixed left-2 bottom-2" style={{ zIndex: '99999' }}
                onClick={handleScrollUp}
            />
        </>
    );
};

export default ScrollUp;
