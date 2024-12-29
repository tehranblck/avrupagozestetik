'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Popup from '../DoubleVideo/PopupVideo';

const SixVideo = ({ videos }: any) => {
    const videoData = videos?.videos || [];
    const base = 'https://api.avrupagozestetikinfo.com';

    const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null);

    const handleThumbnailClick = (index: number) => {
        setCurrentVideoIndex(index); // Pop-up'ta açılacak videoyu ayarla
    };

    const handleClosePopup = () => {
        setCurrentVideoIndex(null); // Pop-up'ı kapat
    };

    // Scroll engelleme
    useEffect(() => {
        if (currentVideoIndex !== null) {
            document.body.style.overflow = 'hidden'; // Scroll'u devre dışı bırak
        } else {
            document.body.style.overflow = ''; // Varsayılan scroll davranışı
        }

        return () => {
            document.body.style.overflow = ''; // Cleanup işlemi
        };
    }, [currentVideoIndex]);

    return (
        <div className="w-[100%] px-2 mt-2 sm:px-32 mx-auto grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-1">
            {videoData.map((video: any, index: number) => (
                <div
                    key={video.createdAt || index}
                    className="relative w-full cursor-pointer"
                    onClick={() => handleThumbnailClick(index)}
                >
                    {/* Kapak Fotoğrafı */}
                    <Image
                        priority
                        width={900}
                        height={900}
                        src={base + (video?.thumbnail?.[0]?.formats?.large?.url || '')}
                        alt={video.createdAt || `Video Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <button
                            className="text-white text-md font-bold"
                            aria-label="Play Video"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            ))}

            {/* Popup */}
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

export default SixVideo;
