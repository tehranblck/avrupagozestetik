import Button from '@/components/BackButton/BackButton'
import CategoriesText from '@/components/Categories/CtegoriesText'
import ThreePhoto from '@/components/DoublePhoto/DoublePhoto'
import DoubleVideo from '@/components/DoubleVideo/DoubleVideo'
import Header from '@/components/Header/Header'
import SingleVideo from '@/components/SingleVideo/SingleVideo'
import SixPhoto from '@/components/SixPhoto/SixPhoto'
import TripleVideo from '@/components/TripleVideos/TripleVideos'
import React from 'react'

const Page = () => {

    const images = [
        { imageUrl: '/slider/slider1.png', altText: 'Slider 1', title: 'goz kapagi estetigi 1' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2', title: 'goz kapagi estetigi 2' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2', title: 'goz kapagi estetigi 2' },
    ]
    const images6 = [
        { imageUrl: '/slider/slider1.png', altText: 'Slider 1', title: 'goz kapagi estetigi 1' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2', title: 'goz kapagi estetigi 2' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2', title: 'goz kapagi estetigi 2' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2', title: 'goz kapagi estetigi 2' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2', title: 'goz kapagi estetigi 2' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2', title: 'goz kapagi estetigi 2' },
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

    ];
    return (
        <div>
            <div style={{ zIndex: '9999' }} className="bg-white rounded-lg min-h-fit  w-full">
                <Header isHomePage={false} />
                <div style={{ top: '6.4rem' }} className=' fixed top-28 rounded-lg bg-white z-50 w-full' >
                    <Button />
                </div>


            </div>
            <CategoriesText text1Classes='text-lg mt-40' text1='Bu sayfamızda burun estetiği, yüz germe ve medikal estetik gibi çeşitli uygulamalarımızın öncesi ve sonrası değişimlerinden bazılarını inceleyebilirsiniz.' />
            <div className="mt-5">
                <ThreePhoto photos={images} />
            </div>
            <DoubleVideo videos={videos3} />
            <ThreePhoto photos={images} />
            <SingleVideo videoUrl={videos3[0].videoUrl} thumbnailUrl={videos3[0].thumbnailUrl} altText={videos3[0].altText} />
            <SixPhoto photos={images6} />
            <SixPhoto photos={images6} />
        </div>
    )
}

export default Page