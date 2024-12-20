'use client'
import React from 'react';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const PopupSingleVideo: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center w-full h-screen justify-center z-50">
            <div className="bg-white p-4 relative rounded-lg shadow-lg w-[90%] max-w-4xl">
                <button
                    className="absolute top-0 right-0 text-black"
                    onClick={onClose}
                    aria-label="Close Popup"
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};

export default PopupSingleVideo;
