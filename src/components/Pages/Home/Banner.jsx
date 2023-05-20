import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Banner.css";


// import required modules
import { Navigation, Pagination } from "swiper";

const Banner = () => {

    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    };


  return (
    <div className="home_banner" >
      <Swiper
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full"
        effect="fade"
        pagination={pagination}
        spaceBetween={50}
        slidesPerView={1}
        //  onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="w-full">
          <div className="w-full h-96 flex justify-center items-center bg-white">
            <div>Slides 1 this is slider </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-96 flex justify-center items-center bg-white">
            <div>Slides 2 this is slider </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-96 flex justify-center items-center bg-white">
            <div>Slides 3 this is slider </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-96 flex justify-center items-center bg-white">
            <div>Slides 4 this is slider </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
