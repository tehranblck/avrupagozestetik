'use client'
import React, { useRef } from 'react';
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
        <div style={{ zIndex: '99999999' }}
            className="fixed min-h-screen left-0 top-0  bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={onClose} // Pop-up dışına tıklanırsa kapanır
        >
            <div
                ref={contentRef}
                className="relative bg-white mt-44 p-6 rounded-lg shadow-lg max-w-4xl w-full"
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
                <div>
                    <h3 className='text-center text-3xl'>{title}</h3>
                </div>

                {/* Next ve Previous Buttons */}
                <div className="absolute top-1/2 left-1 transform -translate-y-1/2">
                    <button
                        onClick={() => handleAnimation('prev')}
                        className="bg-gray-800 text-white p-4 text-2xl rounded-full"
                    >
                        ‹
                    </button>
                </div>
                <div className="absolute top-1/2 right-1 transform -translate-y-1/2">
                    <button
                        onClick={() => handleAnimation('next')}
                        className="bg-gray-800 text-2xl text-white p-4 rounded-full"
                    >
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopupPhoto;
