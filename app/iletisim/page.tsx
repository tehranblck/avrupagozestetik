import Button from '@/components/BackButton/BackButton'
import CategoriesText from '@/components/Categories/CtegoriesText'
import Header from '@/components/Header/Header'
import WhatsAppButton from '@/components/WhatsappButton/WhatsappButton'
import React from 'react'
import ContactInfo from './Contactİnfo'
import PhoneForm from '@/components/fform/Form'
import WhatsappTracker from '@/components/WhatsappTracker'

const page = () => {
    return (
        <div >
            <div className=' fixed top-8 rounded-lg  z-50 w-full' >
                <Button />
            </div>

            <div className='container mx-auto mt-16 '>
                <div className="div text-left sm:text-center">
                    <CategoriesText paragraphAlign='text-left' paragraph='Hızlıca bize ulaşmak için WhatsApp butonuna tıklayarak bize yazabilirsiniz.' />
                    <WhatsappTracker href='https://wa.me/905327044102' linkId='Whatsapp Iletisim sayfasi'>
                        <WhatsAppButton />
                    </WhatsappTracker>
                </div>
            </div>
            <ContactInfo />
            <PhoneForm />
        </div>
    )
}

export default page