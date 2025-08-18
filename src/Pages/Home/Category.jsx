import React from "react";
import cate1 from "../../assets/images/category1.jpg";
import cate2 from "../../assets/images/category2.jpg";
import cate3 from "../../assets/images/category3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const categories = [
    {
    id: 2,
    title: "Mens Summer",
    desc: "Cool summer wear for men.",
    img: cate1,
  },
  {
    id: 1,
    title: "Kids Fashion",
    desc: "Trendy outfits for kids this season.",
    img: cate3,
  },
  
  {
    id: 3,
    title: "Womens Collection",
    desc: "Fresh arrivals for women.",
    img: cate2,
  },
];

const Category = () => {
  return (
    <div className="max-w-7xl lg:py-16 py-8 px-4 mx-auto">
      {/* Section Heading */}
      <div className="text-center">
        <h2 className="text-xl font-semibold sm:text-2xl lg:text-4xl">
          Top Categories
        </h2>
        <p className="text-gray-500 max-w-[800px] mx-auto mt-2 sm:text-sm text-xs">
          Explore the top categories at StyleNest! Clothes, shoes and cool
          accessories for the new season are available now at StyleNest online.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid mt-8 gap-5 grid-cols-1 sm:grid-cols-2   md:grid-cols-3">
        {categories.map((cate, indx) => (
          <div
            key={cate.id}
            className={`relative group overflow-hidden rounded-2xl cursor-pointer ${
              indx === 0 ? "md:col-span-2 md:row-span-2" : ""
            }`}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Image */}
            <img
              src={cate.img}
              alt={cate.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
              <h3 className="lg:text-2xl md:text-lg  font-semibold text-white drop-shadow-lg">
                {cate.title}
              </h3>
              <p className="text-white/90 text-xs lg:text-sm md:mt-2">{cate.desc}</p>
              <button className="btn btn-outline text-white hover:text-black border-white mt-4">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
