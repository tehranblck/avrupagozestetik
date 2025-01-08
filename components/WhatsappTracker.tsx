'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface WhatsappTrackerProps {
    linkId: string;
    href: string;
    children: React.ReactNode;
}

const WhatsappTracker: React.FC<WhatsappTrackerProps> = ({ linkId, href, children }) => {
    const token = 'f970a4df600e35c76e94cebc4cdbe2d141637ce7b402bf3c0b829e5f7fc7ee5bbf868bf3e49c910bfcaa9507009264e65e228409d09297d9507742681bfe0cd48710ff182337f2e844e2cad1263ce91193e0727e3ede76a64d67cadf51e19b681fb041c1de1e3742292b1ea0fd4999b35bf7c57f14aaa0866c84322610e30edd'
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
                        'Authorization': `Bearer ${token}`,
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
                        'Authorization': `Bearer ${token}`,
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
