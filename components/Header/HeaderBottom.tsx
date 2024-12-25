'use client';
import React from 'react';
import Link from 'next/link';

interface HeaderBottomProps {
    isVisible: boolean;
}

const HeaderBottom = ({ isVisible }: HeaderBottomProps) => {
    // 5 adet placeholder image ve yazı
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
            className={`text-white bg-white pt-0 pb-3 sm:pb-2 sm:px-32  ${isVisible ? 'block' : 'hidden'} `}
        >
            {/* Üstteki kategoriler */}
            <div className="w-full flex justify-around sm:justify-end sm:gap-6 items-center">
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


        </div>
    );
};

export default HeaderBottom;
