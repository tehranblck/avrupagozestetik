
import Gallery from '@/components/Gallery/Gallery';
import Card from '@/components/Question/QuestionButton';
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
            <Gallery buttonText='Devam et' categoryTitle='Göz kapağı estetiği' images={images} hasVideo={true} videoSrc='/videos/video_hero.mp4' />
            <Card />

        </div>
    );
};

export default Page;
