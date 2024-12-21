'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    onNext: () => void;
    onPrev: () => void;
    title?: string;
}

const PopupPhoto: React.FC<PopupProps> = ({ isOpen, onClose, children, onNext, onPrev, title }) => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    // Scroll engelleme kontrolü
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Scroll engelle
        } else {
            document.body.style.overflow = ''; // Varsayılan scroll davranışı
        }

        return () => {
            document.body.style.overflow = ''; // Cleanup
        };
    }, [isOpen]);

    const handleAnimation = (direction: 'next' | 'prev') => {
        if (!contentRef.current) return;

        const tl = gsap.timeline();
        tl.to(contentRef.current, {
            opacity: 0,
            x: direction === 'next' ? -100 : 100,
            duration: 0.5,
            onComplete: () => {
                if (direction === 'next') {
                    onNext();
                } else {
                    onPrev();
                }
            },
        }).to(contentRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
        });
    };

    if (!isOpen) return null;

    return (
        <div
            style={{ zIndex: 9999 }}
            className="fixed top-0 w-full left-0 min-h-screen bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose} // Pop-up dışına tıklanırsa kapanır
        >
            <div
                ref={contentRef}
                className="relative bg-white mt-28 p-1 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-w-7xl"
                onClick={(e) => e.stopPropagation()} // Pop-up içindeki tıklamayı engeller
            >
                {/* Close Button */}
                <button
                    onClick={onClose} style={{ color: 'black' }}
                    className="absolute top-0 right-0 text-black  rounded-full hover:text-black text-4xl md:text-3xl focus:outline-none"
                    aria-label="Close Popup"
                >
                    ✖
                </button>

                {/* Popup Content */}
                <div className="mx-auto w-full flex justify-center">{children}</div>
                <div className="mt-4 text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-800">
                        {title}
                    </h3>
                </div>

                {/* Next and Previous Buttons */}
                <div className="absolute top-1/2 -left-4 border-2 border-white rounded-full transform -translate-y-1/2">
                    <button
                        onClick={() => handleAnimation('prev')}
                        className="bg-gray-800 font-bold text-white p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 rounded-full text-2xl sm:text-xl md:text-2xl lg:text-3xl focus:outline-none hover:bg-gray-600"
                    >
                        ‹
                    </button>
                </div>
                <div className="absolute top-1/2 -right-4 border-2 border-white rounded-full transform -translate-y-1/2">
                    <button
                        onClick={() => handleAnimation('next')}
                        className="bg-gray-800 font-bold text-white p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 rounded-full text-2xl sm:text-xl md:text-2xl lg:text-3xl focus:outline-none hover:bg-gray-600"
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupPhoto;
