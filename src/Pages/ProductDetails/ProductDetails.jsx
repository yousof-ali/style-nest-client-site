import React, { useState } from "react";

// react icons
import { IoHeart, IoHeartOutline, IoShareSocialOutline, IoStar } from "react-icons/io5";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// all data
// import {colors, images, sizes} from "./data.js";
import PageHero from '../../Components/PageHero';
import detailsHero from '../../assets/images/detailsHero.jpg'

const ProductDetails = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isFavorite, setIsFavorite] = useState(false)
    const [selectedSize, setSelectedSize] = useState("8")
    const [selectedColor, setSelectedColor] = useState("Royal Brown")
    const [isActive, setIsActive] = useState(1);

    const images = []

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const selectThumbnail = (index) => {
        setCurrentImageIndex(index)
    }
    return (
        <div className="relative">
            <PageHero img={detailsHero} title={"DETAILS"} subtitle={"T-SHIRT"}></PageHero>
            <div className=" md:p-8 lg:py-16 relative bottom-20  bg-white md:mx-8 lg:mx-42 mx-4 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto md:gap-12">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="flex">
                            <div className="flex items-center justify-center w-[90%] bg-gray-100 overflow-hidden rounded-md">
                                <img
                                    src={images[currentImageIndex]}
                                    alt={`Product view ${currentImageIndex + 1}`}
                                    className="w-[300px] h-[400px] object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-between gap-[15px] ml-[20px]">

                                <div className="flex flex-col gap-[10px]">
                                    <button className="bg-gray-100 rounded-md w-max text-gray-600 p-2.5 hover:bg-gray-200">
                                        <IoShareSocialOutline className="w-5 h-5" />
                                    </button>

                                    <button
                                        className="bg-gray-100 rounded-md w-max text-gray-600 p-2.5 hover:bg-gray-200"
                                        onClick={() => setIsFavorite(!isFavorite)}
                                    >
                                        {
                                            isFavorite ? (
                                                <IoHeart className="w-5 h-5 text-red-500" />
                                            ) : (
                                                <IoHeartOutline className="w-5 h-5" />
                                            )
                                        }
                                    </button>
                                </div>

                                <div className="flex flex-col gap-[10px]">
                                    <button
                                        onClick={prevImage}
                                        className="bg-gray-100 rounded-md w-max text-gray-600 p-2 hover:bg-gray-200"
                                        aria-label="Previous image"
                                    >
                                        <BiChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="bg-gray-100 rounded-md w-max text-gray-600 p-2 hover:bg-gray-200"
                                        aria-label="Next image"
                                    >
                                        <BiChevronRight className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="scrollbar flex w-full md:w-[87%] gap-2 mt-4 overflow-x-auto">
                            {images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => selectThumbnail(index)}
                                    className={`flex-shrink-0 bg-gray-100 w-20 transition-all duration-300 h-20 rounded-md mb-1 overflow-hidden border-2 ${currentImageIndex === index ? "border-[#0FABCA]" : "border-transparent"
                                        }`}
                                >
                                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="flex flex-col">
                        <div className="flex justify-between items-start">
                            <div className="w-full">
                                <p className="text-gray-400 text-[0.9rem]">John Lewis ANYDAY</p>
                                <h1 className="text-[1.6rem] md:text-[1.8rem] text-gray-800 font-semibold mb-3">Long Sleeve Overshirt, Khaki, 6</h1>
                                <div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-1 md:gap-4 mb-4">
                                    <div className="flex items-center">
                                        <span className="text-[1.4rem] font-semibold text-gray-800">£28.00</span>
                                        <span className="text-gray-400 text-[1rem] line-through ml-2">£40.00</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <IoStar className="text-yellow-400 text-[1.1rem]" />
                                        <span className="text-gray-800 font-semibold">4.5</span>
                                        <span className="text-gray-500">(1,238 Sold)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6 border-t-[2px] border-gray-200 border-dashed mt-1 pt-6">
                            <h2 className="text-gray-700 font-semibold mb-2">Description:</h2>
                            <p className="text-[0.9rem] text-gray-600">
                                Boba etiam ut bulla tea est potus electus singulari compositione saporum et textuum, quae in
                                Taiwan annis 1980 orta sunt. Boba refert ad pitas marnicas tapiocas in fundo potus inventas,
                                quae typice lacte tea nigro sapiuntur.
                                <button className="text-blue-600 hover:underline ml-1">See More...</button>
                            </p>
                        </div>

                        <div className="mb-8">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="font-medium text-gray-400">Color: <span className="text-gray-700 font-semibold">{selectedColor}</span></h2>
                            </div>
                            {/* <div className="flex gap-2">
                                {colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={` w-20 h-10 rounded-md border-2 transition-all duration-300 ${selectedColor === color.name ? "border-[#0FABCA] p-1" : "border-transparent"} `}
                                        aria-label={`Select ${color.name} color`}
                                    >
                                        <div className={`w-full h-full rounded-md transition-all duration-300 ${color.class}`}></div>
                                    </button>
                                ))}
                            </div> */}
                        </div>

                        <div className="mb-10">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="font-medium text-gray-400">Size: <span className="font-semibold text-gray-700">{selectedSize}</span></h2>
                                <button className="text-gray-600 text-[0.8rem] underline">View Size Chart</button>
                            </div>
                            <div className="flex w-full flex-wrap gap-2">
                                {/* {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={
                                            `px-4 py-2 max-w-[60px] grow rounded-md border ${selectedSize === size
                                                ? "border-[#0FABCA] bg-[#0FABCA] text-white"
                                                : "border-gray-200 hover:border-[#0FABCA]"}`}
                                    >
                                        {size}
                                    </button>
                                ))} */}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4 mt-auto">
                            <button className="grow py-3 px-6 bg-[#0FABCA] hover:bg-[#0FABCA]/90 rounded-md text-white">
                                Add To Cart
                            </button>
                            <button className="grow py-3 px-6 border border-gray-300 text-gray-600 rounded-md">
                                Checkout Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

           <div className="max-w-[1300px] mx-auto px-4">
           <ul className='flex items-center font-bold text-l gap-5'>
                <li
                    className={`${isActive === 1 && '!border-green-400 !text-green-400'
                        } px-6 py-2  border-b-2 text-[#424242] transition duration-300 border-transparent cursor-pointer`}
                    onClick={() => setIsActive(1)}> DESCRIPTION
                </li>
                <li
                    className={`${isActive === 2 && '!border-green-400 !text-green-400'
                        } px-6 py-2 border-b-2 text-[#424242] transition duration-300 border-transparent cursor-pointer`}
                    onClick={() => setIsActive(2)}> DELIVERY POLICY
                </li>
                <li
                    className={`${isActive === 3 && '!border-green-400 !text-green-400'
                        } px-6 py-2 border-b-2 text-[#424242] transition duration-300 border-transparent cursor-pointer`}
                    onClick={() => setIsActive(3)}> RETURNS & EXCHANGES POLICY
                </li>
            </ul>
           </div>

        </div>
    );
};

export default ProductDetails;