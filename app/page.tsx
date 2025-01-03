import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import AskQuestionButton from '@/components/AskQuestionButton/AskQuestionButton';
import ThreePhoto from '@/components/DoublePhoto/DoublePhoto';
import { fetchFotosHomepage } from '@/components/helpers/FetchHomeFotos';
import Header from '@/components/Header/Header';
import HeaderBottom from '@/components/Header/HeaderBottom';
import AlertCard from '@/components/Question/QuestionButton';
import SinglePhoto from '@/components/SinglePhoto/SinglePhoto';
import SingleVideo from '@/components/SingleVideo/SingleVideo';
import SixPhoto from '@/components/SixPhoto/SixPhoto';
import SixVideo from '@/components/SixVideo/SixVideo';
import TripleVideo from '@/components/TripleVideos/TripleVideos';
import { fetchVideoDatas } from '@/components/helpers/FetchHomeVideos';
import Image from 'next/image';
import Link from 'next/link';
import { fetchTextContents } from '@/components/helpers/FetchTextContents';
import DoubleVideo from '@/components/DoubleVideo/DoubleVideo';

const Page = async () => {
    const base = 'https://api.avrupagozestetikinfo.com';

    // Fotoğraf ve video verilerini çek
    const {
        ilkTekliFoto,
        ilkÜçlüFoto,
        ilkAltılıFoto,
        ikinciÜçlüFoto,
        ikinciAltılıFoto,
        üçüncüÜçlüFoto,
        ikinciTekliFoto,
        üçüncüAltılıFoto,
        dördüncüAltılıFoto,
        beşinciAltılıFoto,
        altıncıAltılıFoto,
        yedinciAltılıFoto,
        dördüncüÜçlüFoto,
        beşinciÜçlüFoto,
        altıncıÜçlüFoto,
        sekizinciAltılıFoto,
    } = await fetchFotosHomepage();

    const VideoData = await fetchVideoDatas();

    // Video verilerini id'ye göre filtrele
    const sortedVideos = VideoData.sort((a: any, b: any) => a.id - b.id);
    const firstTripleVideo = sortedVideos.find((video: any) => video.name === 'İlk Üçlü video');
    const firstSingleVideo = sortedVideos.find((video: any) => video.name === 'İlk Təkli Video');
    const secondTripleVideo = sortedVideos.find((video: any) => video.name === 'İkinci Üçlü Video');
    const secondSingleVideo = sortedVideos.find((video: any) => video.name === 'İkinci Təkli Video');
    const thirdTripleVideo = sortedVideos.find((video: any) => video.name === 'Üçüncü üçlü video');
    const firstSixVideo = sortedVideos.find((video: any) => video.name === 'İlk Altılı Video');
    console.log(firstSixVideo)
    const fourthTripleVideo = sortedVideos.find((video: any) => video.name === 'Dördüncü üçlü video');
    const fifthTripleVideo = sortedVideos.find((video: any) => video.name === 'Beşinci üçlü video');

    const dataTextContents = await fetchTextContents();
    const Metin_1 = dataTextContents?.[0].metin_alanis[0];
    const Metin_2 = dataTextContents?.[1].metin_alanis[0];
    const Metin_3 = dataTextContents?.[2].metin_alanis[0];
    const Metin_4 = dataTextContents?.[3].metin_alanis[0];
    const Metin_5 = dataTextContents?.[4].metin_alanis[0];
    const Metin_6 = dataTextContents?.[5].metin_alanis[0];

    return (
        <div className="max-w-7xl mx-auto w-full">
            {/* Header */}
            <div
                style={{
                    borderBottomLeftRadius: '20px',
                    borderBottomRightRadius: '20px',
                    zIndex: 99,
                }}
                className="w-full fixed header top-0 right-0"
            >
                <div id="upScroll"></div>
                <HeaderBottom isVisible={true} />
                <Header isHomePage={true} />
            </div>

            <div id='blurbg' className="bg">
                <div className="flex items-center mt-40 justify-center w-full">

                </div>

                {/* Fotoğraf ve Video Bileşenleri */}
                <SinglePhoto image={ilkTekliFoto} />
                <ThreePhoto photos={ilkÜçlüFoto} />
                {firstTripleVideo && <TripleVideo videos={firstTripleVideo} />}
                <SixPhoto photos={ilkAltılıFoto} />
                {firstSingleVideo && <SingleVideo videos={firstSingleVideo} />}
                {secondTripleVideo && <TripleVideo videos={secondTripleVideo} />}

                {/* 9. İlk Uyarı Kartı */}
                <AlertCard text={Metin_1} />

                {/*  ikinci 3-lü Fotoğraf */}
                <ThreePhoto photos={ikinciÜçlüFoto} />

                {/* 11. Üçüncü Üçlü Video */}
                {thirdTripleVideo && <TripleVideo videos={thirdTripleVideo} />}

                {/* 12. İkinci Altılı Fotoğraflar */}
                <SixPhoto photos={ikinciAltılıFoto} />

                {/* 13. İkinci Uyarı Kartı */}
                <AlertCard text={Metin_2} />

                {/* 14. Dördüncü Üçlü Video */}
                {fourthTripleVideo && <TripleVideo videos={fourthTripleVideo} />}

                {/* 15. Üçüncü 3-lü Fotoğraf */}
                <ThreePhoto photos={üçüncüÜçlüFoto} />

                {/* 16. İlk Altılı Video */}
                {firstSixVideo && <SixVideo videos={firstSixVideo} />}

                {/* 17. Üçüncü Uyarı Kartı */}
                <AlertCard text={Metin_3} />



                {/* 18. İkinci Tekli Fotoğraf */}
                <SinglePhoto image={ikinciTekliFoto} />

                {/* 18. İkinci Altili Video */}
                <SixVideo videos={firstSixVideo} />

                {/* 19. Üçüncü Altılı Fotoğraflar */}
                <SixPhoto photos={üçüncüAltılıFoto} />

                {/* 20. Beşinci Üçlü Video */}
                {fifthTripleVideo && <TripleVideo videos={fifthTripleVideo} />}

                {/* 21. Dördüncü Altılı Fotoğraflar */}
                <SixPhoto photos={dördüncüAltılıFoto} />

                {/* 22. Dördüncü Uyarı Kartı */}
                <AlertCard text={Metin_4} />

                {/* 23. Beşinci Altılı Fotoğraflar */}
                <SixPhoto photos={beşinciAltılıFoto} />



                {/* 25. Altıncı Altılı Fotoğraflar */}
                <SixPhoto photos={altıncıAltılıFoto} />++++++++++++++++++++++

                {/* 26. Beşinci Uyarı Kartı */}
                <AlertCard text={Metin_5} />+++++++++++++++++++++

                {/* 27. Yedinci Altılı Fotoğraflar */}
                <SixPhoto photos={yedinciAltılıFoto} />+++++++++++++++++++++


                {/* 28. Altıncı Uyarı Kartı */}
                <AlertCard text={Metin_6} />
            </div>

            {/* 33. WhatsApp İletişim Butonu */}
            <AskQuestionButton />
        </div>
    );
};

export default Page;
