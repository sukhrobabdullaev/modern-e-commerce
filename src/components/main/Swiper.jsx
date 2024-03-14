// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const Main = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 1000 }}
      modules={[Pagination]}
      className="mySwiper rounded-lg"
    >
      <SwiperSlide>
        <img
          src="/slide1.jpg"
          alt=""
          className="md:h-auto sm:h-[400px] h-[200px]  object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/slide2.jpg"
          alt=""
          className="md:h-auto sm:h-[400px] h-[200px]  object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/slide3.jpg"
          alt=""
          className="md:h-auto sm:h-[400px] h-[200px]  object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/slide4.jpg"
          alt=""
          className="md:h-auto sm:h-[400px] h-[200px]  object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Main;
