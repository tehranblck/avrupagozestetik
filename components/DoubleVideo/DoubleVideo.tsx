'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Popup from './PopupVideo';

const DoubleVideo = ({ videos }: any) => {
    const base = 'https://api.avrupagozestetikinfo.com';
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null);

    // Veri kontrolü
    const videoList = videos?.videos || [];
    const hasVideos = Array.isArray(videoList) && videoList.length > 0;

    const handleThumbnailClick = (index: number) => {
        setCurrentVideoIndex(index);
    };

    const handleClosePopup = () => {
        setCurrentVideoIndex(null);
    };

    // Video verisi yoksa veya boşsa
    if (!hasVideos) {
        return (
            <div className="w-[100%] mt-2 sm:px-32 px-2 mx-auto grid grid-cols-2 gap-2">
                <div className="relative w-full min-h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Video bulunamadı</p>
                </div>
                <div className="relative w-full min-h-[200px] bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Video bulunamadı</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-[100%] mt-2 sm:px-32 px-2 mx-auto grid grid-cols-2 gap-2">
            {videoList.map((videoObj: any, index: number) => {
                const thumbnailUrl = videoObj?.thumbnail?.[0]?.url
                    ? `${base}${videoObj.thumbnail[0].url}`
                    : '/default.svg';

                const videoUrl = videoObj?.video?.[0]?.url
                    ? `${base}${videoObj.video[0].url}`
                    : '';

                return (
                    <div
                        key={videoObj?.id || `video-${index}`}
                        className="relative w-full cursor-pointer"
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <Image
                            priority
                            width={900}
                            height={900}
                            src={thumbnailUrl}
                            alt={videoObj?.altText || `Video ${index + 1}`}
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
                );
            })}

            <Popup
                title={
                    currentVideoIndex !== null && videoList[currentVideoIndex]
                        ? videoList[currentVideoIndex]?.title || 'Video'
                        : ''
                }
                isOpen={currentVideoIndex !== null}
                onClose={handleClosePopup}
            >
                {currentVideoIndex !== null && videoList[currentVideoIndex] && (
                    <video
                        className="w-full shadow-lg"
                        controls
                        controlsList="nofullscreen"
                        autoPlay
                        playsInline
                    >
                        <source
                            src={
                                videoList[currentVideoIndex]?.video?.[0]?.url
                                    ? `${base}${videoList[currentVideoIndex].video[0].url}`
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
