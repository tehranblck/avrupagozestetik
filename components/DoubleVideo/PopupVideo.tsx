'use client'
import React from 'react';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children, title }) => {
    if (!isOpen) return null;

    return (
        <div style={{ zIndex: '9999' }}
            className="fixed top-0 left-0 w-full bg-black bg-opacity-75   min-h-screen flex items-center justify-center z-50"
            onClick={onClose} // Dış alana tıklanınca kapanır
        >
            <div
                className="relative bg-white p-6 mt-44 rounded-lg shadow-lg  w-full"
                onClick={(e) => e.stopPropagation()} // İçeriğe tıklanınca kapanmayı engeller
            >
                <button
                    onClick={onClose}
                    className="absolute z-50 right-0 top-0 text-black text-2xl"
                    aria-label="Close Popup"
                >
                    ✖
                </button>
                {children}
                <div>
                    <h3 className='text-center text-2xl py-auto'>{title}</h3>
                </div>
            </div>
        </div>
    );
};

export default Popup;
