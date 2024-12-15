'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface ImageData {
    src: string;
    alt: string;
}

interface PopupWithGalleryProps {
    images: ImageData[];
}

const PopupWithGallery: React.FC<PopupWithGalleryProps> = ({ images }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const popupRef = useRef<HTMLDivElement>(null);

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
                duration: 0.1,
                onComplete: () => {
                    setCurrentImageIndex((prev) => prev + 1);
                    gsap.fromTo(
                        popupRef.current,
                        { opacity: 0, x: 100 },
                        { opacity: 1, x: 0, duration: 0.1 }
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
                duration: 0.1,
                onComplete: () => {
                    setCurrentImageIndex((prev) => prev - 1);
                    gsap.fromTo(
                        popupRef.current,
                        { opacity: 0, x: -100 },
                        { opacity: 1, x: 0, duration: 0.1 }
                    );
                },
            });
        }
    };

    return (
        <div style={{ zIndex: '1' }} className="flex flex-col items-center gap-2  pt-2">
            {/* Trigger Button or Image Grid */}
            <div className="grid grid-cols-3 gap-1 w-full px-1">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-full rounded-lg flex items-center justify-center cursor-pointer"
                        onClick={() => openPopup(index)}
                    >
                        <Image
                            className="rounded-lg"
                            src={image.src}
                            alt={image.alt}
                            width={400}
                            height={400}
                        />
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

export default PopupWithGallery;
