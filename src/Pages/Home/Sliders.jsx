import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "./SliderStyles.css"; // custom zoom/fade animation

const Sliders = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                className="max-w-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="h-[90vh] w-full relative overflow-hidden">
                        {/* Background zoom image only */}
                        <div
                            className="absolute inset-0 slide-bg z-0"
                            style={{ backgroundImage: `url('/banner1.jpg')` }}
                        />

                        {/* Text stays stable, not scaled */}
                        <div className="relative z-10 max-w-xl pl-4 md:pl-16 text-white space-y-4 h-full flex items-center">
                            <div>
                                <p className="font-bold tracking-wider text-sm md:text-base">NEW COLLECTION</p>

                                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                    FIND YOUR <br />
                                    <span className="block">PERFECT</span>
                                </h1>

                                <p className="text-lg md:text-xl">
                                    Uncompromising in style, quality and performance
                                </p>

                                <button className="bg-white text-black font-bold px-8 py-4 mt-4 shadow hover:opacity-90 transition">
                                    SHOP THE COLLECTION
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="h-[90vh] w-full relative overflow-hidden">
                        {/* Background zoom image only */}
                        <div
                            className="absolute inset-0 slide-bg z-0"
                            style={{ backgroundImage: `url('/banner2.jpg')` }}
                        />

                        {/* Text stays stable, not scaled */}
                        <div className="relative z-10 max-w-xl pl-4 md:pl-16 text-cyan-400 space-y-4 h-full flex items-center">
                            <div>
                                <p className="font-bold tracking-wider text-sm md:text-base">NEW COLLECTION</p>

                                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                    FIND YOUR <br />
                                    <span className="block">PERFECT</span>
                                </h1>

                                <p className="text-lg md:text-xl">
                                    Uncompromising in style, quality and performance
                                </p>

                                <button className="bg-white text-black font-bold px-8 py-4 mt-4 shadow hover:opacity-90 transition">
                                    SHOP THE COLLECTION
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Sliders;
