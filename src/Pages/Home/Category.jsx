import React from 'react';
import cate1 from '../../assets/images/cate1.jpg'
import cate2 from '../../assets/images/cate2.jpg'
import cate3 from '../../assets/images/cate2.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

const Category = () => {
    return (
        <div className=' max-w-screen'>

            <div className='grid grid-cols-1 gap-4 lg:gap-12 md:grid-cols-3'>
                <div data-aos="fade-up"
                     data-aos-duration="1000"
                    className="w-full h-[400px] relative overflow-hidden group cursor-pointer ">

                    {/*  image  */}
                    <img
                        src={cate1}
                        alt="animated_card"
                        className="w-full h-full object-cover  group-hover:scale-[1.2] transition-all duration-1500" />

                    
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-3xl font-bold text-white text-center capitalize">KIDS FASHION
                            </h1>
                        <button className="btn mt-4 btn-outline text-white btn-success ">SHOP THE COLLECTION</button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div data-aos="fade-up"
                     data-aos-duration="1000"
                     data-aos-delay="500"
                    className="w-full h-[400px] relative overflow-hidden group cursor-pointer ">

                    {/*  image  */}
                    <img
                        src={cate3}
                        alt="animated_card"
                        className="w-full h-full object-cover  group-hover:scale-[1.2] transition-all duration-1500" />

                    
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-3xl font-bold text-white text-center capitalize">
                        MENS SUMMER</h1>
                        <button className="btn mt-4 btn-outline text-white btn-success ">SHOP THE COLLECTION</button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                <div data-aos="fade-up"
                     data-aos-duration="1000"
                     data-aos-delay="1000"
                    className="w-full h-[400px] relative overflow-hidden group cursor-pointer ">

                    {/*  image  */}
                    <img
                        src={cate1}
                        alt="animated_card"
                        className="w-full h-full object-cover  group-hover:scale-[1.2] transition-all duration-1500" />

                    
                    <div
                        className="absolute top-[50%] transform group-hover:translate-y-[-50%] transition-all duration-500 w-full h-full left-0 z-20 right-0 flex items-center justify-center flex-col">
                        <h1 className="text-3xl font-bold text-white text-center capitalize">
                            KIDS FASHION</h1>
                        <button className="btn mt-4 btn-outline text-white btn-success ">SHOP THE COLLECTION</button>
                    </div>

                    {/*  bottom shadow  */}
                    <div
                        className="w-full opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-10 transition-all duration-500 bg-gradient-to-b from-[rgb(0,0,0,0.001)] to-[rgb(0,0,0,0.5)] h-[100%] absolute bottom-0 left-0 right-0"></div>
                </div>
                
            </div>

        </div>
    );
};

export default Category;