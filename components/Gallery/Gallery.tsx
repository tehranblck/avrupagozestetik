'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'; // İkonlar
import { Link } from '@/i18n/routing';

interface ImageData {
    src: string;
    alt: string;
}

interface GalleryProps {
    hasVideo: boolean;
    videoLink?: string;
    images: ImageData[];
    categoryTitle: string;
    buttonText: string;
}

const Gallery: React.FC<GalleryProps> = ({ hasVideo, videoLink, images, categoryTitle, buttonText }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const popupRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLIFrameElement>(null);

    const openPopup = (index: number) => {
        setCurrentImageIndex(index);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const showNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            gsap.to(popupRef.current, {
                opacity: 0,
                x: -100,
                duration: 0.4,
                onComplete: () => {
                    setCurrentImageIndex((prev) => prev + 1);
                    gsap.fromTo(
                        popupRef.current,
                        { opacity: 0, x: 100 },
                        { opacity: 1, x: 0, duration: 0.4 }
                    );
                },
            });
        }
    };

    const showPrevImage = () => {
        if (currentImageIndex > 0) {
            gsap.to(popupRef.current, {
                opacity: 0,
                x: 100,
                duration: 0.4,
                onComplete: () => {
                    setCurrentImageIndex((prev) => prev - 1);
                    gsap.fromTo(
                        popupRef.current,
                        { opacity: 0, x: -100 },
                        { opacity: 1, x: 0, duration: 0.4 }
                    );
                },
            });
        }
    };

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            const entry = entries[0];
            if (videoRef.current) {
                // Video görünür değilse durdur
                if (!entry.isIntersecting) {
                    videoRef.current.contentWindow?.postMessage(
                        '{"event":"command","func":"pauseVideo","args":""}',
                        '*'
                    );
                }
            }
        };

        const observerOptions = {
            root: null, // Viewport
            threshold: 0.5, // %50 görünürlük
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className="flex flex-col items-center gap-2 pt-44 bg-gray-100">
            {/* YouTube Video */}
            {hasVideo && videoLink && (
                <div className="w-full h-64 bg-gray-300 rounded-lg overflow-hidden">
                    <iframe
                        ref={videoRef}
                        className="w-full h-full"
                        src={`${videoLink}?enablejsapi=1`}
                        title="YouTube Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            )}

            {/* Category Title & Button */}
            <div className="w-full flex justify-between items-center px-4 py-0 rounded-lg mt-0">
                <h1 className="text-lg sm:text-2xl font-bold text-gray-800">{categoryTitle}</h1>
                <Link
                    href={'/'}
                    className="text-sm sm:text-base text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg shadow-md transition-colors"
                >
                    {buttonText}
                </Link>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-12 gap-x-3 w-full px-2 mt-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full h-32 bg-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
                        onClick={() => openPopup(index)}
                    >
                        <Image className="rounded-lg" src={image.src} alt={image.alt} width={400} height={400} />
                    </div>
                ))}
            </div>

            {/* Popup */}
            {isPopupOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closePopup} // Popup dışına tıklandığında kapat
                >
                    <div
                        ref={popupRef}
                        className="relative bg-white rounded-lg p-4 max-w-[90%] w-[500px] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()} // Popup içi tıklamaları durdur
                    >
                        {/* Close Button */}
                        <button
                            onClick={closePopup}
                            className="absolute top-2 z-50 right-2 text-gray-500 hover:text-gray-700"
                        >
                            ✖
                        </button>

                        {/* Current Image */}
                        <div className="relative group w-full">
                            <Image
                                src={images[currentImageIndex].src}
                                alt={images[currentImageIndex].alt}
                                width={400}
                                height={400}
                                className="rounded-lg"
                            />

                            {/* Prev Icon */}
                            {currentImageIndex > 0 && (
                                <button
                                    onClick={showPrevImage}
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full items-center justify-center"
                                >
                                    <IoChevronBack size={24} />
                                </button>
                            )}

                            {/* Next Icon */}
                            {currentImageIndex < images.length - 1 && (
                                <button
                                    onClick={showNextImage}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full items-center justify-center"
                                >
                                    <IoChevronForward size={24} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
