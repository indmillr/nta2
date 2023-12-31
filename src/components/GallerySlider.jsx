"use client";

// data
const gallerySlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/gallery/thumb11.jpg",
        },
        {
          title: "title",
          path: "/gallery/thumb12.jpg",
        },
        {
          title: "title",
          path: "/gallery/thumb5.jpg",
        },
        {
          title: "title",
          path: "/gallery/thumb6.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/gallery/thumb7.jpg",
        },
        {
          title: "title",
          path: "/gallery/thumb8.jpg",
        },
        {
          title: "title",
          path: "/gallery/thumb9.jpg",
        },
        {
          title: "title",
          path: "/gallery/thumb10.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/gallery/thumb13.jpg",
        },
        {
          title: "title",
          path: "/gallery/thumb14.jpg",
        },
      ],
    },
  ],
};

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// required modules
import { Pagination } from "swiper";

// icons
import Image from "next/image";

const GallerySlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="w-full h-[525px]"
    >
      {gallerySlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid max-h-screen grid-cols-2 grid-rows-2 sm:grid-rows-3 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center"
                    key={index}
                  >
                    <div className="flex items-center justify-center hover:scale-150 hover:brightness-110 brightness-90 transition duration-500 relative overflow-hidden">
                      {/* image */}
                      <Image src={image.path} width={175} height={60} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 opacity-0 group-hover:scale-150 transition-all duration-500"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default GallerySlider;
