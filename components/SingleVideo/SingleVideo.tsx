'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';



const SingleVideo = ({ videos }: any) => {
    const videoData = videos?.videos[0];
    console.log(videoData)
    const base = 'https://api.avrupagozestetikinfo.com'
    const [isVideoVisible, setIsVideoVisible] = useState(false); // Video görünüyor mu?
    const [hasPlayed, setHasPlayed] = useState(false); // Video oynatıldı mı?
    const videoRef = useRef<HTMLVideoElement | null>(null);

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

    return (
        <div className="w-[100%] sm:px-32 px-2 mt-2 mx-auto">
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
                        src={base + (videoData?.thumbnail[0]?.formats.large.url || '')}
                        alt={videoData?.documentId || `Video Thumbnail ${+ 1}`}
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
                    className="mx-auto object-cover lg:h-[400px] sm:w-[80%]  shadow-lg w-full"
                    controls
                    controlsList="nofullscreen" // Tam ekran seçeneğini devre dışı bırakır
                    aria-label={'Video Player'}
                    playsInline // Tam ekran olmadan oynatma
                >
                    <source src={base + videoData.video[0].url} type="video/mp4" />
                    Tarayıcınız bu videoyu oynatmayı desteklemiyor.
                </video>
            )}
        </div>
    );
};

export default SingleVideo;
