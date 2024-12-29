'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import PopupPhoto from './PopupPhoto';

interface Photo {
    formats?: {
        large?: {
            url: string;
        };
    };
    url?: string;
    documentId?: string;
    createdAt?: string;
}

interface SixPhotoProps {
    photos: Photo[];
}

const SixPhoto: React.FC<SixPhotoProps> = ({ photos }) => {
    const base = 'https://api.avrupagozestetikinfo.com';
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null);

    const handleThumbnailClick = (index: number) => {
        setCurrentPhotoIndex(index);
    };

    const handleClosePopup = () => {
        setCurrentPhotoIndex(null);
    };

    const handleNextPhoto = () => {
        if (currentPhotoIndex !== null && currentPhotoIndex < photos.length - 1) {
            setCurrentPhotoIndex((prev) => (prev !== null ? prev + 1 : null));
        }
    };

    const handlePreviousPhoto = () => {
        if (currentPhotoIndex !== null && currentPhotoIndex > 0) {
            setCurrentPhotoIndex((prev) => (prev !== null ? prev - 1 : null));
        }
    };

    return (
        <div className="w-[100%] sm:px-32 mt-5 mx-auto grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-1 px-2">
            {photos.map((photo, index) => (
                <div
                    key={photo?.createdAt || `${photo?.url || ''}-${index}`}
                    className="relative w-full cursor-pointer"
                    onClick={() => handleThumbnailClick(index)}
                >
                    <Image
                        priority
                        width={900}
                        height={900}
                        src={base + (photo?.formats?.large?.url || photo?.url || '')}
                        alt={photo?.documentId || `Photo ${index + 1}`}
                        className="w-full rounded-lg object-cover h-full shadow-lg"
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

            <PopupPhoto
                isOpen={currentPhotoIndex !== null}
                onClose={handleClosePopup}
                onNext={
                    photos.length > 1 && currentPhotoIndex !== null && currentPhotoIndex < photos.length - 1
                        ? handleNextPhoto
                        : undefined
                }
                onPrev={
                    photos.length > 1 && currentPhotoIndex !== null && currentPhotoIndex > 0
                        ? handlePreviousPhoto
                        : undefined
                }
                currentPhotoIndex={currentPhotoIndex}
                totalPhotos={photos.length}
            >
                {currentPhotoIndex !== null && (
                    <Image
                        src={
                            photos[currentPhotoIndex]?.formats?.large?.url
                                ? base + photos[currentPhotoIndex]?.formats.large.url
                                : base + (photos[currentPhotoIndex]?.url || '')
                        }
                        alt={photos[currentPhotoIndex]?.documentId || 'Current Photo'}
                        width={900}
                        height={900}
                        className="rounded-lg object-cover shadow-lg"
                    />
                )}
            </PopupPhoto>
        </div>
    );
};

export default SixPhoto;
