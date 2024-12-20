'use client';
import { FaArrowRight } from "react-icons/fa";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const t = useTranslations('Home');
  const router = useRouter();

  const languages = [
    { locale: 'tr', label: t('turkish'), flag: '/tr_flag.png' },
    { locale: 'en', label: t('english'), flag: '/en_flag.png' },
  ];

  return (
    <div className="flex flex-col items-center  min-h-screen pb-6  text-white px-4 bg-gray-900">
      {/* Logo */}
      <div >
        <Image
          src={'/logo.svg'}
          width={200}
          height={200}
          className="rounded-lg"
          alt="logo"
        />
      </div>

      {/* Language Selection */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl py-0 px-4">
        {languages.map(({ locale, label, flag }) => (
          <li key={locale}>
            <button
              onClick={() => router.push(`/${locale}/home`)}
              className="flex flex-col items-center gap-2 px-4 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-50 transition transform hover:-translate-y-1 hover:scale-105 focus:ring-2 focus:ring-blue-400 w-full focus:ring-offset-2"
            >
              <div className="w-full aspect-[4/2] flex items-center justify-center overflow-hidden rounded-md border-2 border-blue-600">
                <Image
                  src={flag}
                  width={500}
                  height={375}
                  quality={100}
                  alt={`${label} flag`}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-lg mt-2">{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
