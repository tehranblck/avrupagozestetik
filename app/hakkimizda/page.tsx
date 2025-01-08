import Button from '@/components/BackButton/BackButton'
import CategoriesText from '@/components/Categories/CtegoriesText'
import Header from '@/components/Header/Header'
import Image from 'next/image'
import React from 'react'

const page = async () => {
    const base = 'https://api.avrupagozestetikinfo.com'
    const fetchHakkimizda = await fetch('https://api.avrupagozestetikinfo.com/api/hakkimizda?populate=*', {
        next: { revalidate: 10 },
    })
    const data = (await fetchHakkimizda.json()).data
    const { Hakkimizda_yazisi, foto_1, foto_2 } = data
    const foto1Src = base + foto_1?.url
    const foto2Src = base + foto_2?.url
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
                    <Image className='clip relative -right-10' src={foto1Src} alt="maint" width={200} height={200} />
                    <Image className='clip relative -left-10 rotate-[180deg]' src={foto2Src} alt="maint" width={200} height={200} />
                </div>
                <div className="text px-3">
                    <p className='text-center'>{Hakkimizda_yazisi}</p>
                </div>
            </div>
        </div>
    )
}

export default page
