import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./SliderStyles.css";
import MotionRight from "../../Components/MotionRight";

const Sliders = () => {
    const [sliderData, setSliderData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);


    useEffect(() => {
        fetch("/sliders.json")
            .then(res => res.json())
            .then(result => {
                setSliderData(result);
                console.log(result);
            });
    }, []);
    return (
        <div className="max-w-7xl overflow-hidden lg:rounded-2xl mx-auto">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                className="max-w-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="lg:h-[90vh] h-[50vh] w-full relative overflow-hidden">
                            <div
                                className="absolute inset-0 slide-bg z-0"
                                style={{ backgroundImage: `url('${slide.image}')` }}
                            />
                            <div className={`relative z-10 max-w-xl pl-4 md:pl-16 ${slide.textColor} space-y-4 h-full flex items-center`}>
                                <MotionRight key={activeIndex === index ? `active-${index}` : `inactive-${index}`}>
                                    {activeIndex === index && (
                                        <>
                                            <p className="font-bold tracking-wider text-sm md:text-base">{slide.tag}</p>
                                            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
                                                {slide.title} <br />
                                                <span className="block">{slide.subtitle}</span>
                                            </h1>
                                            <p className="text-base md:text-lg">{slide.description}</p>
                                            <button className="bg-white text-black md:text-base text-xs font-bold px-8 md:py-4 py-3 mt-4 shadow hover:opacity-90 transition">
                                                {slide.buttonText}
                                            </button>
                                        </>
                                    )}
                                </MotionRight>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Sliders;
