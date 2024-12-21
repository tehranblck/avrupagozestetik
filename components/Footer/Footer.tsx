'use client';
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full h-fit mt-2 bg-gray-800 py-4">
            <div className="text-center text-white text-sm">
                © {currentYear} Avrupa Göz Estetik. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
