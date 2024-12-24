
import CategoriesSectionHeader from '@/components/Categories/Categories';
import CategoriesText from '@/components/Categories/CtegoriesText';
import DoubleVideo from '@/components/DoubleVideo/DoubleVideo';
import Header from '@/components/Header/Header';
import HeaderBottom from '@/components/Header/HeaderBottom';
import NinePhoto from '@/components/NinePhoto/NinePhoto';
import AlertCard from '@/components/Question/QuestionButton';
import Card from '@/components/Question/QuestionButton';
import SinglePhoto from '@/components/SinglePhoto/SinglePhoto';
import SingleVideo from '@/components/SingleVideo/SingleVideo';
import SixPhoto from '@/components/SixPhoto/SixPhoto';
import SixVideo from '@/components/SixVideo/SixVideo';
import TripleVideo from '@/components/TripleVideos/TripleVideos';
import React from 'react';

const Page = () => {
    const images = [
        { imageUrl: '/slider/slider1.png', altText: 'Slider 1', title: 'goz kapagi estetigi 1' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2', title: 'goz kapagi estetigi 2' },
        { imageUrl: '/slider/slider3.png', altText: 'Slider 3', title: 'goz kapagi estetigi 3' },
        { imageUrl: '/slider/slider4.png', altText: 'Slider 4', title: 'goz kapagi estetigi 4' },
        { imageUrl: '/slider/slider5.png', altText: 'Slider 4', title: 'goz kapagi estetigi 5' },
        { imageUrl: '/slider/slider6.png', altText: 'Slider 4', title: 'goz kapagi estetigi 6 ' },
    ]
    const images9 = [
        { imageUrl: '/slider/slider1.png', altText: 'Slider 1', title: 'goz kapagi estetigi 1' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2', title: 'goz kapagi estetigi 2' },
        { imageUrl: '/slider/slider3.png', altText: 'Slider 3', title: 'goz kapagi estetigi 3' },
        { imageUrl: '/slider/slider4.png', altText: 'Slider 4', title: 'goz kapagi estetigi 4' },
        { imageUrl: '/slider/slider5.png', altText: 'Slider 4', title: 'goz kapagi estetigi 5' },
        { imageUrl: '/slider/slider6.png', altText: 'Slider 4', title: 'goz kapagi estetigi 6 ' },
        { imageUrl: '/slider/slider4.png', altText: 'Slider 4', title: 'goz kapagi estetigi 7' },
        { imageUrl: '/slider/slider5.png', altText: 'Slider 4', title: 'goz kapagi estetigi 8' },
        { imageUrl: '/slider/slider6.png', altText: 'Slider 4', title: 'goz kapagi estetigi 9' },
    ];
    const videos = [
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'goz cervresi 1'
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'goz cervresi 2'
        },
    ];
    const videos3 = [
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'goz estetigi'
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'KAS estetigi'
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'goz cevresi estetigi'
        }
    ];
    const videos6 = [
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'goz cevresi 1'
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'goz cevresi 2'

        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'goz cevresi 3'

        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'goz cevresi 4'

        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'goz cevresi 5'

        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'goz cevresi 6'

        }
    ];
    return (
        <div >
            {/* <Card /> */}
            {/* <CategoriesSectionHeader /> */}
            {/* <CategoriesText /> */}
            {/* <SingleVideo thumbnailUrl='/maint.jpg' videoUrl='/videos/hero.mp4' altText='text' /> */}
            <div

                style={{
                    borderBottomLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                    zIndex: 99,
                }}
                className="w-full fixed top-0 right-0"
            >
                <div id="upScroll"></div>

                <Header />
                <HeaderBottom />
            </div>

            <SixPhoto photos={images} />
            <AlertCard />
            <SixVideo videos={videos6} />
            <SixVideo videos={videos6} />

            <SinglePhoto imageUrl='/maint.jpg' altText='re' className='' />
            <DoubleVideo videos={videos} />
            <AlertCard dest={'right'} />
            <TripleVideo videos={videos3} />
            <NinePhoto photos={images9} />
            <SinglePhoto imageUrl='/maint.jpg' altText='re' className='' />
            <AlertCard />
            <SixVideo videos={videos6} />
            <SixPhoto photos={images} />
            <SixPhoto photos={images} />
            <SixVideo videos={videos6} />
            <SixVideo videos={videos6} />
            <AlertCard />
            <TripleVideo videos={videos3} />
            <SinglePhoto imageUrl='/maint.jpg' altText='re' className='' />
            <SingleVideo thumbnailUrl='/maint.jpg' videoUrl='/videos/hero.mp4' altText='text' />
            <TripleVideo videos={videos3} />
            <SixPhoto photos={images} />
            <SixPhoto photos={images} />
            <TripleVideo videos={videos3} />
            <SixPhoto photos={images} />
            <TripleVideo videos={videos3} />
            <AlertCard />
            <SixPhoto photos={images} />





        </div>
    );
};

export default Page;
