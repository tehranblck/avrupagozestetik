import Button from '@/components/BackButton/BackButton'
import CategoriesText from '@/components/Categories/CtegoriesText'
import Header from '@/components/Header/Header'
import WhatsAppButton from '@/components/WhatsappButton/WhatsappButton'
import React from 'react'
import ContactInfo from './Contactİnfo'
import PhoneForm from '@/components/fform/Form'

const page = () => {
    return (
        <div >
            <div style={{ zIndex: '9999' }} className="bg-white rounded-lg pb-2 min-h-fit  w-full">
                <Header isHomePage={false} />
                <div style={{ top: '6.4rem' }} className=' fixed top-28 rounded-lg  z-50 w-full' >
                    <Button />
                </div>
            </div>

            <div className='max-w-7xl mx-auto mt-32 '>
                <div className="div text-left sm:text-center">
                    <CategoriesText paragraphAlign='text-left' paragraph='Hızlıca bize ulaşmak için WhatsApp butonuna tıklayarak bize yazabilirsiniz.' />
                    <WhatsAppButton />
                </div>
            </div>
            <ContactInfo />
            <PhoneForm />
        </div>
    )
}

export default page