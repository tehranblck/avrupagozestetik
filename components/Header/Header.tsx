
'use client'
import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';


const Header: React.FC = () => {

    const t = useTranslations('Navbar'); // Translation namespace
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null); ''

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
        if (!isDropdownOpen) {
            gsap.fromTo(
                dropdownRef.current,
                { opacity: 0, y: -10 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
            );
        }
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
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
        <header style={{ borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }} className="w-full   text-white py-4 px-2  fixed top-0 z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Button on the Left */}
                <div className="relative flex items-center">
                    <button
                        ref={buttonRef}
                        style={{ fontSize: '15px' }}
                        className={`flex items-center px-2 py-2 !bg-[#FF0000] text-white rounded-lg font-semibold shadow-md transition-colors duration-300 ${isDropdownOpen
                            ? 'bg-blue-700 text-white hover:bg-blue-800'
                            : 'bg-white text-blue-600 hover:bg-gray-100'
                            }`}
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
                        className={`absolute top-full left-0 mt-2 w-48 bg-white text-blue-600 rounded-lg shadow-lg py-2 ${isDropdownOpen ? 'block' : 'hidden'
                            }`}
                    >
                        <Link
                            href="#"
                            className="block px-2 py-1 hover:bg-gray-100"
                        >
                            {t('whatsappAppointment')}
                        </Link>
                        <Link
                            href="/contact"
                            className="block px-2 py-1 hover:bg-gray-100"
                        >
                            {t('fillForm')}
                        </Link>
                    </div>
                </div>

                {/* Links on the Right */}
                <nav className="flex space-x-2 px-4 text-lg">
                    <Link style={{ fontSize: '16px' }} href="/about" className="hover:text-gray-200 border-[1px] border-white px-2 py-1 rounded-lg">
                        {t('about')}
                    </Link>
                    <Link style={{ fontSize: '16px' }} href="/contact" className="hover:text-gray-200 border-[1px] border-white px-2 py-1 rounded-lg">
                        {t('contact')}
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
