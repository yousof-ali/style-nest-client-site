import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ProductCard from "../../Components/ProductCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TopTrending = () => {
  const [toptrending, setTopTrending] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic
      .get("/products")
      .then((res) => {
        setTopTrending(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, [axiosPublic]);

  return (
    <div className="container max-w-7xl mx-auto py-12">
      <div className="px-4">
        <h3 className="section-label text-xs md:text-base">TOP TRENDING</h3>
        <h2 className="section-heading">Our Best Picks</h2>
        <p className="section-desc">
          Discover the collection of denim - Shop top designers and SaleHub
          design! Get personalised size recommendations  with SaleHub fit
          assistant.
        </p>

        <div className="flex justify-end">
          <Link
            to={"/collections"}
            className="text-green-400 flex items-center gap-2 hover:underline text-xs md:text-base font-semibold mt-2"
          >
            VIEW ALL COLLECTIONS <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* ✅ Use Swiper only (removed grid duplication) */}
      <div className="mt-8 px-4 relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{ clickable: true }}
           navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[FreeMode, Pagination,Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper "
        >
          {toptrending.map((item, index) => (
            <SwiperSlide className="pb-6" key={index}>
              <ProductCard single={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-prev cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md md:p-5 p-3 rounded-full hover:bg-green-500">
          <FaChevronLeft className="text-gray-700" />
        </button>
        <button className="custom-next cursor-pointer  absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md md:p-5 p-3 rounded-full  hover:bg-green-500">
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default TopTrending;
