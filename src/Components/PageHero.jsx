import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const PageHero = ({ img, title, subtitle }) => {
    return (
        <div>
            <div
                className="hero min-h-[50vh] "
                style={{
                    backgroundImage: `url(${img})`,
                }}>

                <div className="hero-overlay"></div>
                <div className=" w-full h-full flex justify-center items-center  text-white bg-black/30   text-center">
                    <div className="max-w-md">
                        <h2 data-aos="fade-up"
                            data-aos-duration="3000" 
                            className="mb-3 text-5xl font-bold">{title}</h2>
                        <h2 data-aos="fade-up"
                            data-aos-duration="3000"
                             className='flex justify-center items-center gap-4 mt-6'>{title} <FaChevronRight /> <span className='text-green-400 font-bold'>{subtitle}</span></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageHero;