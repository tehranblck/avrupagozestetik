'use client';
import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { IoClose } from 'react-icons/io5'; // Close icon (X)
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa";

interface HeaderProps {
    isHomePage: boolean;
}

const Header = ({ isHomePage }: HeaderProps) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false); // Kategori popup durumu
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev); // Dropdown durumunu değiştir
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false); // Dropdown menüsünü kapat
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
            // Dropdown açıkken 'bg' sınıfına sahip tüm öğeleri blur yapıyoruz
            const elements = document.getElementsByClassName('bg');
            Array.from(elements).forEach((el) => {
                (el as HTMLElement).style.filter = 'blur(5px)';
            });
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            // Dropdown kapandığında blur'ı kaldırıyoruz
            const elements = document.getElementsByClassName('bg');
            Array.from(elements).forEach((el) => {
                (el as HTMLElement).style.filter = '';
            });
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            // Cleanup işlemi
            const elements = document.getElementsByClassName('bg');
            Array.from(elements).forEach((el) => {
                (el as HTMLElement).style.filter = '';
            });
        };
    }, [isDropdownOpen]);

    // Kategoriler
    const categories = [
        'Üst göz kapağı estetiği',
        'Göz altı estetiği',
        'Kaş kaldırma',
        'Şakak germe',
        'Badem göz estetiği',
        'Burun estetiği',
        'Yüz germe',
        'Medikal estetik',
    ];

    // Kategori popup'ını açma
    const openCategoryModal = () => {
        setIsCategoryModalOpen(true); // Kategori popup'ını aç
        setIsDropdownOpen(false); // "Randevu Al" dropdown'ını kapat
    };

    // Kategoriye tıklanınca WhatsApp'a dinamik mesaj göndermek
    const handleCategorySelect = (category: string) => {
        const whatsappMessage = `Merhaba, ${category} hakkında bilgi almak istiyorum.`;
        const whatsappUrl = `https://wa.me/905327044102?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank'); // Yeni sekmede WhatsApp'a yönlendirme
        setIsCategoryModalOpen(false); // Kategori popup'ını kapat
    };

    return (
        <header
            className={`w-full ${isHomePage ? null : 'fixed top-0  header'} p-5 z-30`}
        >
            <div className="container mx-auto flex items-center justify-between gap-2 text-white">
                {/* Randevu Al Butonu */}
                <div className={`flex-grow flex justify-center ${isHomePage ? null : 'w-full'} sm:justify-end`}>
                    <button
                        ref={buttonRef}
                        style={{ fontSize: '16px' }}
                        className={`flex items-center justify-center bg-[#FF0000] text-white rounded-lg font-semibold shadow-md transition-colors duration-300 px-4 py-2 ${isHomePage ? 'w-auto' : 'w-full sm:w-auto'}`}
                        onClick={toggleDropdown}
                    >
                        Randevu Al
                        <MdKeyboardArrowDown
                            className={`ml-2 text-2xl transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <div
                            ref={dropdownRef}
                            className="absolute top-[calc(100%)] right-0 w-full sm:w-64 bg-white text-blue-600 rounded-lg shadow-lg py-2 z-[9999999999999]"
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-red-500 text-3xl hover:text-red-700 sm:top-2 sm:right-2 sm:text-2xl"
                                onClick={closeDropdown}
                            >
                                <IoClose />
                            </button>

                            {/* Dropdown Links */}
                            <Link
                                href="#"
                                onClick={openCategoryModal}
                                className="block w-full text-center sm:text-left py-3 sm:py-2 px-4 hover:bg-gray-100 rounded-md cursor-pointer"
                            >
                                WhatsApp'tan randevu al
                            </Link>
                            <Link
                                href="/iletisim"
                                className="block w-full text-center sm:text-left py-3 sm:py-2 px-4 hover:bg-gray-100"
                            >
                                Form Doldur
                            </Link>
                        </div>
                    )}
                </div>

                {isHomePage && (
                    <div className="relative flex-grow-0 flex justify-end sm:ml-4">
                        <Link
                            href={'/diger-islemler'}
                            style={{ fontSize: '16px' }}
                            className="flex items-center px-4 py-2 bg-[#2b80f6] text-white rounded-lg font-semibold shadow-md transition-colors duration-300 whitespace-nowrap"
                        >
                            Diğer işlemler <FaAngleRight className='ml-2 text-xl' />
                        </Link>
                    </div>
                )}
            </div>

            {/* Kategori Seçimi Popup */}
            {isCategoryModalOpen && (
                <div className="fixed z-[999999999999] top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm">
                    <div className="bg-white border-2 border-red-500 p-6 rounded-lg shadow-lg w-[90%] sm:w-80 max-h-[90vh] overflow-y-auto">
                        <h2 className="text-lg font-semibold text-center mb-4">Kategori Seçin</h2>
                        <div className="space-y-1">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleCategorySelect(category)}
                                    className="w-full text-left px-4 py-3 sm:py-2 border rounded-md hover:bg-gray-100"
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsCategoryModalOpen(false)}
                            className="mt-4 w-full bg-red-500 text-white py-3 sm:py-2 rounded-md hover:bg-red-600"
                        >
                            Kapat
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
