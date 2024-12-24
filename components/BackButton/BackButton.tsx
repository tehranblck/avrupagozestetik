import Link from 'next/link';
import React from 'react';
import { IoMdArrowBack } from "react-icons/io";

const Button = () => {
    return (
        <div className="relative mb-6 ml-2">
            <Link href={'/'} className="text-white inline-flex items-center gap-2 bg-gradient-to-r from-blue-800 to-cyan-400 rounded-full px-2 py-1 text-lg font-semibold transition-all duration-300 bg-[length:100%_auto] hover:bg-[length:200%_auto]">
                <IoMdArrowBack /> Geri dön
            </Link>
        </div>
    );
};

export default Button;
