'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Popup from '../DoubleVideo/PopupVideo';

interface VideoProps {
    videoUrl: string;
    thumbnailUrl: string;
    altText?: string;
    title: string; // Her video için başlık özelliği eklendi
}

const SixVideo: React.FC<{ videos: VideoProps[] }> = ({ videos }) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null);

    const handleThumbnailClick = (index: number) => {
        setCurrentVideoIndex(index); // Pop-up'ta açılacak videoyu ayarla
    };

    const handleClosePopup = () => {
        setCurrentVideoIndex(null); // Pop-up'ı kapat
    };

    return (
        <div className="w-[100%] px-2 mt-2 mx-auto grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-1">
            {videos.map((video, index) => (
                <div
                    key={index}
                    className="relative w-full cursor-pointer"
                    onClick={() => handleThumbnailClick(index)}
                >
                    {/* Kapak Fotoğrafı */}
                    <Image
                        priority
                        width={900}
                        height={900}
                        src={video.thumbnailUrl}
                        alt={video.altText || `Video Thumbnail ${index + 1}`}
                        className="w-full rounded-lg shadow-lg"
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
                title={currentVideoIndex !== null ? videos[currentVideoIndex].title : ''}
                isOpen={currentVideoIndex !== null}
                onClose={handleClosePopup}
            >
                {currentVideoIndex !== null && (
                    <video
                        className="w-full rounded-lg shadow-lg"
                        controls
                        controlsList="nofullscreen"
                        autoPlay
                    >
                        <source
                            src={videos[currentVideoIndex].videoUrl}
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
