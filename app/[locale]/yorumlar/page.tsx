import AlertCard from '@/components/Question/QuestionButton'
import SixPhoto from '@/components/SixPhoto/SixPhoto'
import TripleVideo from '@/components/TripleVideos/TripleVideos'
import React from 'react'

const page = () => {
    const images = [
        { imageUrl: '/slider/slider1.png', altText: 'Slider 1', title: 'goz kapagi estetigi 1' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2', title: 'goz kapagi estetigi 2' },
        { imageUrl: '/slider/slider3.png', altText: 'Slider 3', title: 'goz kapagi estetigi 3' },
        { imageUrl: '/slider/slider4.png', altText: 'Slider 4', title: 'goz kapagi estetigi 4' },
        { imageUrl: '/slider/slider5.png', altText: 'Slider 4', title: 'goz kapagi estetigi 5' },
        { imageUrl: '/slider/slider6.png', altText: 'Slider 4', title: 'goz kapagi estetigi 6 ' },
    ]
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
    return (
        <div>
            <h1 className='text-black text-3xl'>Mutlu danışan tablomuz</h1>
            <TripleVideo videos={videos3} />
            <AlertCard />
            <SixPhoto photos={images} />
            <SixPhoto photos={images} />
            <AlertCard />
            <SixPhoto photos={images} />



        </div>
    )
}

export default page