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

    // API'den verileri çekmek için fonksiyon
    const fetchComponents = async () => {
        const res = await fetch('https://api.avrupagozestetikinfo.com/api/home-page-fotos?populate=*');
        const data = await res.json();
        return data.data;
    };

    const data = await fetchComponents();

    // Fotoğraf verilerini sırayla ayırma
    const Ilk6li = data[0]?.ilk6_i_foto || [];
    const Ilk3lu = data[0]?.ilk_3_lu || [];
    const ilkTekli = data[0]?.ilkTekli || null;
    const ikinciTekli = data[0]?.ikinciTekli || null;
    const ucuncuTekli = data[0]?.ucuncuTekli || null;
    const ikinciAltili = data[0]?.ikinciAltili || [];
    const ucuncuAltili = data[0]?.ucuncuAltili || [];
    const dorduncuAltili = data[0]?.dorduncuAltili || [];
    const dokuzlu = data[0]?.dokuzlu || [];

    // Video verileri (örnek sabit veri)
    const videos3 = [
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'Göz Estetiği 1',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 2',
            title: 'Kaş Estetiği 1',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 3',
            title: 'Göz Çevresi Estetiği 1',
        },
    ];

    const videos6 = [
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 1',
            title: 'Göz Çevresi 1',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 2',
            title: 'Göz Çevresi 2',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 3',
            title: 'Göz Çevresi 3',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 4',
            title: 'Göz Çevresi 4',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 5',
            title: 'Göz Çevresi 5',
        },
        {
            videoUrl: '/videos/teze.mp4',
            thumbnailUrl: '/maint.jpg',
            altText: 'Video 6',
            title: 'Göz Çevresi 6',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto w-full">
            {/* Sabit Header */}
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

            {/* Fotoğraflar ve Videolar */}
            <div className="mt-44">
                <SixPhoto photos={Ilk6li} /> {/* İlk Altılı Fotoğraf */}
            </div>
            <TripleVideo videos={videos3} /> {/* İlk Üçlü Video */}
            <SixPhoto photos={ikinciAltili} /> {/* İkinci Altılı Fotoğraf */}
            <TripleVideo videos={videos3} /> {/* İkinci Üçlü Video */}
            <AlertCard />
            <SixPhoto photos={ucuncuAltili} /> {/* Üçüncü Altılı Fotoğraf */}
            <SingleVideo thumbnailUrl="/maint.jpg" videoUrl="/videos/hero.mp4" altText="Hero Video" /> {/* Tekli Video */}
            <TripleVideo videos={videos3} /> {/* Üçüncü Üçlü Video */}
            <SixPhoto photos={dorduncuAltili} /> {/* Dördüncü Altılı Fotoğraf */}
            <TripleVideo videos={videos3} /> {/* Dördüncü Üçlü Video */}
            <AlertCard />
            <ThreePhoto photos={Ilk3lu} /> {/* İlk Üçlü Fotoğraf */}
            <SingleVideo thumbnailUrl="/maint.jpg" videoUrl="/videos/hero.mp4" altText="Tekli Video" /> {/* Tekli Video */}
            <NinePhoto photos={dokuzlu} /> {/* Dokuzlu Fotoğraf */}
            <TripleVideo videos={videos3} /> {/* Beşinci Üçlü Video */}
            {ilkTekli && (
                <SinglePhoto
                    imageUrl={base + ilkTekli?.formats?.medium?.url}
                    altText="İlk Tekli Fotoğraf"
                    className=""
                />
            )}
            <AlertCard />
            <SixVideo videos={videos6} /> {/* Altılı Video */}
            <TripleVideo videos={videos3} /> {/* Altıncı Üçlü Video */}
            {ikinciTekli && (
                <SinglePhoto
                    imageUrl={base + ikinciTekli?.formats?.medium?.url}
                    altText="İkinci Tekli Fotoğraf"
                    className=""
                />
            )}
            <AlertCard />
            <SixVideo videos={videos6} /> {/* Altılı Video */}
            <TripleVideo videos={videos3} /> {/* Yedinci Üçlü Video */}
            {ucuncuTekli && (
                <SinglePhoto
                    imageUrl={base + ucuncuTekli?.formats?.medium?.url}
                    altText="Üçüncü Tekli Fotoğraf"
                    className=""
                />
            )}
            <AlertCard />
            <SixVideo videos={videos6} /> {/* Altılı Video */}
            <TripleVideo videos={videos3} /> {/* Sonuncu Üçlü Video */}

            {/* Sabit Buton */}
            <AskQuestionButton />
        </div>
    );
};

export default Page;
