import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import IMG1 from "../../../../assets/Img/Destinos_01.webp";
import IMG2 from "../../../../assets/Img/Destinos_02.webp";
import IMG3 from "../../../../assets/Img/Destinos_03.webp";
import IMG4 from "../../../../assets/Img/Destinos_04.webp";
import StarRating from "./StartRating";

const imgs = [IMG1, IMG2, IMG3, IMG4, IMG1, IMG2];

export const SliderDestinosPopulares = function () {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {imgs.map((img, i) => (
          <SwiperSlide  key={i}>
            <img
              src={img}
              className="w-[350px] md:w-[259px] h-[428px] md:h-[389px] object-cover rounded-xl relative "
              alt="img"
            />
            <div className="absolute flex flex-col justify-center items-center">
              <h2 className="text-white font-nunito font-[700] text-[36px] pt-[9rem]">Lorem ipsum</h2>
              <p className="text-white">A 35 km de su ubicación</p>
              <p className="text-white my-2 font-medium">Price start at <span className="text-freshMint font-medium">$10.00</span></p>
              <StarRating />

            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </div>
  );
};