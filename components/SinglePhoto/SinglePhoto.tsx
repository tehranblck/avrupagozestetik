'use client'
import Image from 'next/image';
import React from 'react';

const SinglePhoto = ({ image }: any) => {
    const base = 'https://api.avrupagozestetikinfo.com';
    const photoSrc = image?.fotos?.[0]?.foto?.url
        ? base + image.fotos[0].foto.url
        : '/default.svg'; // Default image olarak yerel bir resim kullanabilirsiniz.

    return (
        <div className={`w-full px-2 sm:px-32 overflow-hidden ${image || ''}`}>
            <Image
                width={500}
                height={500}
                src={photoSrc}
                alt={image?.fotos?.[0]?.hakkinda || 'Image'}
                className="w-full rounded-lg h-auto object-cover"
            />
        </div>
    );
};

export default SinglePhoto;
