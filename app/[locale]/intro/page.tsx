'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Link } from '@/i18n/routing';
import InfinitySlider from '@/components/slider/InfinitySlider';
import { FaArrowRight } from "react-icons/fa";

const Page = () => {
    const t = useTranslations('intro');

    return (
        <div className="flex flex-col overflow-hidden items-center min-h-screen bg-gray-100 text-gray-800">
            {/* Custom Carousel */}
            <div className="w-screen relative">
                <InfinitySlider />
            </div>

            {/* Paragraph and Title Section */}
            <div
                style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="mt-12 relative px-6 py-8 w-full flex flex-col md:w-3/4 lg:w-2/3 rounded-lg shadow-lg items-start"
            >
                {/* Backdrop Filter Overlay */}
                <div
                    style={{ backdropFilter: 'blur(10px) brightness(0.7)' }}
                    className="absolute inset-0  bg-opacity-50 rounded-lg pointer-events-none"
                ></div>

                {/* Content */}
                <div className="relative z-10 w-full">
                    <h1 className="text-4xl md:text-5xl font-bold text-left md:text-center text-white mb-6">
                        {t('title')}
                    </h1>
                    <Link
                        href={'/home'}
                        className="my-4 flex text-center justify-center  items-center self-end gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-transform transform hover:-translate-y-1 hover:scale-105"
                    >
                        {t('continue')}
                        <FaArrowRight />
                    </Link>
                    <p className="text-lg md:text-xl text-left md:text-center text-white leading-relaxed mb-6">
                        {t('para')}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Page;
