'use client'
import React, { useState } from 'react';
import PopupSingleVideo from './PopupSingleVideo';

interface VideoPlayerProps {
    videoUrl: string;
    thumbnailUrl: string; // Kapak resmi için URL
    altText?: string;
}

const SingleVideo: React.FC<VideoPlayerProps> = ({ videoUrl, thumbnailUrl, altText }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleThumbnailClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="w-[90%] max-w-4xl mt-8 mx-auto">
            {/* Kapak Fotoğrafı */}
            <div
                className="relative w-full cursor-pointer"
                onClick={handleThumbnailClick}
            >
                <img
                    src={thumbnailUrl}
                    alt={altText || 'Video Thumbnail'}
                    className="w-full rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <button
                        className="text-white text-4xl font-bold"
                        aria-label="Play Video"
                    >
                        ▶
                    </button>
                </div>
            </div>

            {/* Popup içinde Video */}
            <PopupSingleVideo isOpen={isPopupOpen} onClose={handleClosePopup}>
                <video
                    className="w-full rounded-lg shadow-lg"
                    controls
                    autoPlay
                    aria-label={altText || 'Video Player in Popup'}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Tarayıcınız bu videoyu oynatmayı desteklemiyor.
                </video>
            </PopupSingleVideo>
        </div>
    );
};

export default SingleVideo;
