import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import useShowRating from "../../Hooks/useShowRating";



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
   

    const showDescription = description || "No description found."     
    const ShowRating2 = useShowRating(rating, "xl",2)

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
              {ShowRating2}
              {/* rating */}
              <div className="mt-3 font-semibold">
                Available Quantity: {available_quantity}
              </div>
              <div className="mt-2">Seller Name : {seller_name}</div>
              <div className="mt-2">Seller Email: {seller_email}</div>

              <div className="mt-4">
                {/* <button className="btn btn-primary">Get Started</button> */}
              </div>
            </div>
            <div>
              <img
                src={picture}
                className="max-w-sm rounded-lg shadow-2xl  mx-auto w-full w-max-96 "
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ToyDetails;