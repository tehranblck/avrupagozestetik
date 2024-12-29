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

    // Fotoğraf ve video verilerini çek
    const dataFotos = await fetchFotosHomepage();

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

    // Video verileri
    const VideoData = await fetchVideoDatas();

    return (
        <div className="max-w-7xl mx-auto w-full">
            {/* Sabit Üst Menü */}
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

            {/* Sabit İşlemler */}
            <DigerIslemler />

            {/* İlk Altılı Fotoğraflar */}
            <div className="mt-44">
                <SixPhoto photos={Ilk6li} />
            </div>

            {/* Birinci Üçlü Video */}
            <TripleVideo videos={VideoData[0]} />

            {/* İkinci Altılı Fotoğraflar */}
            <SixPhoto photos={ikinciAltili} />

            {/* İkinci Üçlü Video */}
            <TripleVideo videos={VideoData[2]} />

            {/* İlk Uyarı Kartı */}
            <AlertCard />

            {/* Üçüncü Altılı Fotoğraflar */}
            <SixPhoto photos={ucuncuAltili} />

            {/* Birinci Tekli Video */}
            <SingleVideo videos={VideoData[1]} />

            {/* Üçüncü Üçlü Video */}
            <TripleVideo videos={VideoData[4]} />

            {/* Dördüncü Altılı Fotoğraflar */}
            <SixPhoto photos={dorduncuAltili} />

            {/* Dördüncü Üçlü Video */}
            <TripleVideo videos={VideoData[6]} />

            {/* İkinci Uyarı Kartı */}
            <AlertCard />

            {/* İlk Üçlü Fotoğraflar */}
            <ThreePhoto photos={Ilk3lu} />

            {/* İkinci Tekli Video */}
            <SingleVideo videos={VideoData[3]} />

            {/* Dokuzlu Fotoğraflar */}
            <NinePhoto photos={dokuzlu} />

            {/* Beşinci Üçlü Video */}
            <TripleVideo videos={VideoData[7]} />

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

            {/* Altılı Video */}
            <SixVideo videos={VideoData[5]} />

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
            <AskQuestionButton />
        </div>
    );
};

export default Page;
