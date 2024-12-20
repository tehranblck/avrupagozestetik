'use client';
import Image from 'next/image';

export default function CategoriesSectionHeader() {
    const services = [
        { title: "Göz çevresi estetiği", imgSrc: "/slider/gozcevresi.jpg" },
        { title: "Burun estetiği", imgSrc: "/slider/slider1.png" },
        { title: "Yüz estetiği", imgSrc: "/slider/slider2.png" },
        { title: "Medikal estetik", imgSrc: "/slider/medical.jpg" },
    ];

    return (
        <div className="flex flex-col items-center w-full py-8 pb-3 mt-36  bg-white">
            {/* Hizmetler */}
            <div className="grid grid-cols-4 md:grid-cols-4 gap-1 sm:gap-4 w-full  px-1 sm:px-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-red-600 text-white p-1 rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        <div className="w-full  flex items-center justify-center overflow-hidden rounded-md bg-white">
                            <Image
                                src={service.imgSrc}
                                alt={service.title}
                                width={200}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <span className="text-center text-xs font-semibold mt-2">
                            {service.title}
                        </span>
                    </div>
                ))}
            </div>

            {/* Başlık */}

        </div >
    );
}
