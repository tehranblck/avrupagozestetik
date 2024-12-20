
import CategoriesSectionHeader from '@/components/Categories/Categories';
import CategoriesText from '@/components/Categories/CtegoriesText';
import Card from '@/components/Question/QuestionButton';
import SingleVideo from '@/components/SingleVideo/SingleVideo';
import React from 'react';

const Page = () => {
    const images = [
        { src: '/slider/slider1.png', alt: 'Slider 1' },
        { src: '/slider/slider2.png', alt: 'Slider 2' },
        { src: '/slider/slider3.png', alt: 'Slider 3' },
        { src: '/slider/slider4.png', alt: 'Slider 4' },
        { src: '/slider/slider5.png', alt: 'Slider 4' },
        { src: '/slider/slider6.png', alt: 'Slider 4' },
    ];


    return (
        <div className='h-[500vh]'>
            {/* <Card /> */}
            <CategoriesSectionHeader />
            <CategoriesText />
            <SingleVideo videoUrl='/videos/teze.mp4' altText='text' />


        </div>
    );
};

export default Page;
