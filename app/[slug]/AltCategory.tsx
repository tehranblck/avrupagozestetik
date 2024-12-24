import SixPhoto from '@/components/SixPhoto/SixPhoto'
import React from 'react'

const AltCategory = () => {
    const images = [
        { imageUrl: '/slider/slider1.png', altText: 'Slider 1', title: 'goz kapagi estetigi 1' },
        { imageUrl: '/slider/slider2.png', altText: 'Slider 2', title: 'goz kapagi estetigi 2' },
        { imageUrl: '/slider/slider3.png', altText: 'Slider 3', title: 'goz kapagi estetigi 3' },
    ]
    return (
        <div>
            <h1 className='text-4xl text-center text-white py-5 w-full bg-blue-500 my-5 rounded-xl'>Alt kategori adı</h1>
            <SixPhoto photos={images} />

            <p className="text-gray-700 mt-4 leading-relaxed">
                Burun estetiği, yüz hatlarınıza uyum sağlayarak hem estetik görünümünüzü
                iyileştirir hem de nefes alma sorunlarınıza çözüm sunar. Uzman
                doktorlarımızla doğal ve dengeli sonuçlar elde edebilirsiniz.
                Hayalinizdeki görünüme ulaşmak için ilk adımı birlikte atalım. Mutlu
                danışanlar arasında yer alın!
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center mt-6">
                <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-red-600">
                    Fiyat öğren veya soru sor
                </button>
            </div>
        </div>
    )
}

export default AltCategory