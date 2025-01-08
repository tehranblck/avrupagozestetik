'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import PopupPhoto from './PopupPhoto';

const SixPhoto = ({ photos }: any) => {
    const base = 'https://api.avrupagozestetikinfo.com';
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number | null>(null);

    const handleThumbnailClick = (index: number) => {
        setCurrentPhotoIndex(index);
    };

    const handleClosePopup = () => {
        setCurrentPhotoIndex(null);
    };

    const handleNextPhoto = () => {
        if (currentPhotoIndex !== null && currentPhotoIndex < photosToShow.length - 1) {
            setCurrentPhotoIndex((prev) => (prev !== null ? prev + 1 : null));
        }
    };

    const handlePreviousPhoto = () => {
        if (currentPhotoIndex !== null && currentPhotoIndex > 0) {
            setCurrentPhotoIndex((prev) => (prev !== null ? prev - 1 : null));
        }
    };

    const getPhotoUrl = (photo: any) => {
        if (!photo?.foto?.url) {
            return '/default.svg'; // Varsayılan resim
        }
        return `${base}${photo.foto.url}`;
    };

    // Fotoğraf listesini 6 elemana tamamla
    const safePhotos = photos?.fotos && Array.isArray(photos.fotos) ? photos.fotos : [];
    const photosToShow = safePhotos.length >= 6
        ? safePhotos
        : [...safePhotos, ...Array(6 - safePhotos.length).fill({})];

    return (
        <div className="w-[100%] px-2 sm:px-16   mx-auto grid grid-cols-3 gap-1">
            {photosToShow.map((photo: any, index: number) => (
                <div
                    key={`${photo?.id || photo?.documentId || index}`}
                    className="relative w-full cursor-pointer aspect-square sm:aspect-[4/3]"
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
                    <div className="absolute inset-0 flex items-center justify-center  rounded-lg">

                    </div>
                </div>
            ))}

            <PopupPhoto
                isOpen={currentPhotoIndex !== null}
                onClose={handleClosePopup}
                onNext={
                    photosToShow.length > 1 &&
                        currentPhotoIndex !== null &&
                        currentPhotoIndex < photosToShow.length - 1
                        ? handleNextPhoto
                        : undefined
                }
                onPrev={
                    photosToShow.length > 1 &&
                        currentPhotoIndex !== null &&
                        currentPhotoIndex > 0
                        ? handlePreviousPhoto
                        : undefined
                }
                currentPhotoIndex={currentPhotoIndex}
                totalPhotos={photosToShow.length}
            >
                {currentPhotoIndex !== null && photosToShow[currentPhotoIndex] && (
                    <Image
                        src={getPhotoUrl(photosToShow[currentPhotoIndex])}
                        alt={photosToShow[currentPhotoIndex]?.hakkinda || 'Current Photo'}
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
