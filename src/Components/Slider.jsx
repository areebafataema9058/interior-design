import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../css/Slider.css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://mojoboutique.com/cdn/shop/articles/what_interior_design_style_uses_plants_1344x.jpg?v=1710240081",
      alt: "Modern Living Room",
    },
    {
      id: 2,
      image:
        "https://www.milindpai.com/wp-content/uploads/2023/03/maxresdefault.jpg",
      alt: "Cozy Bedroom",
    },
    {
      id: 3,
      image:
        "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2022/03/06181125/Cover-01-3.png",
      alt: "Elegant Kitchen",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-auto rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
