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
import Spinner from "../../../utils/Spinner";
import LazyLoad from "react-lazy-load";

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
       // setLoadingToprated(false)
        setLoadError(error)
      })
    }, [])

  //  console.log('load error',loadError);
  //  console.log(toprated);

  if (loadingToprated) {
    return (
      <div>
        <Spinner />
        <div className="text-center text-3xl text-rose-400">
          {loadError !== null && loadError.code === "ERR_NETWORK"
            ? loadError.message
            : null}
        </div>
      </div>
    );
  }else {
 return (
   <div className="w-full">
     {toprated.data.data.length === 0 && <h3 className="text-3xl text-center">No data found</h3> }
     <div className="w-full sm:w-3/4 md:2/4 mx-auto">
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
           {toprated.data.data.map((slide) => {
             return (
               <SwiperSlide key={slide._id}>
                 <div className="">
                   <LazyLoad>
                     <img
                       style={{ height: "400px" }}
                       className="w-3/4 mx-auto"
                       src={slide.picture}
                     />
                   </LazyLoad>
                   <div className="text-center">
                     <h3 className="text-3xl"> {slide.name} </h3>
                     <div className="flex justify-center">
                       <ShowRating rating={slide.rating} title="Rating:" />
                     </div>
                     <div className="flex justify-around">
                       <span className="text-xl">Price: $ {slide.price}</span>
                       <Link
                         className="text-white p-1 rounded-lg bg-sweetPink"
                         to={`/toy/${slide._id}`}
                       >
                         {" "}
                         Visit Details
                       </Link>
                     </div>
                     <div className="py-4"></div>
                     <div></div>
                   </div>
                 </div>
               </SwiperSlide>
             );
           })}
         </Swiper>
       </>
       <div className="mt-8">
         <div className="flex items-center">
           <p className="text-center text-xl text-gray-600">
             <strong>
               When it comes to excellence, this product takes the crown!
             </strong>{" "}
             Introducing our top-rated product - a game-changer in quality,
             performance, and durability. With cutting-edge technology and sleek
             design, it sets new industry standards. Customers love its
             reliability, versatility, and user-friendly interface. Join
             satisfied customers and elevate your experience with our
             best-selling product today.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
 }
    
 
};

export default Gallery;
