import React from 'react';
import feature1 from '../../assets/images/feature1.jpg';
import feature2 from '../../assets/images/feature2.jpg';
import feature3 from '../../assets/images/feature3.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const FeaturedProduct = () => {
    return (
        <div className="bg-base-200 py-8 md:py-32">
            <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between px-4 gap-12">

                <div className="flex-1">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">FEATURED PRODUCT</h3>
                    <h2 className="text-4xl font-bold my-6">Discover Style in Every Stitch</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Clothing is more than just a necessity — it’s a powerful expression of individuality, culture, and lifestyle. From the materials carefully chosen to the designs thoughtfully crafted, every piece of clothing tells a story. It reflects personal style, adapts to daily demands, and speaks volumes without saying a word.In today’s world, fashion blends tradition with innovation, combining timeless craftsmanship with modern technology.
                    </p>
                    <button className="btn btn-outline btn-success mt-6 hover:text-white">
                        BUY NOW
                    </button>
                </div>

                {/* Images Section */}
                <div className="flex-1 w-full h-full gap-2 lg:gap-3 md:gap-8 flex items-center justify-center">
                    {/* Third Image (farthest back) */}
                    <div>

                        <img data-aos="fade-up"
                            data-aos-duration="1000"
                            src={feature3}
                            alt="Standing model"
                            className="w-43  md:w-50 lg:w-54 "
                        />
                    </div>

                    {/* Second Image (middle layer) */}
                    <div>
                        <img
                            src={feature2}
                            alt="Sitting model"
                            className="w-42 mt-8 md:w-48 lg:w-52"
                        />
                    </div>

                    {/* First Image (front image) */}
                    <div>
                        <img data-aos="fade-up"
                            data-aos-duration="1000"
                            src={feature1}
                            alt="Hanger shirt"
                            className="w-40  md:w-45 lg:w-49 "
                        />
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FeaturedProduct;
