
import Gallery from '@/components/Gallery/Gallery';
import Card from '@/components/Question/QuestionButton';
import Slider from '@/components/Slider';
import VideoPopup from '@/components/Video1/Video';
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
        <div>
            <Gallery images={images} />
            <VideoPopup className='h-64' key={'dfssd'} coverImage='/maint.jpg' videoSrc='https://www.youtube.com/embed/J6RddtseuKk?si=6PghWiK_sGb1P6Dm' />
            <Card />
            <Slider images={images} key={'1232'} />


        </div>
    );
};

export default Page;
