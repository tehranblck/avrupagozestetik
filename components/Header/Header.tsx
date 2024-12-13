'use client';
import React, { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const menuRef = useRef(null);

    const openMenu = () => {
        setIsMenuOpen(true);
        gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
    };

    const closeMenu = () => {
        gsap.to(menuRef.current, { x: '-100%', duration: 0.5, ease: 'power3.out' }).then(() => {
            setIsMenuOpen(false);
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <header className="w-full bg-blue-600 text-white py-4 px-6 shadow-md fixed top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="#">LOGO</a>
                </div>

                {/* Navbar */}
                <nav className="hidden md:flex space-x-6 text-lg">
                    <a href="#home" className="hover:text-gray-200">Home</a>
                    <a href="#about" className="hover:text-gray-200">About</a>
                    <a href="#services" className="hover:text-gray-200">Services</a>
                    <a href="#contact" className="hover:text-gray-200">Contact</a>
                </nav>

                {/* Dropdown Button */}
                <div className="relative">
                    <button
                        className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 shadow-md"
                        onClick={toggleDropdown}
                    >
                        Randevu Al
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-blue-600 rounded-lg shadow-lg py-2">
                            <a
                                href="#whatsapp"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                WhatsApp'tan Randevu Al
                            </a>
                            <a
                                href="#form"
                                className="block px-4 py-2 hover:bg-gray-100"
                            >
                                Form Doldur
                            </a>
                        </div>
                    )}
                </div>

                {/* Hamburger Menu Icon */}
                <button
                    className="md:hidden text-2xl"
                    onClick={openMenu}
                    aria-label="Toggle Menu"
                >
                    <FaBars />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="mobile-menu fixed top-0 left-0 w-full h-full bg-blue-600 text-white z-40 transform -translate-x-full"
                >
                    <div className="flex flex-col h-full">
                        {/* Close Button */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-white">
                            <h2 className="text-xl font-semibold">Menu</h2>
                            <button
                                className="text-2xl hover:text-gray-300"
                                onClick={closeMenu}
                                aria-label="Close Menu"
                            >
                                <FaTimes />
                            </button>
                        </div>

                        {/* Menu Links */}
                        <nav className="flex flex-col items-center justify-center flex-grow space-y-6 text-xl">
                            <a href="#home" onClick={closeMenu} className="hover:text-gray-300">
                                Home
                            </a>
                            <a href="#about" onClick={closeMenu} className="hover:text-gray-300">
                                About
                            </a>
                            <a href="#services" onClick={closeMenu} className="hover:text-gray-300">
                                Services
                            </a>
                            <a href="#contact" onClick={closeMenu} className="hover:text-gray-300">
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
