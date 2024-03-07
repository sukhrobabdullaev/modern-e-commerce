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
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
          className=" "
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.uzum.uz/cne3bdjifoubkc6thte0/main_page_banner.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Main;
