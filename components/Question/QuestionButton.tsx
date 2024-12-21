'use client';
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AlertCard = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  return (
    <div className="px-1 sm:px-32 ">
      <motion.div
        ref={cardRef}
        className="relative mt-2 w-full p-4 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-200 hover:-translate-y-1"
        initial={{ x: 0, opacity: 1 }} // Başlangıç durumu
        animate={isInView ? { x: 0, opacity: 1 } : {}} // Görünür olduğunda animasyon
        transition={{ duration: 0.5, ease: 'linear' }} // Doğrusal geçiş
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
      </motion.div>
    </div>
  );
};

export default AlertCard;
