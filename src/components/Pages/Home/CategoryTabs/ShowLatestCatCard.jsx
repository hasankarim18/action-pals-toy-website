import { Link } from "react-router-dom";
import useShowRating from "../../../Hooks/useShowRating";
import LazyLoad from "react-lazy-load";


const ShowLatestCatCard = ({img, name, rating, id, price}) => {

   const showRating = useShowRating(rating)

    return (
      <div>
        <div className="w-full  bg-base-100 border p-4 rounded-lg">
          <LazyLoad>
            <figure>
              <img
                style={{ height: "300px" }}
                className="mx-auto"
                src={img}
                alt={name}
              />
            </figure>
          </LazyLoad>
          <div className="card-body justify-center items-center text-center">
            <h2 className="card-title">{name}</h2>
            <div className="text-center">{showRating}</div>
            <div>Price: $ {price}</div>
            <div className="card-actions justify-center">
              <Link
                to={`/toy/${id}`}
                className="border-2 border-sweetPink bg-sweetPink hover:bg-transparent transition-all duration-300 py-3 px-8 rounded-lg text-white hover:text-black"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ShowLatestCatCard;