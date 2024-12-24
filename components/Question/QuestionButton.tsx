'use client';
import React, { useEffect, useRef } from 'react';

const AlertCard = ({ dest }: any) => {
  const cardRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const element = cardRef.current;

    if (element) {
      // IntersectionObserver oluştur
      const observer = new IntersectionObserver(
        ([entry]) => {
          console.log(entry.isIntersecting);
          if (entry.isIntersecting) {
            // Animasyon başlangıcı
            element.style.transition = 'transform 0.7s ease-out, opacity 0.7s ease-out';
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';

            // Observer'ı durdur
            observer.unobserve(element);
          }
        },
        {
          threshold: 0,
        }
      );

      // Başlangıç durumunu ayarla
      element.style.transform = `translateX(${dest})`;
      element.style.opacity = '0';

      // Observer'ı başlat
      observer.observe(element);

      return () => {
        observer.disconnect(); // Temizleme işlemi
      };
    }
  }, []);

  return (
    <div className="px-1 sm:px-32">
      <div
        ref={cardRef}
        className="relative mt-2 w-full p-4 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-1"
      >
        <div className="absolute inset-0 -z-10 filter blur-lg">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 z-50 w-full h-full"></div>
        </div>
        <div className="relative flex flex-col gap-2">
          <p className="text-lg font-bold text-white">Bunu biliyor muydun?</p>
          <p className="text-sm font-bold text-white">
            Göz kapağı estetiği sonrasında genç bir göz çevresine sahip olmak, tüm yüzün görünümünü olumlu yönde değiştirebilir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
