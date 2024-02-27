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
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={true}
      modules={[Pagination]}
      className="mySwiper rounded-lg"
    >
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
