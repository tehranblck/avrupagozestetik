'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AlertCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;

    if (element) {
      gsap.fromTo(
        element,
        { x: '-100%', opacity: 0 },
        {
          x: '0%',
          opacity: 1,
          duration: 0.7,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%', // Başlama noktası
            end: 'bottom 60%', // Bitiş noktası
            toggleActions: 'play none none none', // Bir kez tetikler
          },
        }
      );
    }
  }, []);

  return (
    <div className="px-1 sm:px-32 ">
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
