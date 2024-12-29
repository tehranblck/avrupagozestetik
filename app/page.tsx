import AskQuestionButton from '@/components/AskQuestionButton/AskQuestionButton';
import DigerIslemler from '@/components/DigerIslemler';
import ThreePhoto from '@/components/DoublePhoto/DoublePhoto';
import { fetchFotosHomepage } from '@/components/helpers/FetchHomeFotos';
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
import { fetchVideoDatas } from '@/components/helpers/FetchHomeVideos';

const Page = async () => {
    const base = 'https://api.avrupagozestetikinfo.com';

    // Fetch video data

    const dataFotos = await fetchFotosHomepage();

    const Ilk6li = dataFotos[0]?.ilk6_i_foto || [];
    const Ilk3lu = dataFotos[0]?.ilk_3_lu || [];
    const ilkTekli = dataFotos[0]?.ilkTekli || null;
    const ikinciTekli = dataFotos[0]?.ikinciTekli || null;
    const ucuncuTekli = dataFotos[0]?.ucuncuTekli || null;
    const ikinciAltili = dataFotos[0]?.ikinciAltili || [];
    const ucuncuAltili = dataFotos[0]?.ucuncuAltili || [];
    const dorduncuAltili = dataFotos[0]?.dorduncuAltili || [];
    const dokuzlu = dataFotos[0]?.dokuzlu || [];

    const VideoData = await fetchVideoDatas();
    console.log(VideoData)
    console.log(VideoData[1])
    // console.log("VideoData", VideoData);
    // console.log("Single VideoData", VideoData[0]);
    // console.log("VideoData with videos", VideoData[0].videos);
    // console.log("VideoData with video media", VideoData[0].videos[0].video);
    // console.log("VideoData with thumbnail media", VideoData[0].videos[0].thumbnail);

    const videos3 = [
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'Göz Estetiği 1',
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
            <TripleVideo videos={VideoData[0]} />
            <SixPhoto photos={ikinciAltili} />
            <TripleVideo videos={VideoData[2]} />
            <AlertCard />
            <SixPhoto photos={ucuncuAltili} />
            <SingleVideo videos={VideoData[1]} />
            <TripleVideo videos={videos3} />
            <SixPhoto photos={dorduncuAltili} />
            <TripleVideo videos={videos3} />
            <AlertCard />
            <ThreePhoto photos={Ilk3lu} />
            <SingleVideo videos={VideoData[3]} />
            <NinePhoto photos={dokuzlu} />
            <TripleVideo videos={VideoData[4]} />
            {ilkTekli && (
                <SinglePhoto
                    imageUrl={base + ilkTekli?.formats?.medium?.url}
                    altText="İlk Tekli Fotoğraf"
                    className=""
                />
            )}
            <AlertCard />
            <SixVideo videos={VideoData[5]} />
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
