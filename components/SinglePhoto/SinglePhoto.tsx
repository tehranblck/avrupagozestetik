'use client'
import Image from 'next/image';
import React from 'react';

interface ResponsiveImageProps {
    imageUrl: string; // Fotoğraf URL'si
    altText?: string; // Erişilebilirlik için alternatif metin
    className?: string; // Ek CSS sınıfları (opsiyonel)
}

const SinglePhoto: React.FC<ResponsiveImageProps> = ({ imageUrl, altText, className }) => {
    return (
        <div className={`w-full mt-12 px-4  overflow-hidden ${className || ''}`}>
            <Image width={500} height={500}
                src={imageUrl}
                alt={altText || 'Image'}
                className="w-full rounded-lg h-auto object-cover"
            />
        </div>
    );
};

export default SinglePhoto;
