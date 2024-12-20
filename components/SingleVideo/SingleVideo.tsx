'use client'
import React, { useEffect, useRef } from 'react';

interface VideoPlayerProps {
    videoUrl: string;
    altText?: string;
}

const SingleVideo: React.FC<VideoPlayerProps> = ({ videoUrl, altText }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (!videoElement) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        videoElement.pause(); // Video görünmüyorsa durdur
                    }
                });
            },
            { threshold: 0.5 } // Elementin en az %50'si görünürse tetiklenir
        );

        observer.observe(videoElement);

        return () => {
            if (videoElement) observer.unobserve(videoElement);
        };
    }, []);

    return (
        <div className="w-[80%] max-w-4xl mx-auto">
            <video
                ref={videoRef}
                className="w-full rounded-lg shadow-lg"
                controls
                controlsList="nofullscreen"
                aria-label={altText || 'Video Player'}
            >
                <source src={videoUrl} type="video/mp4" />
                Tarayıcınız bu videoyu oynatmayı desteklemiyor.
            </video>
        </div>
    );
};

export default SingleVideo;
