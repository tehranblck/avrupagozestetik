import Button from '@/components/BackButton/BackButton'
import CategoriesText from '@/components/Categories/CtegoriesText'
import Header from '@/components/Header/Header'
import WhatsAppButton from '@/components/WhatsappButton/WhatsappButton'
import React from 'react'
import ContactInfo from './Contactİnfo'
import PhoneForm from '@/components/fform/Form'

const page = () => {
    return (
        <div>

            <Header />
            <div className='max-w-7xl mx-auto '>
                <Button />
                <div className="div text-center">
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