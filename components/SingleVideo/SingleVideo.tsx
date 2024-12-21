'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface VideoPlayerProps {
    videoUrl: string;
    thumbnailUrl: string;
    altText?: string;
}

const SingleVideo: React.FC<VideoPlayerProps> = ({ videoUrl, thumbnailUrl, altText }) => {
    const [isVideoVisible, setIsVideoVisible] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('Video is visible, user can interact with it');
                    } else {
                        videoElement.pause();
                    }
                });
            },
            { threshold: 0.5 } // %50 görünürlük eşiği
        );

        observer.observe(videoElement);

        return () => {
            if (videoElement) observer.unobserve(videoElement);
        };
    });

    const handleThumbnailClick = () => {
        setIsVideoVisible(true);
    };

    return (
        <div className="w-[100%]  px-2 mt-2 mx-auto">
            {!isVideoVisible ? (
                <div
                    className="relative w-full cursor-pointer"
                    onClick={handleThumbnailClick}
                >
                    {/* Kapak Fotoğrafı */}
                    <Image
                        priority
                        width={900}
                        height={900}
                        src={thumbnailUrl}
                        alt={altText || 'Video Thumbnail'}
                        className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <button
                            className="text-white text-6xl font-bold"
                            aria-label="Play Video"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            ) : (
                <video
                    ref={videoRef}
                    width={900}
                    height={900}
                    className=" mx-auto  object-cover rounded-lg shadow-lg"
                    controls
                    controlsList="nofullscreen" // Tam ekran seçeneğini devre dışı bırakır
                    aria-label={altText || 'Video Player'}
                >
                    <source src={videoUrl} type="video/mp4" />
                    Tarayıcınız bu videoyu oynatmayı desteklemiyor.
                </video>
            )}
        </div>
    );
};

export default SingleVideo;
