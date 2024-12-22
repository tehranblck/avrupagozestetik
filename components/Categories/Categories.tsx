'use client';
import { Link } from '@/i18n/routing';
import Image from 'next/image';


export default function CategoriesSectionHeader() {
    const categories = [
        { title: "Göz çevresi estetiği", imgSrc: "/slider/gozcevresi.jpg", url: '/goz-cevresi-estetigi' },
        { title: "Burun estetiği", imgSrc: "/slider/slider1.png", url: '/burun-estetigi' },
        { title: "Yüz estetiği", imgSrc: "/slider/slider2.png", url: '/yuz-estetigi' },
        { title: "Medikal estetik", imgSrc: "/slider/medical.jpg", url: '/medikal-estetik' },
    ];

    return (
        <div className="flex flex-col sm:px-32 items-center w-full py-8 pb-3 mt-36 bg-white">
            {/* Hizmetler */}
            <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-4 lg:gap-6 w-full px-1 sm:px-6 lg:px-8">
                {categories.map((category, index) => (
                    <Link href={category.url}
                        key={index}
                        className="flex flex-col items-center bg-red-600 text-white p-1 rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        <div className="w-full flex items-center justify-center overflow-hidden rounded-md bg-white">
                            <Image
                                src={category.imgSrc}
                                alt={category.title}
                                width={200}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <span className="text-center text-xs lg:text-sm font-semibold mt-2">
                            {category.title}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
