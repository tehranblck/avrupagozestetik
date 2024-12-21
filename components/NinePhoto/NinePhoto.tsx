'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import PopupPhoto from '../SixPhoto/PopupPhoto';

interface PhotoProps {
    imageUrl: string;
    altText?: string;
    title: string; // Her fotoğraf için başlık özelliği
}

const NinePhoto: React.FC<{ photos: PhotoProps[] }> = ({ photos }) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null);

    const handleThumbnailClick = (index: number) => {
        setCurrentPhotoIndex(index);
    };

    const handleClosePopup = () => {
        setCurrentPhotoIndex(null);
    };

    const handleNextPhoto = () => {
        if (currentPhotoIndex === null) return;
        setCurrentPhotoIndex((currentPhotoIndex + 1) % photos.length);
    };

    const handlePreviousPhoto = () => {
        if (currentPhotoIndex === null) return;
        setCurrentPhotoIndex((currentPhotoIndex - 1 + photos.length) % photos.length);
    };

    return (
        <div className="w-[100%] sm:px-32  mt-2 mx-auto grid grid-cols-3 gap-1 px-2">
            {photos.map((photo, index) => (
                <div
                    key={index}
                    className="relative w-full cursor-pointer"
                    onClick={() => handleThumbnailClick(index)}
                >
                    {/* Fotoğraf Thumbnail */}
                    <Image
                        priority
                        width={900}
                        height={900}
                        src={photo.imageUrl}
                        alt={photo.altText || `Photo ${index + 1}`}
                        className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <button
                            className="text-white text-xl font-bold"
                            aria-label="View Photo"
                        >
                            🔍
                        </button>
                    </div>
                </div>
            ))}

            {/* Popup */}
            <PopupPhoto
                isOpen={currentPhotoIndex !== null}
                onClose={handleClosePopup}
                onNext={handleNextPhoto}
                onPrev={handlePreviousPhoto}
                title={currentPhotoIndex !== null ? photos[currentPhotoIndex].title : ''}
            >
                {currentPhotoIndex !== null && (
                    <Image
                        src={photos[currentPhotoIndex].imageUrl}
                        alt={photos[currentPhotoIndex].altText || 'Current Photo'}
                        width={900}
                        height={900}
                        className="rounded-lg shadow-lg"
                    />
                )}
            </PopupPhoto>
        </div>
    );
};

export default NinePhoto;
