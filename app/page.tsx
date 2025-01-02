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
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';

const Page = async () => {
    try {
        // Tüm fetch işlemlerini parallel yapma
        const [fotolar, videolar, metinler] = await Promise.all([
            fetchFotosHomepage(),
            fetchVideoDatas(),
            fetchTextContents()
        ]);

        // Video verilerini bir kez işle ve tekrar kullanma
        const videoMap = new Map(videolar.map((video: any) => [video.name, video]));
        const getVideo = (name: string) => videoMap.get(name);

        // Metin verilerini işle
        const metinMap = metinler.reduce((acc: any, item: any) => {
            acc[item.Metin] = item.metin_alanis[0] || null;
            return acc;
        }, {});

        return (
            <ErrorBoundary>
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
                        <div className="flex items-center mt-36 justify-center w-full">
                            <Link href={'/'} className="flex items-center justify-center">
                                <Image alt="Logo" src="/logo.svg" width={150} height={120} />
                            </Link>
                        </div>

                        {/* Fotoğraf ve Video Bileşenleri */}
                        <SinglePhoto image={fotolar.ilkTekliFoto} />
                        <ThreePhoto photos={fotolar.ilkÜçlüFoto} />
                        {getVideo('İlk Üçlü video') && <TripleVideo videos={getVideo('İlk Üçlü video')} />}
                        <SixPhoto photos={fotolar.ilkAltılıFoto} />
                        {getVideo('İlk Təkli Video') && <SingleVideo videos={getVideo('İlk Təkli Video')} />}
                        {getVideo('İkinci Üçlü Video') && <TripleVideo videos={getVideo('İkinci Üçlü Video')} />}

                        {/* Metin Kartları */}
                        <AlertCard text={metinMap['Metin1']} />
                        <ThreePhoto photos={fotolar.ikinciÜçlüFoto} />
                        {getVideo('Üçüncü üçlü video') && <TripleVideo videos={getVideo('Üçüncü üçlü video')} />}
                        <SixPhoto photos={fotolar.ikinciAltılıFoto} />
                        <AlertCard text={metinMap['Metin2']} />
                        {getVideo('Dördüncü üçlü video') && <TripleVideo videos={getVideo('Dördüncü üçlü video')} />}
                        <ThreePhoto photos={fotolar.üçüncüÜçlüFoto} />
                        {getVideo('İlk Altılı Video') && <SixVideo videos={getVideo('İlk Altılı Video')} />}
                        <AlertCard text={metinMap['Metin3']} />
                        <SinglePhoto image={fotolar.ikinciTekliFoto} />
                        {getVideo('İlk Altılı Video') && <SixVideo videos={getVideo('İlk Altılı Video')} />}
                        <SixPhoto photos={fotolar.üçüncüAltılıFoto} />
                        {getVideo('Beşinci üçlü video') && <TripleVideo videos={getVideo('Beşinci üçlü video')} />}
                        <SixPhoto photos={fotolar.dördüncüAltılıFoto} />
                        <AlertCard text={metinMap['Metin4']} />
                        <SixPhoto photos={fotolar.beşinciAltılıFoto} />
                        {getVideo('Beşinci üçlü video') && <TripleVideo videos={getVideo('Beşinci üçlü video')} />}
                        <SixPhoto photos={fotolar.altıncıAltılıFoto} />
                        <AlertCard text={metinMap['Metin5']} />
                        <SixPhoto photos={fotolar.yedinciAltılıFoto} />
                        {getVideo('İlk Altılı Video') && (
                            <>
                                <SixVideo videos={getVideo('İlk Altılı Video')} />
                                <SixVideo videos={getVideo('İlk Altılı Video')} />
                            </>
                        )}
                        <AlertCard text={metinMap['Metin6']} />

                        {/* WhatsApp İletişim Butonu */}
                        <AskQuestionButton />
                    </div>
                </div>
            </ErrorBoundary>
        );
    } catch (error) {
        console.error('Sayfa yüklenirken hata:', error);
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold mb-4">Bir hata oluştu</h1>
                <p>Sayfa yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.</p>
            </div>
        );
    }
};

export default Page;
