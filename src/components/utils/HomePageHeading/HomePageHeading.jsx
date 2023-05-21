
const HomePageHeading = ({children, className}) => {
    return (
      <div className="mt-8 mb-8">
        <h2 className={`
        text-3xl    
        md:text-5xl
         mb-8
         capitalize
         text-center text-paste
         font-bold
         ${className}`}>{children}</h2>
        <hr className="border-sweetPink" />
      </div>
    );
};

export default HomePageHeading;