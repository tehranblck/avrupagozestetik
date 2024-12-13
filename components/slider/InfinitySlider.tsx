import React from "react";

const InfinitySlider = () => {
    const items = [
        "resim 1",
        "resim 2",
        "resim 3",
        "resim 4",
        "resim 5",
        "resim 6",
        "resim 7",
        "resim 8",
        "resim 8",
        "resim 8",
        "resim 8",
        "resim 8",
        "resim 8",
        "resim 8",
    ];

    return (
        <div className="overflow-hidden w-full bg-gray-100 py-8">
            {/* Row 1 - Sağa Doğru */}
            <div className="flex space-x-4 animate-slideRight">
                {items.map((item, index) => (
                    <div
                        key={`row1-${index}`}
                        className="flex-none w-40 h-20 bg-blue-500 text-white flex items-center justify-center rounded-md text-lg font-semibold shadow"
                    >
                        {item}
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`row1-dup-${index}`}
                        className="flex-none w-40 h-20 bg-blue-500 text-white flex items-center justify-center rounded-md text-lg font-semibold shadow"
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Row 2 - Sola Doğru */}
            <div className="flex space-x-4 animate-slideLeft mt-6">
                {items.map((item, index) => (
                    <div
                        key={`row2-${index}`}
                        className="flex-none w-40 h-20 bg-green-500 text-white flex items-center justify-center rounded-md text-lg font-semibold shadow"
                    >
                        {item}
                    </div>
                ))}
                {items.map((item, index) => (
                    <div
                        key={`row2-dup-${index}`}
                        className="flex-none w-40 h-20 bg-green-500 text-white flex items-center justify-center rounded-md text-lg font-semibold shadow"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfinitySlider;
