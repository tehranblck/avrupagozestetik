'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import PopupPhoto from '../SixPhoto/PopupPhoto';

const NinePhoto = ({ photos }: any) => {
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

    // Fotoğraf listesini 9 elemana tamamla
    const safePhotos = photos && Array.isArray(photos) ? photos : [];
    const photosToShow = safePhotos.length >= 9
        ? safePhotos
        : [...safePhotos, ...Array(9 - safePhotos.length).fill({})];

    const getPhotoUrl = (photo: any) => {
        return photo?.formats?.large?.url ||
            photo?.formats?.medium?.url ||
            photo?.formats?.small?.url ||
            photo?.url
            ? `${base}${photo.url}`
            : '/default.svg'; // Varsayılan resim
    };

    return (
        <div className="w-[100%] px-2 sm:px-4 md:px-12 mt-2 mx-auto grid grid-cols-3 gap-1">
            {photosToShow.map((photo: any, index: number) => {
                const imageUrl = getPhotoUrl(photo);
                return (
                    <div
                        key={photo?.createdAt || `photo-${index}`}
                        className="relative w-full cursor-pointer aspect-square sm:aspect-[4/3]"
                        onClick={() => handleThumbnailClick(index)}
                    >
                        <Image
                            priority
                            width={900}
                            height={900}
                            src={imageUrl}
                            alt={photo?.createdAt || `Photo ${index + 1}`}
                            className="w-full rounded-lg object-cover h-full shadow-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">

                        </div>
                    </div>
                );
            })}

            {/* Popup */}
            <PopupPhoto
                isOpen={currentPhotoIndex !== null}
                onClose={handleClosePopup}
                onNext={handleNextPhoto}
                onPrev={handlePreviousPhoto}
                currentPhotoIndex={currentPhotoIndex}
                totalPhotos={photosToShow.length} // Tüm fotoğraflar için sınırlandırma
            >
                {currentPhotoIndex !== null && (
                    <Image
                        src={getPhotoUrl(photosToShow[currentPhotoIndex])}
                        alt={photosToShow[currentPhotoIndex]?.altText || 'Current Photo'}
                        width={900}
                        height={900}
                        className="rounded-lg object-cover shadow-lg"
                    />
                )}
            </PopupPhoto>
        </div>
    );
};

export default NinePhoto;
