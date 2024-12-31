'use client';
import React from 'react';
import Image from 'next/image';

const CommentCard = ({ comment }: any) => {
    const imagePath = comment?.Avatar?.formats?.thumbnail?.url;
    const base = 'https://api.avrupagozestetikinfo.com';

    return (
        <div className="flex flex-row w-full items-center justify-center  p-6 bg-white shadow-xl rounded-2xl hover:shadow-2xl transition-shadow duration-300">
            {/* User Image */}
            <div className="  relative rounded-full  ">
                <Image
                    src={imagePath ? base + imagePath : '/default-avatar.jpg'}
                    alt={comment?.name || 'User Avatar'}
                    width={100}  // Sabit genişlik
                    height={100} // Sabit yükseklik
                    className="object-cover rounded-full"
                />
            </div>
            {/* Content */}
            <div className="ml-4 px-2 flex flex-col justify-start">
                <h4 className="text-lg font-bold text-gray-800">{comment.ad}</h4>
                <p className="mt-2 text-gray-600 italic max-w-xs">
                    {comment.Yorum}
                </p>
            </div>
        </div>
    );
};

export default CommentCard;
