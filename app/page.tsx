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
import Image from 'next/image';
import Link from 'next/link';

const Page = async () => {
    const base = 'https://api.avrupagozestetikinfo.com';

    // Fotoğraf ve video verilerini çek
    const dataFotos = await fetchFotosHomepage();
    const VideoData = await fetchVideoDatas();

    // Fotoğraf verileri
    const Ilk6li = dataFotos[0]?.ilk6_i_foto || [];
    const Ilk3lu = dataFotos[0]?.ilk_3_lu || [];
    const ilkTekli = dataFotos[0]?.ilkTekli || null;
    const ikinciTekli = dataFotos[0]?.ikinciTekli || null;
    const ucuncuTekli = dataFotos[0]?.ucuncuTekli || null;
    const ikinciAltili = dataFotos[0]?.ikinciAltili || [];
    const ucuncuAltili = dataFotos[0]?.ucuncuAltili || [];
    const dorduncuAltili = dataFotos[0]?.dorduncuAltili || [];
    const dokuzlu = dataFotos[0]?.dokuzlu || [];

    // Video verilerini id'ye göre filtrele
    const sortedVideos = VideoData.sort((a: any, b: any) => a.id - b.id);
    console.log(sortedVideos)
    const firstTripleVideo = sortedVideos.find((video: any) => video.id === 76);
    const firstSingleVideo = sortedVideos.find((video: any) => video.id === 66);
    const secondTripleVideo = sortedVideos.find((video: any) => video.id === 67);
    const secondSingleVideo = sortedVideos.find((video: any) => video.id === 68);
    const thirdTripleVideo = sortedVideos.find((video: any) => video.id === 71);
    const firstSixVideo = sortedVideos.find((video: any) => video.id === 72);
    const fourthTripleVideo = sortedVideos.find((video: any) => video.id === 62);
    const fifthTripleVideo = sortedVideos.find((video: any) => video.id === 74);

    return (
        <div className="max-w-7xl mx-auto w-full">
            {/* Sabit Üst Menü */}
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
            <div className="bg">
                <div className="flex items-center  mt-36 justify-center w-full">
                    <Link href={'/'} className="flex items-center justify-center">
                        <Image alt="Logo" src="/logo.svg" width={150} height={120} />
                    </Link>
                </div>

                {/* Sabit İşlemler */}
                {/* <DigerIslemler /> */}

                {/* İlk Altılı Fotoğraflar */}
                <div className="">
                    <SixPhoto photos={Ilk6li} />
                </div>

                {/* Birinci Üçlü Video */}
                {firstTripleVideo && <TripleVideo videos={firstTripleVideo} />}

                {/* İkinci Altılı Fotoğraflar */}
                <SixPhoto photos={ikinciAltili} />

                {/* İkinci Üçlü Video */}
                {secondTripleVideo && <TripleVideo videos={secondTripleVideo} />}

                {/* İlk Uyarı Kartı */}
                <AlertCard />

                {/* Üçüncü Altılı Fotoğraflar */}
                <SixPhoto photos={ucuncuAltili} />

                {/* Birinci Tekli Video */}
                {firstSingleVideo && <SingleVideo videos={firstSingleVideo} />}

                {/* Üçüncü Üçlü Video */}
                {thirdTripleVideo && <TripleVideo videos={thirdTripleVideo} />}

                {/* Dördüncü Altılı Fotoğraflar */}
                <SixPhoto photos={dorduncuAltili} />

                {/* Dördüncü Üçlü Video */}
                {fourthTripleVideo && <TripleVideo videos={fourthTripleVideo} />}

                {/* İkinci Uyarı Kartı */}
                <AlertCard />

                {/* İlk Altılı Video */}
                {firstSixVideo && <SixVideo videos={firstSixVideo} />}

                {/* İlk Üçlü Fotoğraflar */}
                <ThreePhoto photos={Ilk3lu} />

                {/* İkinci Tekli Video */}
                {secondSingleVideo && <SingleVideo videos={secondSingleVideo} />}

                {/* Dokuzlu Fotoğraflar */}
                <NinePhoto photos={dokuzlu} />

                {/* Beşinci Üçlü Video */}
                {fifthTripleVideo && <TripleVideo videos={fifthTripleVideo} />}

                {/* İlk Tekli Fotoğraf */}
                {ilkTekli && (
                    <SinglePhoto
                        imageUrl={base + ilkTekli?.formats?.medium?.url}
                        altText="İlk Tekli Fotoğraf"
                        className=""
                    />
                )}

                {/* Üçüncü Uyarı Kartı */}
                <AlertCard />

                {/* İkinci Tekli Fotoğraf */}
                {ikinciTekli && (
                    <SinglePhoto
                        imageUrl={base + ikinciTekli?.formats?.medium?.url}
                        altText="İkinci Tekli Fotoğraf"
                        className=""
                    />
                )}

                {/* Dördüncü Uyarı Kartı */}
                <AlertCard />

                {/* Üçüncü Tekli Fotoğraf */}
                {ucuncuTekli && (
                    <SinglePhoto
                        imageUrl={base + ucuncuTekli?.formats?.medium?.url}
                        altText="Üçüncü Tekli Fotoğraf"
                        className=""
                    />
                )}

                {/* Soru Sorma Butonu */}
            </div>
            <AskQuestionButton />
        </div>
    );
};

export default Page;
