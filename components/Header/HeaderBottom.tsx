'use client';
import React from 'react';
import Link from 'next/link';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const HeaderBottom = () => {
    // 5 adet placeholder image ve yazı
    const categories = [
        { id: 2, title: 'Yorumlar', href: '/yorumlar' },
        { id: 3, title: 'Hakkimizda', href: '#' },
        { id: 4, title: 'İletişim', href: '#' },
    ];

    const specialButton = { id: 5, title: 'Diğer estetik uygulamalarımız', href: '#' }; // Özel buton

    return (
        <div
            style={{
                position: 'relative',
                top: '0',
                width: '100%',
                zIndex: 50,
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px',
            }}
            className="text-white bg-white pt-0 pb-3 sm:pb-2 sm:px-32"
        >
            {/* Üstteki kategoriler */}
            <div className="w-full flex justify-around items-center">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={category.href}
                        className="flex flex-col items-center text-center px-4 py-2 rounded-lg border  bg-[#FF0000] border-red-600 hover:bg-red-600  transition-all duration-300"
                    >
                        {/* Category Name */}
                        <span className="text-sm sm:text-xs font-semibold">
                            {category.title}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Ayrı bir satırda "Diğer İşlemler" */}
            <div className="mt-4 w-full flex  justify-center">
                <Link
                    href={specialButton.href}
                    className=" py-3 border-gray-300 bg-white text-black  px-10 flex items-center gap-3  font-normal rounded-lg shadow-lg border transition-all duration-300"
                >
                    {specialButton.title} <MdKeyboardDoubleArrowRight className='mt-1' />
                </Link>
            </div>
        </div>
    );
};

export default HeaderBottom;
