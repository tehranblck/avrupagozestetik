'use client'
import React, { useEffect, useState } from 'react';

const CategoriesText = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 580);
        };

        // İlk render'da boyut kontrolü yap
        handleResize();

        // Pencere boyutu değişikliklerini dinle
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="w-full">
            <div
                style={{
                    fontFamily: '"Forum", serif',
                    letterSpacing: '2px',
                    fontWeight: 'normal',
                }}
                className="text-left sm:text-center sm:pt-12 text-blue-700 font-bold text-4xl pl-3 lg:pl-10 lg:text-6xl"
            >
                AVRUPA {isMobile ? <br /> : null} GÖZ & ESTETİK
            </div>
            <div
                style={{ fontFamily: 'Glacial Indifference Regular' }}
                className="text-right sm:text-center px-5 text-gray-700 font-medium text-sm lg:text-base lg:pr-10"
            >
                Mutluluğunuz Sevincimizdir
            </div>
        </div>
    );
};

export default CategoriesText;
