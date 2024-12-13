'use client';
import { useTranslations } from 'next-intl';
import React, { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import InfinitySlider from '@/components/slider/InfinitySlider';

const Page = () => {
    const t = useTranslations('intro');




    return (
        <div className="flex flex-col overflow-hidden items-center justify-center min-h-screen px-4 bg-gray-100 text-gray-800">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-600 drop-shadow-sm">
                {t('title')}
            </h1>

            {/* Custom Carousel */}
            <div className="w-screen mb-6 relative">
                <InfinitySlider />
            </div>

            {/* Paragraph */}
            <p className="text-lg md:text-xl text-center px-4 text-gray-700 leading-relaxed">
                {t('para')}
            </p>

            {/* Button */}
            <Link href={'/home'} className="mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-transform transform hover:-translate-y-1 hover:scale-105">
                {t('continue')}
            </Link>
        </div>
    );
};

export default Page;
