'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface WhatsappTrackerProps {
    linkId: string;
    href: string;
    children: React.ReactNode;
}

const WhatsappTracker: React.FC<WhatsappTrackerProps> = ({ linkId, href, children }) => {
    const handleClick = async () => {
        try {
            const currentDate = new Date();
            const day = String(currentDate.getDate()).padStart(2, '0');
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const year = currentDate.getFullYear();
            const formattedDate = `${year}-${month}-${day}`;

            const response = await fetch(`https://api.avrupagozestetikinfo.com/api/click-trackers?filters[linkin_yeri]=${linkId}&filters[tarih]=${formattedDate}`);
            const data = await response.json();

            if (data.data.length > 0) {
                const trackerId = data.data[0].documentId;
                const currentCount = parseInt(data.data[0].tiklanma_sayisi, 10);

                await fetch(`https://api.avrupagozestetikinfo.com/api/click-trackers/${trackerId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                    },
                    body: JSON.stringify({
                        data: {
                            tiklanma_sayisi: currentCount + 1
                        }
                    }),
                });
            } else {
                await fetch(`https://api.avrupagozestetikinfo.com/api/click-trackers`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
                    },
                    body: JSON.stringify({
                        data: {
                            linkin_yeri: linkId,
                            tarih: formattedDate,
                            tiklanma_sayisi: 1
                        }
                    }),
                });
            }
        } catch (error) {
            console.error('Tıklama sayısı kaydedilirken hata oluştu:', error);
        }
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Link>
    );
};

export default WhatsappTracker;
