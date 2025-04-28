import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Sliders = () => {
    const [data, setData] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        afterChange: (index) => {
            setCurrentSlide(index);
        },
    };

    useEffect(() => {
        fetch('/sliders.json')
            .then(res => res.json())
            .then(result => {
                setData(result);
            });
    }, []);


    return (
        <div className="w-full mx-auto overflow-hidden">
            <Slider {...settings}>
                {data?.map((slide, index) => {
                    const isActive = currentSlide === index;

                    return (
                        <div key={slide.id} className="relative h-[30vh]  w-full md:h-[50vh] lg:h-[90vh]">
                            <div className="flex w-full h-full  justify-between ">
                                {/* Left Image */}
                                <div className="flex  items-center justify-center flex-1 overflow-hidden"
                                    style={{ backgroundColor: slide.bgColour[0] }}>
                                    <img
                                        src={slide.leftImage}
                                        alt={slide.altLeft}
                                        className={`w-full h-full object-contain transition-all duration-1000 ease-in-out ${isActive ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                                            }`}
                                    />
                                </div>

                                {/* Right Image */}
                                <div className="flex items-center justify-center flex-1 overflow-hidden"
                                    style={{ backgroundColor: slide.bgColour[1] }}>
                                    <img
                                        src={slide.rightImage}
                                        alt={slide.altRight}
                                        className={`w-full h-full object-contain transition-all duration-1000 ease-in-out ${isActive ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                                            }`}
                                    />
                                </div>
                            </div>

                            {/* Overlay Text */}
                            <div className='absolute hidden md:flex justify-center flex-col items-center top-0 left-0 w-full h-full px-4'>
                                <h2
                                    className={`lg:text-5xl text-3xl font-bold text-center transform transition-all duration-1000 ease-in-out
      ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
                                >
                                    {slide.heading}
                                </h2>

                                <p
                                    className={`text-gray-500 hidden md:flex text-center lg:w-2/6 md:w-1/2 my-6 transform transition-all duration-1000 ease-in-out
      ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
                                >
                                    {slide.des}
                                </p>

                                <button
                                    className={`btn mt-2 px-7 py-6 md:text-2xl bg-green-300 text-white font-bold transform transition-all duration-1000 ease-in-out
      ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
                                >
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default Sliders;
