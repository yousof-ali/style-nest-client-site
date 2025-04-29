import React from 'react';
import { IoPerson } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";

const BlogCard = ({ data }) => {
    const { title, details, date, postOwner, img } = data;

    return (
        <div className="rounded-md overflow-hidden cursor-pointer shadow-md bg-white group">
            {/* Image with scale on hover */}
            <div className="overflow-hidden">
                <img
                    src={img}
                    alt="Blog"
                    className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Static Text Content */}
            <div className="p-4 ">
                <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                <p className="text-gray-600 text-sm mt-2">{details?.slice(0, 100)}...</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                    <p className="flex items-center gap-1"><IoPerson /> {postOwner}</p>
                    <p className="flex items-center gap-1"><MdOutlineDateRange /> {date}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
