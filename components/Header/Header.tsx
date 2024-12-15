'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { IoClose } from 'react-icons/io5'; // Close icon (X)

const Header: React.FC = () => {
    const t = useTranslations('Navbar'); // Translation namespace
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleDropdown = () => {
        if (!isDropdownOpen) {
            // Dropdown açılışı
            setIsDropdownOpen(true);
            gsap.fromTo(
                dropdownRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
            );
        } else {
            // Dropdown kapanışı
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
        // Kapanış animasyonu
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

    return (
        <header
            style={{
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
                borderBottom: '1px solid gray',
                zIndex: '99999',
            }}
            className="w-full bg-[#3a7ca0] text-white py-4 px-2  "
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Button on the Left */}
                <div className="relative flex w-full items-center">
                    <button
                        ref={buttonRef}
                        style={{ fontSize: '16px' }}
                        className={`flex items-center w-full px-2 py-2 justify-center bg-[#c42020] text-white rounded-lg font-semibold shadow-md transition-colors duration-300`}
                        onClick={toggleDropdown}
                    >
                        {t('appointment')}
                        <MdKeyboardArrowDown
                            className={`ml-2 text-2xl transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''
                                }`}
                        />
                    </button>
                    <div
                        ref={dropdownRef}
                        className={`absolute top-full left-0 mt-2 w-full bg-white text-blue-600 rounded-lg shadow-lg py-2 ${isDropdownOpen ? 'block' : 'hidden'
                            }`}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-1 right-2 text-red-500 text-lg hover:text-red-700"
                            onClick={closeDropdown}
                        >
                            <IoClose /> {/* X icon */}
                        </button>

                        {/* Dropdown Links */}
                        <Link
                            href="#"
                            className="block w-full px-2 py-1 hover:bg-gray-100"
                        >
                            {t('whatsappAppointment')}
                        </Link>
                        <Link
                            href="/contact"
                            className="block w-full px-2 py-1 hover:bg-gray-100"
                        >
                            {t('fillForm')}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
