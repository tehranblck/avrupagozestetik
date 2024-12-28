'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const AskQuestionButton: React.FC = () => {
    const buttonRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const scrollThreshold = 1250;
        if (window.scrollY >= scrollThreshold) {
            buttonRef.current?.classList.add('hidden');
        } else {
            buttonRef.current?.classList.remove('hidden');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div ref={buttonRef} className="fixed bottom-4 right-4 z-50">
            <Link
                href="https://wa.me/905327044102" // WhatsApp numaranızı buraya ekleyin
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-5 py-3 flex items-center gap-3 font-medium rounded-lg shadow-lg border border-green-600 hover:bg-green-600 transition-all duration-300"
            >
                WhatsApp'tan Soru Sor
            </Link>
        </div>
    );
};

export default AskQuestionButton;
