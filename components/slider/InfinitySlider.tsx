import Image from "next/image";
import React from "react";

const InfinitySlider = ({ items }: { items: any[] }) => {
    const base = 'https://api.avrupagozestetikinfo.com';
    const Slides = [
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
        '/default.svg',
    ]

    const Items = items?.length > 0 ? items : Slides

    return (
        <div className="overflow-hidden w-full my-3 pt-4 pb-1">
            {/* Row 1 - Slides Right */}
            <div className="flex space-x-4 animate-slideRight">
                {Items?.map((item: any, index: number) => (
                    <div
                        key={index}
                        className="flex-none w-20 h-20 text-white flex items-center justify-center rounded-md shadow"
                    >
                        <Image
                            alt={`slider-${index}`}
                            src={typeof item === 'string' ? item : (item?.url ? base + item.url : '/default.svg')}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfinitySlider;
