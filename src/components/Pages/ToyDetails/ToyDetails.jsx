import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import { FaRegStar, FaStar } from "react-icons/fa";


const ToyDetails = () => {
      const data = useLoaderData(); 
      useTitle("Toy Details")

      const {
        picture,
        name,
        rating,
        seller_email,
        seller_name,
        sub_category,
        available_quantity,
        description,
      } = data;

    //  console.log(data);

      const showDescription = description || "No description found."

     // const ratingInt = parseInt(rating, 10)
      const ratingInt = 3

       

    

     const stars = Array.from({ length: ratingInt }, (_, index) => (
       <span className="mr-3 text-xl" key={index}>
            <FaStar />
       </span>
     ));
    
     const emptyStart = Array.from({ length: 5 - ratingInt }, (_, index) => (
       <span className="mr-3 text-xl" key={index}>
         <FaRegStar />
       </span>
     ));


    return (
      <div>
        <div className="hero  bg-paste bg-opacity-10 mt-8 p-8">
          <div className="grid grid-cols-1 md:grid-cols-[_2fr,_1fr]">
            <div className="pr-0 md:pr-10 mb-10">
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="py-6">{showDescription}</p>
              <h3 className="text-xl capitalize">
                Category: <span className="text-sweetPink">{sub_category}</span>{" "}
              </h3>
              <div className="my-2 flex gap-4 items-center">
                <span className="text-xl">Rating:</span>
                <div className="p-2 flex text-sweetPink ">
                  {stars} {emptyStart}
                </div>
              </div>

              <div className="mt-4">
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
            <div>
              <img
                src={picture}
                className="max-w-sm rounded-lg shadow-2xl  mx-auto w-96 w-max-96 "
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;