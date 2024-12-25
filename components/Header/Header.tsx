'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { gsap } from 'gsap';
import { IoClose } from 'react-icons/io5'; // Close icon (X)
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
    isHomePage: boolean;
}

const Header = ({ isHomePage }: HeaderProps) => {
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
                zIndex: '99',
            }}
            className={`w-full ${isHomePage ? null : 'fixed top-0'} top-0 header `}
        >
            <div className='max-w-7xl mx-auto  flex   items-center justify-between text-white py-4 px-4 '>
                <Link href={'/'} className="flex items-center">
                    <Image alt="Logo" src="/logo.svg" width={100} height={60} />
                </Link>

                {/* Button */}
                <div className="relative flex-grow flex justify-end sm:justify-end mt-4 sm:mt-0">
                    <button
                        ref={buttonRef}
                        style={{ fontSize: '16px', }}
                        className="flex items-center px-4 py-2 bg-[#FF0000] text-white rounded-lg font-semibold shadow-md transition-colors duration-300"
                        onClick={toggleDropdown}
                    >
                        Randevu Al
                        <MdKeyboardArrowDown
                            className={`ml-2 text-2xl transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''
                                }`}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                        style={{ zIndex: 9999, width: '80vw', }}
                        ref={dropdownRef}
                        className={`absolute top-full right-0   mt-2 w-full  sm:w-full bg-white text-blue-600 rounded-lg shadow-lg py-2 ${isDropdownOpen ? 'block' : 'hidden'
                            }`}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-1 right-2 text-red-500 text-lg hover:text-red-700"
                            onClick={closeDropdown}
                        >
                            <IoClose />
                        </button>

                        {/* Dropdown Links */}
                        <Link
                            href="#"
                            className="block w-full px-4 py-2 hover:bg-gray-100"
                        >
                            WhatsApp'tan Randevu Al
                        </Link>
                        <Link
                            href="/contact"
                            className="block w-full px-4 py-2 hover:bg-gray-100"
                        >
                            Form Doldur
                        </Link>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;
