'use client';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef } from 'react';
import { Link } from '@/i18n/routing';
import { FaArrowRight } from "react-icons/fa";
import { gsap } from 'gsap';

const Page = () => {
    const t = useTranslations('intro');

    // Refs for GSAP animations
    const titleRef = useRef(null);
    const paraRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        // Title Animation
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
        );

        // Paragraph Animation
        gsap.fromTo(
            paraRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1, delay: 0.7, ease: 'power2.out' }
        );

        // Button Animation
        gsap.fromTo(
            buttonRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'bounce.out' }
        );
    }, []);

    return (
        <div style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} className=" max-h-screen text-gray-800">
            {/* Paragraph and Title Section */}
            <div

                className="relative px-6 py-8 w-full flex flex-col md:w-3/4 lg:w-2/3 items-start"
            >


                {/* Content */}
                <div className="relative z-10 w-full">
                    <h1
                        ref={titleRef}
                        className="text-4xl md:text-5xl font-bold text-left md:text-center text-white mb-6"
                    >
                        {t('title')}
                    </h1>

                    <p
                        ref={paraRef}
                        className="text-lg md:text-xl text-left md:text-center text-white leading-relaxed mb-6"
                    >
                        {t('para')}
                    </p>
                    <Link
                        ref={buttonRef}
                        href={'/home'}
                        className="my-4 flex text-center justify-center items-center self-end gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-transform transform hover:-translate-y-1 hover:scale-105"
                    >
                        {t('continue')}
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
