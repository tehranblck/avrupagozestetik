'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const SingleVideo = ({ videos }: any) => {
    const base = 'https://api.avrupagozestetikinfo.com';
    const [isVideoVisible, setIsVideoVisible] = useState(false); // Video görünüyor mu?
    const [hasPlayed, setHasPlayed] = useState(false); // Video oynatıldı mı?
    const videoRef = useRef<HTMLVideoElement | null>(null);
    console.log(videos)
    // Videoları güvenli bir şekilde kontrol et ve varsayılan değeri oluştur
    const safeVideos = videos?.videos && Array.isArray(videos.videos) ? videos.videos : [];
    const videoData = safeVideos.length > 0 ? safeVideos[0] : { thumbnail: [{}], video: [{}] };

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && isVideoVisible && !hasPlayed) {
                        videoElement.play();
                        setHasPlayed(true);
                    } else if (!entry.isIntersecting) {
                        videoElement.pause();
                    }
                });
            },
            { threshold: 0.5 } // %50 görünürlük eşiği
        );

        observer.observe(videoElement);

        return () => {
            observer.disconnect();
        };
    }, [isVideoVisible, hasPlayed]);

    const handleThumbnailClick = () => {
        setIsVideoVisible(true); // Videoyu görünür yap
        if (videoRef.current) {
            videoRef.current.muted = true; // Video sessiz olarak başlayacak
            videoRef.current.play(); // Videoyu başlat
            setHasPlayed(true); // Videonun oynatıldığını işaretle
        }
    };

    const getThumbnailUrl = () => {
        return (
            base +
            (videoData?.thumbnail?.[0]?.url ||
                '/default.svg') // Varsayılan görsel
        );
    };

    const getVideoUrl = () => {
        return (
            base +
            (videoData?.video?.[0]?.url || '/videos/default.mp4') // Varsayılan video
        );
    };

    return (
        <div className="w-[100%] sm:px-16 px-2  mx-auto">
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
                        src={getThumbnailUrl()}
                        alt={videoData?.documentId || `Video Thumbnail`}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center  rounded-lg">
                        <button
                            className="text-white text-9xl font-bold"
                            aria-label="Play Video"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            ) : (
                <video
                    ref={videoRef}
                    className="mx-auto object-cover lg:h-[400px] sm:w-[80%] shadow-lg w-full"
                    controls
                    controlsList="nofullscreen"
                    aria-label="Video Player"
                    playsInline
                >
                    <source src={getVideoUrl()} type="video/mp4" />
                    Tarayıcınız bu videoyu oynatmayı desteklemiyor.
                </video>
            )}
        </div>
    );
};

export default SingleVideo;
