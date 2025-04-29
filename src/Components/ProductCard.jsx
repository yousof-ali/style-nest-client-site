
import React, { useState } from "react";

// react icons
import { IoMdHeartEmpty } from "react-icons/io";
import { HiArrowsUpDown } from "react-icons/hi2";
import { IoBagHandleOutline, IoEyeOutline } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ single }) => {
    const [rating, setRating] = useState(single?.rating || 0);
    const [count, setCount] = useState(1);

    const [wishlistVisible, setWishlistVisible] = useState(false);
    const [compareVisible, setCompareVisible] = useState(false);
    const [quickViewVisible, setQuickViewVisible] = useState(false);
    const [productCardHover, setProductCardHover] = useState(false);

    const handleIncrement = () => setCount(prev => prev + 1);
    const handleDecrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));
    const handleInputValueChange = (e) => setCount(Number(e.target.value));

    const productName = single?.name || "Product Title";
    const productPrice = single?.price || 0;
    const productImages = single?.images || [];
    const productColors = single?.colors || [];

    return (
        <div className="w-full  group">
            {/* Product image */}
            <div
                onMouseOver={() => setProductCardHover(true)}
                onMouseOut={() => setProductCardHover(false)}
                className="relative cursor-pointer overflow-hidden"
            >
                <img
                    alt="product"
                    src={
                        productCardHover && productImages[1]
                            ? productImages[1]
                            : productImages[0] || "https://via.placeholder.com/300"
                    }
                    className="w-full object-cover"
                />

                {/* Action buttons */}
                <div className="absolute bottom-0 left-0 w-full">
                    <div className="flex items-center gap-4 justify-center">
                        {/* Wishlist */}
                        <div
                            onMouseOver={() => setWishlistVisible(true)}
                            onMouseOut={() => setWishlistVisible(false)}
                            className="relative group-hover:translate-y-0 translate-y-[50px] transition-all opacity-0 group-hover:opacity-100 duration-300"
                        >
                            <p title="Wishlist" className="rounded-full bg-white p-2 hover:bg-[#0FABCA] hover:text-white transition-all duration-200 cursor-pointer">
                                <IoMdHeartEmpty size={20} />
                            </p>
                            
                        </div>

                        {/* Quick view */}
                        <div
                            onMouseOver={() => setQuickViewVisible(true)}
                            onMouseOut={() => setQuickViewVisible(false)}
                            className="relative group-hover:translate-y-0 transition-all duration-700 opacity-0 group-hover:opacity-100 translate-y-[110px]"
                        >
                            <p title="Details" className="rounded-full  bg-white p-2 hover:bg-[#0FABCA] hover:text-white transition-all duration-200 cursor-pointer">
                                <IoEyeOutline size={20} />
                            </p>
                            
                        </div>
                    </div>

                    {/* Quantity & Add to cart */}
                    <div className="w-full flex mt-6 items-center opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 translate-y-[60px] bg-[rgba(0,0,0,0.5)]">
                        <div className="flex w-[50%] justify-center px-2 py-0.5 items-center border-r border-gray-400 text-white">
                            <button onClick={handleDecrement}><FiMinus /></button>
                            <input
                                type="number"
                                value={count}
                                onChange={handleInputValueChange}
                                className="w-[40px] bg-transparent text-center text-white"
                            />
                            <button onClick={handleIncrement}><FiPlus /></button>
                        </div>
                        <button className="py-[13px] relative flex items-center justify-center grow text-white hover:bg-green-400">
                            ADD CART
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Details */}
            <div className="mt-4 text-center">
                <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, index) => (
                        <FaStar
                            key={index}
                            size={16}
                            className={index < rating ? "text-yellow-400" : "text-gray-300"}
                            onClick={() => setRating(index + 1)}
                        />
                    ))}
                    <span className="text-sm text-gray-500">({single?.reviews || 43})</span>
                </div>

                <h3 className="text-md font-medium text-gray-900 mt-1">{productName}</h3>
                <p className="text-gray-700">Tk {productPrice.toLocaleString()}</p>

                {/* Color Options */}
                <div className="flex items-center justify-center gap-2 mt-2">
                    {productColors.map((color, idx) => (
                        <div
                            key={idx}
                            className="w-4 h-4 rounded-full cursor-pointer border-2"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};


export default ProductCard;