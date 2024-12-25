import AskQuestionButton from '@/components/AskQuestionButton/AskQuestionButton'
import Button from '@/components/BackButton/BackButton'
import CategoriesText from '@/components/Categories/CtegoriesText'
import CommentCard from '@/components/Comment/CommentCard'
import Header from '@/components/Header/Header'
import InfinitySlider from '@/components/slider/InfinitySlider'
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
    const comments = [
        {
            imageUrl: '/maint.jpg',
            name: 'John Doe',
            comment: 'Bu gerçekten harika bir ürün, çok memnun kaldım!',
        },
        {
            imageUrl: '/maint.jpg',
            name: 'Jane Smith',
            comment: 'Mükemmel hizmet, tekrar sipariş vereceğim!',
        },
        {
            imageUrl: '/maint.jpg',
            name: 'Ali Veli',
            comment: 'Hızlı teslimat ve mükemmel kalite.',
        },
    ];
    return (
        <div>
            <div style={{ zIndex: '9999' }} className="bg-white rounded-lg pb-2 min-h-fit  w-full">
                <Header isHomePage={false} />
                <div style={{ top: '6.4rem' }} className=' fixed top-28 rounded-lg  z-50 w-full' >
                    <Button />
                </div>
            </div>
            <CategoriesText text1Classes='text-4xl mt-44' text1='Mutlu Danışan' text2='tablomuz' paragraph='Mutluluğunuz sevincimizdir' />
            <InfinitySlider />
            <TripleVideo videos={videos3} />
            <div className='flex flex-col gap-3'>
                <CommentCard key={comments[0].comment} comment={comments[0]} />
                <CommentCard key={comments[0].name} comment={comments[0]} />
            </div>

            <TripleVideo videos={videos3} />
            <div className='flex flex-col gap-3'>

                <CommentCard key={comments[1].comment} comment={comments[1]} />
                <CommentCard key={comments[1].name} comment={comments[1]} />
            </div>

            <TripleVideo videos={videos3} />
            <div className='flex flex-col gap-3'>

                <CommentCard key={comments[2].comment} comment={comments[2]} />
                <CommentCard key={comments[2].name} comment={comments[2]} />

            </div>

            <AskQuestionButton />

        </div>
    )
}

export default page