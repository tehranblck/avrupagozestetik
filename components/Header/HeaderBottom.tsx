'use client';
import React, { useRef } from 'react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';

const HeaderBottom = ({ categories }: any) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    console.log(categories);

    return (
        <div style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: "20px" }} className="text-white pt-24 pb-12 ">
            <div className="container mx-auto relative px-4">
                {/* Slider */}
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto gap-4 px-2 scrollbar-hide snap-x snap-mandatory"
                >
                    {categories.map((category: any) => (
                        <Link
                            key={category.id}
                            href={category.href}
                            className="flex flex-col items-center text-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px] snap-center"
                        >
                            {/* Image */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden bg-white mb-2">
                                <Image
                                    src={category.image_icon}
                                    alt={category.title || 'Category'}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Category Name */}
                            <span
                                style={{ fontSize: '10px' }}
                                className="text-xs sm:text-sm text-black font-semibold"
                            >
                                {category.title}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="absolute -right-2 top-1/3 -translate-y-1/2 bg-white text-blue-600 p-3 rounded-full shadow-lg z-10 hover:bg-gray-100"
                >
                    ›
                </button>
            </div>

            {/* Paragraph */}
            {/* <div className="px-4 mt-4 text-center">
                <p className="text-sm sm:text-base text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus placeat,
                    eum corporis odit saepe reiciendis tempore itaque minima quo praesentium.
                </p>
            </div> */}
        </div>
    );
};

export default HeaderBottom;
