import LazyLoad from "react-lazy-load";
import AOS from "aos";



const PartNers = () => {
   AOS.init();
    const imgArray = [
      { name: "compayName", logo: "https://i.ibb.co/2NtDs8d/7.png" },
      { name: "compayName", logo: "https://i.ibb.co/C9c9BWD/1.png" },
      { name: "compayName", logo: "https://i.ibb.co/sq5k7kx/2.png" },
      { name: "compayName", logo: "https://i.ibb.co/jL8G5Zm/3.png" },
      { name: "compayName", logo: "https://i.ibb.co/Q8jkMJM/4.png" },
      { name: "compayName", logo: "https://i.ibb.co/z23qrKB/5.png" },
      { name: "compayName", logo: "https://i.ibb.co/CbBkQv0/6.png" },
    ];


    return (
      <div>
        <div
          data-aos="flip-left"
          className="flex justify-around flex-wrap gap-8 "
        >
          {imgArray.map((img, i) => {
            return (
              <div key={i}>
                <LazyLoad>
                  <img src={img.logo} alt="partners logo" />
                </LazyLoad>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default PartNers;

