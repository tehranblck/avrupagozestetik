'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Popup from './PopupVideo';

const DoubleVideo = ({ videos }: any) => {
    const base = 'https://api.avrupagozestetikinfo.com';
    console.log(videos);
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null);

    const handleThumbnailClick = (index: number) => {
        setCurrentVideoIndex(index); // Pop-up'ta açılacak videoyu ayarla
    };

    const handleClosePopup = () => {
        setCurrentVideoIndex(null); // Pop-up'ı kapat
    };

    return (
        <div className="w-[100%] mt-2 sm:px-32 px-2 mx-auto grid grid-cols-2 gap-2">
            {videos?.videos?.map((videoObj: any, index: number) => (
                <div
                    key={videoObj?.id || `video-${index}`} // Benzersiz bir key değeri
                    className="relative w-full cursor-pointer"
                    onClick={() => handleThumbnailClick(index)}
                >
                    {/* Kapak Fotoğrafı */}
                    <Image
                        priority
                        width={900}
                        height={900}
                        src={
                            base + videoObj?.thumbnail?.[0].formats?.large.url

                        }
                        alt={videoObj?.altText || `Video Thumbnail ${index + 1}`}
                        className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <button
                            className="text-white text-3xl font-bold"
                            aria-label="Play Video"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            ))}

            {/* Popup */}
            <Popup
                title={
                    currentVideoIndex !== null
                        ? videos?.videos[currentVideoIndex]?.title || 'Default Title'
                        : ''
                }
                isOpen={currentVideoIndex !== null}
                onClose={handleClosePopup}
            >
                {currentVideoIndex !== null && (
                    <video
                        className="w-full shadow-lg"
                        controls
                        controlsList="nofullscreen"
                        autoPlay
                        playsInline
                    >
                        <source
                            src={
                                videos?.videos[currentVideoIndex]?.video[0]?.url
                                    ? `${base}${videos?.videos[currentVideoIndex]?.video[0]?.url}`
                                    : ''
                            }
                            type="video/mp4"
                        />
                        Tarayıcınız bu videoyu oynatmayı desteklemiyor.
                    </video>
                )}
            </Popup>
        </div>
    );
};

export default DoubleVideo;
