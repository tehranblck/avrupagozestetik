"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';

const GA_TRACKING_ID = 'G-T3SGJJV1D1'; // Kendi GA Tracking ID'nizi buraya ekleyin

export default function GoogleAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (window.gtag && pathname) {
            window.gtag('config', GA_TRACKING_ID, {
                page_path: pathname,
            });
        }
    }, [pathname]);

    return (
        <>
            {/* Google Analytics Script */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
            </Script>
        </>
    );
}





