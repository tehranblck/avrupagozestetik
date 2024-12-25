'use client';
import React from 'react';
import Image from 'next/image';

interface Comment {
    imageUrl: string;
    name: string;
    comment: string;
}

interface CommentCardProps {
    comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
    return (
        <div className="flex flex-row items-center p-6 bg-white shadow-xl rounded-2xl max-w-sm hover:shadow-2xl transition-shadow duration-300">
            {/* User Image */}
            <div className="w-36 relative object-cover overflow-hidden">
                <Image
                    src={comment.imageUrl}
                    alt={comment.name}
                    width={100}
                    height={100}
                    className="object-cover rounded-full"
                />
            </div>
            {/* Content */}
            <div className="ml-4 px-2">
                <h4 className="text-lg font-bold text-gray-800">{comment.name}</h4>
                <p className="mt-2 text-gray-600 italic">{`"${comment.comment}"`}</p>
            </div>
        </div>
    );
};

export default CommentCard;
