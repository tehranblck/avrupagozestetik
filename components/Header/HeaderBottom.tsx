'use client';
import React from 'react';
import Link from 'next/link';

interface HeaderBottomProps {
    isVisible: boolean;
}

const HeaderBottom = ({ isVisible }: HeaderBottomProps) => {
    const categories = [
        { id: 2, title: 'Yorumlar', href: '/yorumlar' },
        { id: 3, title: 'Hakkımızda', href: '/hakkimizda' },
        { id: 4, title: 'İletişim', href: '/iletisim' },
    ];



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
            className={`text-white bg-[#397ca1] p-2 pt-6 sm:pb-2 sm:px-32  ${isVisible ? 'block' : 'hidden'} `}
        >
            {/* Üstteki kategoriler */}
            <div className="w-full flex justify-around sm:justify-center sm:gap-6 items-center">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={category.href}
                        className="flex flex-col items-center text-center px-4 py-2 rounded-lg border  bg-[#2b80f6]   transition-all duration-300"
                    >
                        {/* Category Name */}
                        <span className="text-sm sm:text-xs font-semibold">
                            {category.title}
                        </span>
                    </Link>
                ))}
            </div>


        </div>
    );
};

export default HeaderBottom;
