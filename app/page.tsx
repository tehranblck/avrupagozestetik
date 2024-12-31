
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
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
            {/* 1. Sabit Üst Menü */}
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

            <div id='blurbg ' className="bg">
                <div className="flex items-center  mt-36 justify-center w-full">
                    {/* 2. Logo */}
                    <Link href={'/'} className="flex items-center justify-center">
                        <Image alt="Logo" src="/logo.svg" width={150} height={120} />
                    </Link>
                </div>

                {/* 3. İlk Tekli Fotoğraf */}
                {ilkTekli && (
                    <SinglePhoto
                        imageUrl={base + ilkTekli?.formats?.medium?.url}
                        altText="İlk Tekli Fotoğraf"
                        className=""
                    />
                )}

                {/* 4. İlk Üçlü Fotoğraflar */}
                <ThreePhoto photos={Ilk3lu} />
                {/* 5. Birinci Üçlü Video */}
                {firstTripleVideo && <TripleVideo videos={firstTripleVideo} />}
                {/* 6. İlk 6'lı Fotoğraf */}
                <SixPhoto photos={Ilk6li} />

                {/* 7. İlk Tekli Video */}
                {firstSingleVideo && <SingleVideo videos={firstSingleVideo} />}

                {/* 8. İkinci Üçlü Video */}
                {secondTripleVideo && <TripleVideo videos={secondTripleVideo} />}

                {/* 9. İlk Uyarı Kartı */}
                <AlertCard />

                {/* 10. İlk 3-lü Fotoğraf */}
                <ThreePhoto photos={Ilk6li} />

                {/* 11. Üçüncü Üçlü Video */}
                {thirdTripleVideo && <TripleVideo videos={thirdTripleVideo} />}

                {/* 12. İkinci Altılı Fotoğraflar */}
                <SixPhoto photos={ikinciAltili} />

                {/* 13. İkinci Uyarı Kartı */}
                <AlertCard />

                {/* 14. Dördüncü Üçlü Video */}
                {fourthTripleVideo && <TripleVideo videos={fourthTripleVideo} />}

                {/* 15. İkinci 3-lü Fotoğraf */}
                <ThreePhoto photos={Ilk6li} />

                {/* 16. İlk Altılı Video */}
                {firstSixVideo && <SixVideo videos={firstSixVideo} />}

                {/* 17. Üçüncü Uyarı Kartı */}
                <AlertCard />

                {/* 18. İkinci Tekli Fotoğraf */}
                {ikinciTekli && (
                    <SinglePhoto
                        imageUrl={base + ikinciTekli?.formats?.medium?.url}
                        altText="İkinci Tekli Fotoğraf"
                        className=""
                    />
                )}

                {/* 19. Altı Video */}
                <SixVideo videos={firstSixVideo} />

                {/* 20. Üçüncü Altılı Fotoğraflar */}
                <SixPhoto photos={ucuncuAltili} />

                {/* 21. Beşinci Üçlü Video */}
                {fifthTripleVideo && <TripleVideo videos={fifthTripleVideo} />}

                {/* 22. Dördüncü Altılı Fotoğraflar */}
                <SixPhoto photos={dorduncuAltili} />

                {/* 23. Dördüncü Uyarı Kartı */}
                <AlertCard />

                {/* 24. Beşinci Altılı Fotoğraflar */}
                <SixPhoto photos={dorduncuAltili} />

                {/* 25. Altıncı Üçlü Video */}
                {fifthTripleVideo && <TripleVideo videos={fifthTripleVideo} />}

                {/* 26. Altıncı Altılı Fotoğraflar */}
                <SixPhoto photos={dorduncuAltili} />

                {/* 27. Beşinci Uyarı Kartı */}
                <AlertCard />

                {/* 28. Yedinci Altılı Fotoğraflar */}
                <SixPhoto photos={dorduncuAltili} />

                {/* 29. Altı Video */}
                <SixVideo videos={firstSixVideo} />
                <SixVideo videos={firstSixVideo} />

                {/* 30. Altıncı Uyarı Kartı */}
                <AlertCard />

                <SixVideo videos={firstSixVideo} />

                {/* 31. İkinci 3-lü Fotoğraf */}
                <ThreePhoto photos={Ilk6li} />

                {/* 32. İkinci 3-lü Fotoğraf */}
                <ThreePhoto photos={Ilk6li} />
            </div>

            {/* 33. WhatsApp İletişim Butonu */}
            <AskQuestionButton />
        </div>
    );
};

export default Page;
