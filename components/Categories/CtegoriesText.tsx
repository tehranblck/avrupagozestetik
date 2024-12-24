'use client';
import React, { useEffect, useState } from 'react';

interface CategoriesTextProps {
    text1: string;
    text2: string;
    paragraph?: string;
    className?: string;
}

const CategoriesText: React.FC<CategoriesTextProps> = ({ text1, text2, paragraph, className }) => {
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
                className={`text-left ${className} sm:text-center sm:pt-12 text-blue-700 font-bold  pl-5 lg:pl-10 lg:text-6xl`}
            >
                {text1}{isMobile ? <br /> : ' '} {text2}
            </div>
            <div
                style={{ fontFamily: 'Glacial Indifference Regular' }}
                className={`text-right    sm:text-center px-5 text-gray-700 font-medium  lg:text-base lg:pr-10`}
            >
                {paragraph}
            </div>
        </div>
    );
};

export default CategoriesText;
