import Button from '@/components/BackButton/BackButton'
import CategoriesText from '@/components/Categories/CtegoriesText'
import ThreePhoto from '@/components/DoublePhoto/DoublePhoto'
import DoubleVideo from '@/components/DoubleVideo/DoubleVideo'
import Header from '@/components/Header/Header'
import { fetchFotosHomepage } from '@/components/helpers/FetchHomeFotos'
import { fetchVideoDatas } from '@/components/helpers/FetchHomeVideos'
import SingleVideo from '@/components/SingleVideo/SingleVideo'
import SixPhoto from '@/components/SixPhoto/SixPhoto'
import TripleVideo from '@/components/TripleVideos/TripleVideos'
import React from 'react'

const Page = async () => {
    const data = await fetchVideoDatas()
    const firstTripleVideo = data.find((video: any) => video.name === 'İkili Video DİGER-İSLEMLER');
    const SingleVideoo = data.find((video: any) => video.name === 'Tekli Video DİGER-İSLEMLER');

    const { ikinciÜçlüDigerİslemler, ilkÜçlüDigerİslemler, ilkAltılıDigerİslemler, ikinciAltılıDigerİslemler } = await fetchFotosHomepage()




    return (
        <div>
            <div style={{ zIndex: '9999999' }} className="bg-white rounded-lg min-h-fit  w-full">
                <Header isHomePage={false} />
                <div style={{ top: '5.5rem' }} className=' fixed  top-28 rounded-lg  z-20 w-full' >
                    <Button />
                </div>


            </div>
            <div className="bg flex flex-col gap-2">
                <CategoriesText text1Classes='text-sm mt-40' text1='Bu sayfamızda burun estetiği, yüz germe ve medikal estetik gibi çeşitli uygulamalarımızın öncesi ve sonrası değişimlerinden bazılarını inceleyebilirsiniz.' />
                <div className="mt-5">
                    <ThreePhoto photos={ilkÜçlüDigerİslemler} />
                </div>
                <DoubleVideo videos={firstTripleVideo} />
                <ThreePhoto photos={ikinciÜçlüDigerİslemler} />
                <SingleVideo videos={SingleVideoo} />
                <SixPhoto photos={ilkAltılıDigerİslemler} />
                <SixPhoto photos={ikinciAltılıDigerİslemler} />
            </div>

        </div>
    )
}

export default Page