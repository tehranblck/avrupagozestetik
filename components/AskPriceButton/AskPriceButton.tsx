
import Link from 'next/link';
import React from 'react'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';


const AskPriceButton = () => {
    return (
        <div className="mt-0 w-full flex relative   justify-center">
            <Link
                href={'/iletisim'}
                className="  border-gray-300 bg-[#1877F2] text-white  px-5 py-2 flex items-center gap-3  font-normal rounded-lg shadow-lg border transition-all duration-300"
            >
                Fiyat öğren veya soru sor <MdKeyboardDoubleArrowRight className='mt-1' />
            </Link>
        </div>
    )
}

export default AskPriceButton