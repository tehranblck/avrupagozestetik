import SixPhoto from '@/components/SixPhoto/SixPhoto';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import AltCategory from './AltCategory';

const BurunEstetigi: React.FC = () => {

    return (
        <div className="flex flex-col items-center bg-white text-center">
            {/* Image Section */}
            <div
                style={{ borderBottomRightRadius: '40px', borderBottomLeftRadius: '40px' }}
                className="relative top-0 w-full pb-8 bg-blue-700"
            >
                <div className="relative w-full top-0">
                    <Image
                        style={{ borderBottomRightRadius: '40px', borderBottomLeftRadius: '40px' }}
                        width={300}
                        height={600}
                        priority
                        quality={100}
                        src="/maint.jpg"
                        alt="Right Profile"
                        className="w-full h-52 object-cover"
                    />
                    <Link href={'/home'} className="absolute top-4 left-4 text-3xl text-pink-300 bg-pink-600 rounded-lg p-1">
                        <RiArrowGoBackFill />
                    </Link>
                </div>
                <h1 className="text-xl font-bold text-white text-center pl-6 mt-6">BURUN ESTETİĞİ</h1>
            </div>
            <AltCategory />
            <AltCategory />
            <AltCategory />


        </div>
    );
};

export default BurunEstetigi;
