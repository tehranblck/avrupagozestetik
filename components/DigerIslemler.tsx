
import Link from 'next/link';
import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const specialButton = { id: 5, title: 'Diğer estetik uygulamalarımız', href: '/diger-islemler' };

const DigerIslemler = () => {
    return (
        <div className="mt-4 w-full flex relative top-36  justify-center">
            <Link
                href={specialButton.href}
                className=" py-3 border-gray-300 bg-[#1877F2] text-white  px-10 flex items-center gap-3  font-normal rounded-lg shadow-lg border transition-all duration-300"
            >
                {specialButton.title} <MdKeyboardDoubleArrowRight className='mt-1' />
            </Link>
        </div>
    )
}

export default DigerIslemler