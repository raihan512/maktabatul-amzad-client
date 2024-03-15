import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  const banner = [
    {
      _id: "01",
      image:
        "https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp",
      title: "",
      subTitle: "",
    },
    {
      _id: "02",
      image:
        "https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp",
      title: "",
      subTitle: "",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {banner.map((bannerItem) => (
          <SwiperSlide key={bannerItem._id}>
            <div>
              <img src={bannerItem.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
