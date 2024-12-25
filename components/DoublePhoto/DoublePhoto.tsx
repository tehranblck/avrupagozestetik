'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import PopupPhoto from '../SixPhoto/PopupPhoto';

interface PhotoProps {
    formats?: {
        large?: {
            url: string;
        };
    };
    imageUrl?: string;
    altText?: string;
}

const ThreePhoto: React.FC<{ photos: PhotoProps[] }> = ({ photos }) => {
    const base = 'https://api.avrupagozestetikinfo.com';
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null);

    const handleThumbnailClick = (index: number) => {
        setCurrentPhotoIndex(index);
    };

    const handleClosePopup = () => {
        setCurrentPhotoIndex(null);
    };

    const handleNextPhoto = () => {
        if (currentPhotoIndex !== null && currentPhotoIndex < photos.slice(0, 3).length - 1) {
            setCurrentPhotoIndex(currentPhotoIndex + 1);
        }
    };

    const handlePreviousPhoto = () => {
        if (currentPhotoIndex !== null && currentPhotoIndex > 0) {
            setCurrentPhotoIndex(currentPhotoIndex - 1);
        }
    };

    return (
        <div className="w-full sm:px-32 mt-3 mx-auto grid grid-cols-3 gap-1 px-2">
            {photos.slice(0, 3).map((photo, index) => (
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
                        src={photo?.formats?.large?.url ? `${base}${photo.formats.large.url}` : '/maint.jpg'}
                        alt={photo.altText || `Photo ${index + 1}`}
                        className="w-full rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <button
                            className="text-white text-3xl font-bold"
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
                currentPhotoIndex={currentPhotoIndex}
                totalPhotos={photos.slice(0, 3).length} // Sadece ilk 3 fotoğraf için sınırlandır
            >
                {currentPhotoIndex !== null && photos[currentPhotoIndex]?.formats?.large?.url && (
                    <Image
                        src={`${base}${photos[currentPhotoIndex].formats.large.url}`}
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

export default ThreePhoto;
