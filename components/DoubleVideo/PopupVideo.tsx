'use client';
import React, { useEffect } from 'react';
import AskPriceButton from '../AskPriceButton/AskPriceButton';
import { MdOutlineClose } from "react-icons/md";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children, title }) => {
    // Scroll engelleme kontrolü
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Scroll'u devre dışı bırak
        } else {
            document.body.style.overflow = ''; // Varsayılan scroll davranışı
        }

        return () => {
            document.body.style.overflow = ''; // Cleanup işlemi
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            style={{ zIndex: '9999' }}
            className="fixed top-0 w-full left-0 min-h-screen  backdrop-blur-sm  flex items-center justify-center z-50"
            onClick={onClose} // Dış alana tıklanınca kapanır
        >
            <div
                className="relative bg-red-800 pt-8 rounded-lg shadow-lg w-full max-w-lg mx-auto"
                onClick={(e) => e.stopPropagation()} // İçeriğe tıklanınca kapanmayı engeller
            >
                <button
                    onClick={onClose}
                    className="absolute z-50 right-0 top-0 text-white text-4xl"
                    aria-label="Close Popup"
                >
                    <MdOutlineClose />
                </button>
                {children}
                <div className="my-2 text-center">
                    <AskPriceButton />
                </div>
            </div>
        </div>
    );
};

export default Popup;
