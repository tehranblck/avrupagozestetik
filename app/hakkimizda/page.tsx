import Button from '@/components/BackButton/BackButton'
import CategoriesText from '@/components/Categories/CtegoriesText'
import Header from '@/components/Header/Header'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div>
            <div style={{ zIndex: '9999999' }} className="bg-white rounded-lg min-h-fit  w-full">
                <Header isHomePage={false} />
                <div style={{ top: '5.5rem' }} className=' fixed  top-28 rounded-lg  z-20 w-full' >
                    <Button />
                </div>


            </div>
            <div className="bg">
                <CategoriesText text1='Avrupa' text1Classes='text-5xl mt-44' text2='Göz & Estetik' />
                <div className="images relative flex gap-0 my-6 justify-center">
                    <Image className='clip relative -right-10' src={'/maint.jpg'} alt="maint" width={200} height={200} />
                    <Image className='clip relative -left-10 rotate-[180deg]' src={'/maint.jpg'} alt="maint" width={200} height={200} />
                </div>
                <div className="text px-3">
                    <p className='text-center'>Avrupa Göz Estetik olarak burun estetiği, tam yüz germe, alın germe, orta yüz germe ve medikal estetik işlemleri gibi birçok alanda uzun yıllara dayanan tecrübemizle hizmetinizdeyiz. Uzman doktor kadromuz ve son teknolojiyle donatılmış merkezimizde, sizlerin en iyi sonuçlara ulaşmasını sağlamak için çalışıyoruz.

                        Kurulduğumuz ilk günden itibaren, bütçe dostu ve üst düzey kalite anlayışımızı ilke edindik. Bu çizgimizi koruyarak, danışanlarımıza en iyi deneyimi sunmayı hedefliyoruz. Binlerce mutlu danışanımızın hayallerine kavuşma sürecine eşlik etmek, bizim için büyük bir gurur kaynağı.

                        Güzelliğinizi beraber taçlandıralım, gençliğinizi yenileyelim.
                        Unutmayın, sizin mutluluğunuz, bizim sevincimizdir!</p>
                </div>
            </div>
        </div>
    )
}

export default page