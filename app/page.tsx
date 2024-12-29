import AskQuestionButton from '@/components/AskQuestionButton/AskQuestionButton';
import DigerIslemler from '@/components/DigerIslemler';
import ThreePhoto from '@/components/DoublePhoto/DoublePhoto';
import Header from '@/components/Header/Header';
import HeaderBottom from '@/components/Header/HeaderBottom';
import NinePhoto from '@/components/NinePhoto/NinePhoto';
import AlertCard from '@/components/Question/QuestionButton';
import SinglePhoto from '@/components/SinglePhoto/SinglePhoto';
import SingleVideo from '@/components/SingleVideo/SingleVideo';
import SixPhoto from '@/components/SixPhoto/SixPhoto';
import SixVideo from '@/components/SixVideo/SixVideo';
import TripleVideo from '@/components/TripleVideos/TripleVideos';
import React from 'react';

const Page = async () => {
    const base = 'https://api.avrupagozestetikinfo.com';

    // Fetch photo data
    const fetchComponents = async () => {
        const res = await fetch('https://api.avrupagozestetikinfo.com/api/home-page-fotos?populate=*', {
            next: { revalidate: 60 },
        });
        if (!res.ok) {
            throw new Error('Failed to fetch components');
        }
        const data = await res.json();
        return data.data;
    };

    // Fetch video data
    const fetchVideoDatas = async () => {
        const [videoRes, thumbnailRes] = await Promise.all([
            fetch('https://api.avrupagozestetikinfo.com/api/home-page-videos?populate=videos.video', {
                next: { revalidate: 60 },
            }),
            fetch('https://api.avrupagozestetikinfo.com/api/home-page-videos?populate=videos.thumbnail', {
                next: { revalidate: 60 },
            })
        ]);
    
        if (!videoRes.ok || !thumbnailRes.ok) {
            throw new Error('Failed to fetch video or thumbnail data');
        }
    
        const videoData = await videoRes.json();
        const thumbnailData = await thumbnailRes.json();
    
        const videoDetails = videoData.data.map((videoItem: any, index: any) => {
            const videoWithThumbnail = videoItem.videos.map((video: any, videoIndex: any) => {
                const thumbnail = thumbnailData.data[index]?.videos[videoIndex]?.thumbnail || {};
                
                return {
                    ...video,
                    thumbnail,
                };
            });
    
            return {
                ...videoItem,
                videos: videoWithThumbnail,
            };
        });
    
        return videoDetails;
    };
    

    const data = await fetchComponents();

    const Ilk6li = data[0]?.ilk6_i_foto || [];
    const Ilk3lu = data[0]?.ilk_3_lu || [];
    const ilkTekli = data[0]?.ilkTekli || null;
    const ikinciTekli = data[0]?.ikinciTekli || null;
    const ucuncuTekli = data[0]?.ucuncuTekli || null;
    const ikinciAltili = data[0]?.ikinciAltili || [];
    const ucuncuAltili = data[0]?.ucuncuAltili || [];
    const dorduncuAltili = data[0]?.dorduncuAltili || [];
    const dokuzlu = data[0]?.dokuzlu || [];

    const VideoData = await fetchVideoDatas();
    console.log("VideoData", VideoData);
    console.log("Single VideoData", VideoData[0]);
    console.log("VideoData with videos", VideoData[0].videos);
    console.log("VideoData with video media", VideoData[0].videos[0].video);
    console.log("VideoData with thumbnail media", VideoData[0].videos[0].thumbnail);

    const videos3 = [
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'Göz Estetiği 1',
        },
        // Add more static videos as needed
    ];

    const videos6 = [
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'Göz Çevresi 1',
        },
        // Add more static videos as needed
    ];

    return (
        <div className="max-w-7xl mx-auto w-full">
            {/* Fixed Header */}
            <div
                style={{
                    borderBottomLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                    zIndex: 99,
                }}
                className="w-full fixed top-0 right-0"
            >
                <div id="upScroll"></div>
                <Header isHomePage={true} />
                <HeaderBottom isVisible={true} />
            </div>

            {/* Fixed Operations */}
            <DigerIslemler />

            {/* Photos and Videos */}
            <div className="mt-44">
                <SixPhoto photos={Ilk6li} />
            </div>
            <TripleVideo videos={videos3} />
            <SixPhoto photos={ikinciAltili} />
            <TripleVideo videos={videos3} />
            <AlertCard />
            <SixPhoto photos={ucuncuAltili} />
            <SingleVideo thumbnailUrl="/maint.jpg" videoUrl="/videos/hero.mp4" altText="Hero Video" />
            <TripleVideo videos={videos3} />
            <SixPhoto photos={dorduncuAltili} />
            <TripleVideo videos={videos3} />
            <AlertCard />
            <ThreePhoto photos={Ilk3lu} />
            <SingleVideo thumbnailUrl="/maint.jpg" videoUrl="/videos/hero.mp4" altText="Tekli Video" />
            <NinePhoto photos={dokuzlu} />
            <TripleVideo videos={videos3} />
            {ilkTekli && (
                <SinglePhoto
                    imageUrl={base + ilkTekli?.formats?.medium?.url}
                    altText="İlk Tekli Fotoğraf"
                    className=""
                />
            )}
            <AlertCard />
            <SixVideo videos={videos6} />
            {ikinciTekli && (
                <SinglePhoto
                    imageUrl={base + ikinciTekli?.formats?.medium?.url}
                    altText="İkinci Tekli Fotoğraf"
                    className=""
                />
            )}
            <AlertCard />
            {ucuncuTekli && (
                <SinglePhoto
                    imageUrl={base + ucuncuTekli?.formats?.medium?.url}
                    altText="Üçüncü Tekli Fotoğraf"
                    className=""
                />
            )}
            <AskQuestionButton />
        </div>
    );
};

export default Page;
