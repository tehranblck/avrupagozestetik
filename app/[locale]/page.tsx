'use client';
import { FaArrowRight } from "react-icons/fa";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const t = useTranslations('Home');
  const router = useRouter();

  const languages = [
    { locale: 'tr', label: t('turkish'), flag: 'Tr' },
    { locale: 'en', label: t('english'), flag: 'En' },
    { locale: 'ar', label: t('arabic'), flag: 'Ar' },
    { locale: 'ru', label: t('russian'), flag: 'Ru' },
    { locale: 'de', label: t('german'), flag: 'De' },
  ];

  return (
    <div
      style={{ backgroundImage: 'url(/bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      className="flex relative flex-col items-center justify-center h-screen text-white px-4"
    >
      {/* Blurred Background Layer */}
      <div
        style={{ backdropFilter: 'blur(10px) brightness(0.7)' }}
        className="absolute inset-0 z-0 bg-black bg-opacity-50 pointer-events-none"
      ></div>

      {/* Logo - Ensure it is above the blurred layer */}
      <div className="relative z-20 mb-8">
        <Image
          src={'/logo.png'}
          width={200}
          height={200}
          className="rounded-lg"
          alt="logo"
        />
      </div>

      {/* Language Selection Buttons */}
      <ul className="relative z-20 flex flex-col gap-4 w-full max-w-md">
        {languages.map(({ locale, label, flag }) => (
          <li key={locale}>
            <button
              onClick={() => router.push(`/${locale}/intro`)}
              className="group flex items-center gap-4 px-6 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition transform hover:-translate-y-1 hover:scale-105 focus:ring-2 focus:ring-blue-400 w-full focus:ring-offset-2"
            >
              <span className="text-2xl">{flag}</span>
              <span className="text-lg flex-grow">{label}</span>
              <FaArrowRight
                className="transform transition-transform group-hover:translate-x-2"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
