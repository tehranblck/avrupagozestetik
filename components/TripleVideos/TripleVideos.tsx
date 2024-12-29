'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Popup from '../DoubleVideo/PopupVideo';

const TripleVideo = ({ videos }: any) => {
    const videoData = videos?.videos || [];
    const base = 'https://api.avrupagozestetikinfo.com';
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null);

    const handleThumbnailClick = (index: number) => {
        setCurrentVideoIndex(index);
    };

    const handleClosePopup = () => {
        setCurrentVideoIndex(null);
    };

    useEffect(() => {
        if (currentVideoIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [currentVideoIndex]);

    return (
        <div className="w-[100%] sm:px-32 mt-2 mx-auto grid grid-cols-3 md:grid-cols-3 gap-1 px-2">
            {videoData.map((video: any, index: number) => (
                <div
                    key={video.createdAt || index}
                    className="relative w-full cursor-pointer"
                    onClick={() => handleThumbnailClick(index)}
                >
                    <Image
                        priority
                        width={900}
                        height={900}
                        src={base + (video?.thumbnail?.[0]?.formats?.large?.url || '')}
                        alt={video.createdAt || `Video Thumbnail ${index + 1}`}
                        className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <button
                            className="text-white text-xl font-bold"
                            aria-label="Play Video"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            ))}

            <Popup
                title={currentVideoIndex !== null ? videoData[currentVideoIndex]?.title || '' : ''}
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
                            src={base + (videoData[currentVideoIndex]?.video?.[0]?.url || '')}
                            type="video/mp4"
                        />
                        Tarayıcınız bu videoyu oynatmayı desteklemiyor.
                    </video>
                )}
            </Popup>
        </div>
    );
};

export default TripleVideo;
