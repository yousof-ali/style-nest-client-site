import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ProductCard from '../../Components/ProductCard';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import useAxiosPublic from '../../Hooks/useAxiosPublic';



const TopTrending = () => {
  const [toptrending, setTopTrending] = useState([]);
  const axiosPublic = useAxiosPublic()

  useEffect(() => {
    axiosPublic.get('/products')
            .then(res => {
                setTopTrending(res.data);
                console.log(res.data);
            })
            .catch(err => {
                console.error(err.message);
            });
  }, [axiosPublic]);

  return (
    <div className='container max-w-7xl mx-auto py-12'>
      <div className="px-3 md:px-0">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500">TOP TRENDING</h3>
        <h2 className="text-4xl font-bold my-6">Our Best Picks</h2>
        <p className="text-gray-600 leading-relaxed">
          Discover the collection of denim - Shop top designers and  SaleHub design! Get personalised size recommendations <br /> with SaleHub fit assistant.
        </p>

        <div className='flex justify-end'>
        <Link to={'/collections'} className='text-green-400 flex items-center gap-2 hover:underline  font-bold mt-2'>VIEW ALL COLLECTIONS <FaArrowRight /></Link>
        </div>
        
      </div>

      <div className="grid gap-4 mt-8 grid-cols-2 justify-center md:grid-cols-3 ">
        {
            toptrending?.map((single,indx) => <ProductCard key={indx} single={single}></ProductCard>)
        }
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={20}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
          {toptrending.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard single={item} />
            </SwiperSlide>
          ))}
        </Swiper> */}
        
      </div>
    </div>
  );
};

export default TopTrending;
