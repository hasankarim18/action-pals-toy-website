import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../../loaders/loaders";
import ShowRating from "../../../Hooks/ShowRatings";
import { Link } from "react-router-dom";

const Gallery = () => {

    const [toprated, setToprated] = useState([])
    const [loadingToprated, setLoadingToprated] = useState(true)
    const [loadError, setLoadError] = useState(null)

    useEffect(() => {
      axios.get(`${baseUrl}/toprated`)
      .then(data => {
        setToprated(data)
        setLoadingToprated(false)
      })
      .catch(error => {
        console.log(error);
        setLoadingToprated(false)
        setLoadError(error)
      })
    }, [])
    


  return (
    <div>
      <>
       
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {!loadingToprated && toprated.data.data.map(slide => {
            return (
              <SwiperSlide key={slide._id}>
                <div className="">
                  <img
                    style={{ height: "400px" }}
                    className="w-3/4 mx-auto"
                    src={slide.picture}
                  />
                  <div className="text-center" >
                    <h3 className="text-3xl"> {slide.name} </h3>                    
                    <div className="flex justify-center" >
                        <ShowRating rating={slide.rating} title="Rating:" />
                    </div>
                    <div className="flex justify-around">
                        <span>
                            Price: $ {slide.price} 
                        </span>
                        <Link className="text-sweetPink" to={`/toy/${slide._id}`} > Visit Details</Link>
                    </div>
                    <div className="py-4">

                    </div>
                    <div>

                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        
        </Swiper>
        {loadError !== null && (
          <div className="text-3xl text-rose-400">Network error</div>
        )}
      </>
    </div>
  );
};

export default Gallery;
