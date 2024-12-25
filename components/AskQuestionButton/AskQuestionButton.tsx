'use client';
import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { gsap } from 'gsap';
import { IoClose } from 'react-icons/io5';
import Link from 'next/link';

const AskQuestionButton: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const scrollThreshold = 1250;
        if (window.scrollY >= scrollThreshold) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    const toggleDropdown = () => {
        if (!isDropdownOpen) {
            setIsDropdownOpen(true);
            gsap.fromTo(
                dropdownRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
            );
        } else {
            gsap.to(dropdownRef.current, {
                opacity: 0,
                y: -10,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => setIsDropdownOpen(false),
            });
        }
    };

    const closeDropdown = () => {
        gsap.to(dropdownRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => setIsDropdownOpen(false),
        });
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                closeDropdown();
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isDropdownOpen]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div style={{ zIndex: 9 }}>
            {isVisible && (
                <div
                    ref={buttonRef}
                    className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-md p-3 shadow-lg flex items-center justify-center cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <p className="mr-2">Bize soru sor</p>
                    <MdKeyboardArrowDown
                        className={`text-2xl transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                </div>
            )}

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute bottom-16 right-4 w-64 bg-white text-black rounded-md shadow-lg py-3 z-50"
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                        onClick={closeDropdown}
                    >
                        <IoClose />
                    </button>

                    {/* Dropdown Links */}
                    <div className="px-4">
                        <Link
                            href="https://wa.me/905327044102"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 block hover:bg-gray-100 rounded-md cursor-pointer"
                        >
                            Whatsapp`tan randevu al
                        </Link>
                        <Link href={'#'} className="py-2 block hover:bg-gray-100 rounded-md cursor-pointer">
                            Form doldur
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AskQuestionButton;
