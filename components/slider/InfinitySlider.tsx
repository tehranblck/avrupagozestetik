import Image from "next/image";
import React from "react";

const InfinitySlider = () => {
    const items = [
        "/slider/slider1.png",
        "/slider/slider2.png",
        "/slider/slider3.png",
        "/slider/slider4.png",
        "/slider/slider5.png",
        "/slider/slider6.png",
        "/slider/slider7.png",
        "/slider/slider8.png",
        "/slider/slider9.png",
        "/slider/slider10.png",
        "/slider/slider1.png",
        "/slider/slider2.png",
        "/slider/slider3.png",
        "/slider/slider4.png",
        "/slider/slider5.png",
        "/slider/slider6.png",
        "/slider/slider7.png",
        "/slider/slider8.png",
        "/slider/slider9.png",
        "/slider/slider10.png",
    ];

    return (
        <div className="overflow-hidden w-full bg-gray-100 pt-8 pb-1">
            {/* Row 1 - Slides Right */}
            <div className="flex space-x-4 animate-slideRight">
                {items.map((item, index) => (
                    <div
                        key={`row1-${index}`}
                        className="flex-none w-40 h-40  text-white flex items-center justify-center rounded-md shadow"
                    >
                        <Image
                            alt={`slider-${index}`}
                            src={item}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`row1-dup-${index}`}
                        className="flex-none w-40 h-40 bg-blue-500 text-white flex items-center justify-center rounded-md shadow"
                    >
                        <Image
                            alt={`slider-dup-${index}`}
                            src={item}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>

            {/* Row 2 - Slides Left */}
            <div className="flex space-x-4 animate-slideLeft mt-3">
                {items.map((item, index) => (
                    <div
                        key={`row2-${index}`}
                        className="flex-none w-40 h-40 bg-green-500 text-white flex items-center justify-center rounded-md shadow"
                    >
                        <Image
                            alt={`slider-${index}`}
                            src={item}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`row2-dup-${index}`}
                        className="flex-none w-40 h-40 bg-green-500 text-white flex items-center justify-center rounded-md shadow"
                    >
                        <Image
                            alt={`slider-dup-${index}`}
                            src={item}
                            width={200}
                            height={200}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfinitySlider;
