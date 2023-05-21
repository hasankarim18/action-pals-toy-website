import SimpleAccordion from "./SimpleAccordion";
import AOS from "aos";

const Faq = () => {
    AOS.init()
 
  return (
    <div className="mt-8">
      <div className="grid gap-8 gird-cols-1 md:grid-cols-[_2fr,_3fr]">
        <div data-aos="flip-right">
          <video className="w-full" autoPlay loop controls>
            <source
              src="https://cdn.pixabay.com/vimeo/490755642/toys-55015.mp4?width=640&hash=26a94860d228f32a18f85eda445e4f3e486b33d0"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </div>
        <div>
          <SimpleAccordion />
        </div>
      </div>
    </div>
  );
};

export default Faq;
