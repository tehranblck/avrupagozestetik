
import CategoriesSectionHeader from '@/components/Categories/Categories';
import CategoriesText from '@/components/Categories/CtegoriesText';
import DoubleVideo from '@/components/DoubleVideo/DoubleVideo';
import NinePhoto from '@/components/NinePhoto/NinePhoto';
import Card from '@/components/Question/QuestionButton';
import SinglePhoto from '@/components/SinglePhoto/SinglePhoto';
import SingleVideo from '@/components/SingleVideo/SingleVideo';
import SixPhoto from '@/components/SixPhoto/SixPhoto';
import SixVideo from '@/components/SixVideo/SixVideo';
import TripleVideo from '@/components/TripleVideos/TripleVideos';
import React from 'react';

const Page = () => {
    const images = [
        { imageUrl: '/slider/slider1.png', altText: 'Slider 1' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2' },
        { imageUrl: '/slider/slider3.png', altText: 'Slider 3' },
        { imageUrl: '/slider/slider4.png', altText: 'Slider 4' },
        { imageUrl: '/slider/slider5.png', altText: 'Slider 4' },
        { imageUrl: '/slider/slider6.png', altText: 'Slider 4' },
    ];
    const images9 = [
        { imageUrl: '/slider/slider1.png', altText: 'Slider 1' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2' },
        { imageUrl: '/slider/slider3.png', altText: 'Slider 3' },
        { imageUrl: '/slider/slider4.png', altText: 'Slider 4' },
        { imageUrl: '/slider/slider5.png', altText: 'Slider 4' },
        { imageUrl: '/slider/slider6.png', altText: 'Slider 4' },
        { imageUrl: '/slider/slider4.png', altText: 'Slider 4' },
        { imageUrl: '/slider/slider5.png', altText: 'Slider 4' },
        { imageUrl: '/slider/slider6.png', altText: 'Slider 4' },
    ];
    const videos = [
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
        },
    ];
    const videos3 = [
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
        }
    ];
    const videos6 = [
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
        }
    ];
    return (
        <div className='h-[500vh]'>
            {/* <Card /> */}
            <CategoriesSectionHeader />
            <CategoriesText />
            <SingleVideo thumbnailUrl='/maint.jpg' videoUrl='/videos/teze.mp4' altText='text' />
            <SinglePhoto imageUrl='/maint.jpg' altText='re' className='' />
            <DoubleVideo videos={videos} />
            <TripleVideo videos={videos3} />
            <SixVideo videos={videos6} />
            <SixPhoto photos={images} />
            <NinePhoto photos={images9} />


        </div>
    );
};

export default Page;
