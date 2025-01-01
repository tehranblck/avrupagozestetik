'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import PopupPhoto from '../SixPhoto/PopupPhoto';

const ThreePhoto = ({ photos }: any) => {
    const base = 'https://api.avrupagozestetikinfo.com';
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null);

    const handleThumbnailClick = (index: number) => {
        setCurrentPhotoIndex(index);
    };

    const handleClosePopup = () => {
        setCurrentPhotoIndex(null);
    };

    const handleNextPhoto = () => {
        if (currentPhotoIndex !== null && currentPhotoIndex < photos.fotos.length - 1) {
            setCurrentPhotoIndex(currentPhotoIndex + 1);
        }
    };

    const handlePreviousPhoto = () => {
        if (currentPhotoIndex !== null && currentPhotoIndex > 0) {
            setCurrentPhotoIndex(currentPhotoIndex - 1);
        }
    };

    const getPhotoUrl = (photo: any) => {
        if (!photo || !photo.foto || !photo.foto.formats) {
            return '/default-image.jpg';
        }
        if (photo.foto.formats.large?.url) {
            return `${base}${photo.foto.formats.large.url}`;
        } else if (photo.foto.formats.medium?.url) {
            return `${base}${photo.foto.formats.medium.url}`;
        } else if (photo.foto.formats.small?.url) {
            return `${base}${photo.foto.formats.small.url}`;
        } else if (photo.foto.formats.thumbnail?.url) {
            return `${base}${photo.foto.formats.thumbnail.url}`;
        }
        return '/default-image.jpg';
    };

    if (!photos || !photos.fotos || photos.fotos.length === 0) {
        return <div>Fotoğraflar yüklenemedi.</div>;
    }

    return (
        <div className="w-full sm:px-32 mt-3 mx-auto grid grid-cols-3 gap-1 px-2">
            {photos.fotos.map((photo: any, index: number) => (
                <div
                    key={photo.id || `photo-${index}`}
                    className="relative w-full cursor-pointer"
                    onClick={() => handleThumbnailClick(index)}
                >
                    <Image
                        priority
                        width={900}
                        height={900}
                        src={getPhotoUrl(photo)}
                        alt={photo?.hakkinda || `Photo ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                        <button className="text-white text-3xl font-bold" aria-label="View Photo">
                            🔍
                        </button>
                    </div>
                </div>
            ))}

            <PopupPhoto
                isOpen={currentPhotoIndex !== null}
                onClose={handleClosePopup}
                onNext={handleNextPhoto}
                onPrev={handlePreviousPhoto}
                currentPhotoIndex={currentPhotoIndex || 0}
                totalPhotos={photos.fotos.length}
            >
                {currentPhotoIndex !== null && (
                    <Image
                        src={getPhotoUrl(photos.fotos[currentPhotoIndex])}
                        alt={photos.fotos[currentPhotoIndex]?.hakkinda || 'Current Photo'}
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
