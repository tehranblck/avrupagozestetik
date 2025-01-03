'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import PopupPhoto from '../SixPhoto/PopupPhoto';

const ThreePhoto = ({ photos }: any) => {
    console.log(photos)
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
            setCurrentPhotoIndex(currentPhotoIndex + 1);
        }
    };

    const handlePreviousPhoto = () => {
        if (currentPhotoIndex !== null && currentPhotoIndex > 0) {
            setCurrentPhotoIndex(currentPhotoIndex - 1);
        }
    };

    const getPhotoUrl = (photo: any) => {
        if (!photo?.foto?.url) {
            return '/default.svg'; // Varsayılan resim
        }
        return `${base}${photo.foto.url}`;
    };

    // Güvenli fotoğraf listesi oluşturma
    const safePhotos = photos?.fotos && Array.isArray(photos.fotos) ? photos.fotos : [];
    const photosToShow = safePhotos.length >= 3
        ? safePhotos
        : [...safePhotos, ...Array(3 - safePhotos.length).fill({})];

    return (
        <div className="w-full px-2 sm:px-16  mx-auto grid grid-cols-3 gap-1">
            {photosToShow.map((photo: any, index: number) => (
                <div
                    key={photo.id || `photo-${index}`}
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

                </div>
            ))}

            <PopupPhoto
                isOpen={currentPhotoIndex !== null}
                onClose={handleClosePopup}
                onNext={handleNextPhoto}
                onPrev={handlePreviousPhoto}
                currentPhotoIndex={currentPhotoIndex || 0}
                totalPhotos={photosToShow.length}
            >
                {currentPhotoIndex !== null && (
                    <Image
                        src={getPhotoUrl(photosToShow[currentPhotoIndex])}
                        alt={photosToShow[currentPhotoIndex]?.hakkinda || 'Current Photo'}
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
