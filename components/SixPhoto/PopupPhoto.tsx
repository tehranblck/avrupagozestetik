'use client'
import React, { useRef } from 'react';
import { gsap } from 'gsap';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    onNext: () => void;
    onPrev: () => void;
}

const PopupPhoto: React.FC<PopupProps> = ({ isOpen, onClose, children, onNext, onPrev }) => {
    const contentRef = useRef<HTMLDivElement | null>(null);

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
            className="fixed inset-0 mt-8 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose} // Pop-up dışına tıklanırsa kapanır
        >
            <div
                ref={contentRef}
                className="relative bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()} // Pop-up içindeki tıklamayı engeller
            >
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 text-black text-xl"
                    aria-label="Close Popup"
                >
                    ✖
                </button>

                {/* Popup içeriği */}
                <div>{children}</div>

                {/* Next ve Previous Buttons */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <button
                        onClick={() => handleAnimation('prev')}
                        className="bg-gray-800 text-white px-3 py-2 rounded-full"
                    >
                        ‹
                    </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                    <button
                        onClick={() => handleAnimation('next')}
                        className="bg-gray-800 text-white px-3 py-2 rounded-full"
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupPhoto;
