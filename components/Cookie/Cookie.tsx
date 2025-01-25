'use client'
import { useEffect, useState } from 'react';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    // Cookienin ayarlanıp ayarlanmadığını kontrol et
    useEffect(() => {
        const cookieConsent = localStorage.getItem('cookieConsent');
        if (!cookieConsent) {
            setIsVisible(true); // Eğer cookie kabul edilmemişse bannerı göster
            document.body.style.overflow = 'hidden'; // Scroll'u engelle
        } else {
            document.body.style.overflow = ''; // Scroll'u aktif tut
        }

        // Cleanup when component is unmounted or isVisible changes
        return () => {
            document.body.style.overflow = ''; // Scroll'u geri al
        };
    }, [isVisible]);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true'); // Cookie'yi kabul et
        setIsVisible(false); // Banner'ı gizle
        document.body.style.overflow = ''; // Scroll'u geri al
    };

    return (
        <>
            {isVisible && (
                <>
                    {/* Arka plan bulanıklığı */}
                    <div style={{ zIndex: '10' }} className="fixed inset-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-md "></div>

                    {/* Cookie banner popup'ı */}
                    <div style={{ zIndex: '999999999999999' }} className="fixed inset-0 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
                            <h2 className="text-xl font-semibold text-center mb-4">
                                Dikkat: Sitemizde yer alan hasta fotoğrafları ve içeriklerin izinsiz kopyalanması, paylaşılması veya kullanılması kesinlikle yasaktır.
                                Avrupa Göz Estetik olarak, bu tür durumlarda yasal haklarımızı kullanma hakkını saklı tutarız.
                            </h2>
                            <div className="flex justify-center space-x-4">
                                <button
                                    onClick={handleAccept}
                                    className="bg-green-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-green-500 transition"
                                >
                                    Kabul Et
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CookieBanner;
