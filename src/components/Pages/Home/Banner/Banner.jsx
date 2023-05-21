import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useContext } from "react";


//

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Banner.css";
import { DataContext } from "../../../Providers/DataProvider";
import Spinner from "../../../utils/Spinner";
import { Link } from "react-router-dom";



// import required modules


const Banner = () => {
    

    const { loadLatest, loadLatestLoading, loadLatestError } =
      useContext(DataContext);
   
    

    const pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    };

   // console.log(loadLatest);
  //  console.log(loadLatestError);

    let showError = null

    if(loadLatestError){
        showError = loadLatestError.message
    }



   
    if(loadLatestLoading){
      return (
        <div>
          <Spinner />
          <div>
            <h3 className="text-rose-400 text-3xl text-center">{showError}</h3>
          </div>
        </div>
      );
    }else {

    const  data = loadLatest.data.data || []
       return (
         <>
           {data.length === 0 ? <h3 className="text-3xl text-center">No data found</h3>:
           <div style={{ height: "600px" }} className="home_banner">
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
                       style={{ height: "580px" }}
                       className="w-full flex justify-center items-center bg-white"
                     >
                       <div
                         className="hero"
                         style={{
                           backgroundImage: `url(${item.picture})`,
                           backgroundPosition: "cover",
                           height: "560px",
                           backgroundRepeat: "no-repeat",
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
    }
         </>
       );
    }

   


 
};

export default Banner;
