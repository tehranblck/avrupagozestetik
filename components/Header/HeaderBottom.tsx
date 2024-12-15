'use client';
import React from 'react';
import { Link } from '@/i18n/routing';
import { MdCategory } from "react-icons/md";

const HeaderBottom = () => {
    // 5 adet placeholder image ve yazı
    const categories = [
        { id: 1, image_icon: '/placeholder1.png', title: 'İşlemler', href: '#' },
        { id: 2, image_icon: '/placeholder2.png', title: 'Yorumlar', href: '#' },
        { id: 3, image_icon: '/placeholder3.png', title: 'Hakkimizda', href: '#' },
        { id: 4, image_icon: '/placeholder4.png', title: 'İletişim', href: '#' },
        { id: 5, image_icon: '/placeholder5.png', title: 'İzle', href: '#' },
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
            className="text-white bg-white pt-2 pb-3 "
        >
            <div className="w-full flex justify-around items-center">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={category.href}
                        className="flex flex-col items-center text-center"
                    >
                        {/* Image */}
                        <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-gray-300 mb-2">
                            <MdCategory />
                        </div>
                        {/* Category Name */}
                        <span className="text-sm text-black font-semibold">{category.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HeaderBottom;
