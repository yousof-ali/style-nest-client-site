import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

const Review = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(result => {
                setData(result);
            });
    }, []);

    return (
        <div className="container mx-auto lg:py-16 py-12 px-4">
            <h2 className="text-center section-heading mb-4">FROM OUR CUSTOMERS</h2>

            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="mySwiper"
            >
                {data.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white p-6  h-full flex flex-col items-center text-center">
                            <img
                                src={review.photo}
                                alt={review.name}
                                className="w-20 h-20 rounded-full object-cover mb-4"
                            />
                            <h3 className="lg:text-lg md:text-base text-sm font-semibold">{review.name}</h3>
                            <p className="lg:text-lg text-sm  text-gray-500 mb-1">{review.country}</p>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`text-sm ${
                                            i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-500 lg:text-sm sm:text-xs text-[10px]">{review.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Review;
