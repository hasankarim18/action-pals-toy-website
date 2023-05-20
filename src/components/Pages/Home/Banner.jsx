import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useContext } from "react";


//

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Banner.css";
import { DataContext } from "../../Providers/DataProvider";
import Spinner from "../../utils/Spinner";
import { Link } from "react-router-dom";



// import required modules


const Banner = () => {
    

    const { loadLatest, loadLatestLoading } = useContext(DataContext);
   
    

    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    };

  



    if(loadLatestLoading){
      return <Spinner />
    }else {

    const  data = loadLatest.data.data || []
       return (
         <div style={{ height: "400px" }} className="home_banner">
          
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
             {data.map((item) => {
               return (
                 <SwiperSlide key={item._id} className="w-full">
                   <div
                     style={{ height: "380px" }}
                     className="w-full flex justify-center items-center bg-white"
                   >
                     <div
                       className="hero"
                       style={{
                         backgroundImage: `url(${item.picture})`,
                         backgroundPosition: "contain",
                         height: "350px",
                       }}
                     >
                       <div className="hero-overlay bg-opacity-60"></div>
                       <div className="hero-content text-center text-neutral-content">
                         <div className="max-w-md">
                           <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                             Latest Collection
                           </h1>
                           <div className="mb-5">
                             <span>{item.name}</span>
                           </div>
                           <Link
                             to={`/toy/${item._id}`}
                             className="border-2 border-sweetPink bg-sweetPink hover:bg-transparent transition-all duration-300 py-3 px-8 rounded-lg "
                           >
                             View Details
                           </Link>
                         </div>
                       </div>
                     </div>
                   </div>
                 </SwiperSlide>
               );
             })}

           
           </Swiper>
         </div>
       );
    }

   


 
};

export default Banner;
