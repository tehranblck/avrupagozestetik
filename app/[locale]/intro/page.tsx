'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Link } from '@/i18n/routing';
import InfinitySlider from '@/components/slider/InfinitySlider';

const Page = () => {
    const t = useTranslations('intro');

    return (
        <div className="flex flex-col overflow-hidden items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            {/* Custom Carousel */}
            <div className="w-screen  relative">
                <InfinitySlider />
            </div>

            {/* Button */}


            {/* Paragraph and Title Section */}
            <div className="bg-blue-900 px-4 py-3 w-full flex flex-col items-start md:w-3/4 lg:w-2/3 rounded-lg shadow-lg">

                <p className="text-lg md:text-xl text-left md:text-center text-white leading-relaxed">
                    {t('para')}
                </p>
                <h1 className="text-5xl md:text-4xl font-bold text-left md:text-center mb-4 text-white drop-shadow-sm">
                    {t('title')}
                </h1>
                <Link
                    href={'/home'}
                    className="mt-2 px-6 py-3 static  rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-transform transform hover:-translate-y-1 hover:scale-105 md:order-2"
                >
                    {t('continue')}
                </Link>
            </div>
        </div>
    );
};

export default Page;
