'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

interface VideoPopupProps {
    coverImage: string; // Kapak fotoğrafı için URL
    videoSrc: string; // Video kaynağı için URL
    className?: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ coverImage, videoSrc, className }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="flex items-center justify-center mt-2 px-10">
            {/* Kapak Fotoğrafı ve Play Butonu */}
            <div
                onClick={openPopup}
                className={`relative w-full ${className} rounded-lg flex items-center justify-center cursor-pointer`}
            >
                {/* Kapak Fotoğrafı */}
                <Image
                    src={coverImage}
                    width={500}
                    height={500}
                    alt="Video Thumbnail"
                    className="w-full h-auto rounded-lg object-cover"
                />

                {/* Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <FaPlay className="text-white text-4xl bg-black bg-opacity-50 p-3 rounded-full hover:scale-105 transition-transform" />
                </div>
            </div>

            {/* Video Popup */}
            {isPopupOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-hidden"
                    onClick={closePopup} // Popup dışına tıklandığında kapat
                >
                    <div
                        className="relative bg-white rounded-lg p-5 w-[90%] max-w-4xl max-h-[90%] overflow-hidden"
                        onClick={(e) => e.stopPropagation()} // Popup içi tıklamaları durdur
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                        >
                            ✖
                        </button>

                        {/* Video */}
                        <div className="relative w-full aspect-video">
                            <video
                                className="w-full h-full rounded-lg"
                                controls
                                src={videoSrc}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoPopup;
