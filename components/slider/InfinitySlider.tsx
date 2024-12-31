import Image from "next/image";
import React from "react";

const InfinitySlider = ({ items }: { items: any[] }) => {
    const base = 'https://api.avrupagozestetikinfo.com';  // URL'yi doğru yaptım
    console.log(items);

    return (
        <div className="overflow-hidden w-full my-3 pt-4 pb-1">
            {/* Row 1 - Slides Right */}
            <div className="flex space-x-4 animate-slideRight">
                {items.map((item, index) => (
                    <div
                        key={item?.documentId || index} // Eğer documentId yoksa, index'i fallback olarak kullanıyoruz
                        className="flex-none w-20 h-20 text-white flex items-center justify-center rounded-md shadow"
                    >
                        <Image
                            alt={`slider-${index}`}
                            src={item?.formats?.medium?.url ? base + item.formats.medium.url : ''}  // Eğer URL varsa, yoksa boş string dönecek
                            width={100}
                            height={100}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>

            {/* Row 2 - Slides Left (Bu satır şu anda yorumlandı, ancak açılabilir) */}
            {/* <div className="flex space-x-4 animate-slideLeft mt-3">
                {items.map((item, index) => (
                    <div
                        key={`row2-${index}`}
                        className="flex-none w-12 h-12 text-white flex items-center justify-center rounded-md shadow"
                    >
                        <Image
                            alt={`slider-${index}`}
                            src={item?.url ? base + item.url : ''}  // item içinde url varsa kullanıyoruz
                            width={100}
                            height={100}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default InfinitySlider;
