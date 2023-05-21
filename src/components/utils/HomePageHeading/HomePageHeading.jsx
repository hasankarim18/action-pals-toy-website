import AOS from 'aos'


const HomePageHeading = ({children, className}) => {
    AOS.init()

    return (
      <div className="mt-8 mb-8">
        <h2
          data-aos="flip-right"
          className={`
        text-3xl    
        md:text-5xl
         mb-8
         capitalize
         text-center text-paste
         font-bold
         ${className}`}
        >
          {children}
        </h2>
        <hr className="border-sweetPink" />
      </div>
    );
};

export default HomePageHeading;