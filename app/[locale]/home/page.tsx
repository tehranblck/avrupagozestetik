import { fetchCategories } from '@/components/fetchCategories';
import Gallery from '@/components/Gallery/Gallery';
import HeaderBottom from '@/components/Header/HeaderBottom';
import Card from '@/components/Question/QuestionButton';
import { getLocale } from 'next-intl/server';
import React from 'react';

const Page = () => {
    const images = [
        { src: '/slider/slider1.png', alt: 'Slider 1' },
        { src: '/slider/slider2.png', alt: 'Slider 2' },
        { src: '/slider/slider3.png', alt: 'Slider 3' },
        { src: '/slider/slider4.png', alt: 'Slider 4' },
    ];


    return (
        <div>
            <Gallery buttonText='Devam et' categoryTitle='Göz kapağı estetiği' images={images} hasVideo={true} videoLink='https://www.youtube.com/embed/CR4Ait0f_tU' />
            <Card />

        </div>
    );
};

export default Page;
