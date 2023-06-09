import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import ShowRating from "../../Hooks/ShowRatings";


const Toy = ({ data, loadError }) => {

  let showError  = null

  if(loadError === '' && data.length === 0){
    showError = "No Data Found"
  }else if(loadError !== 0 && data.length === 0){
    showError = loadError 
  }

 
  return (
    <tbody>
      {showError && (
        <tr>
          <td>
            <span className="text-3xl">{showError}</span>             
          </td>
        </tr>
      )}
      {/* row 1 */}
      {data.map((item, i) => {
        const rating = item.rating;

        const showRating = <ShowRating rating={rating} textSize="" marginRight="1"  />
        return (
          <tr key={item._id}>
            <td>{i + 1}</td>
            <td>
              <p>{item.seller_name}</p>
            </td>
            <td>
              <div className="flex items-center justify-center space-x-3">
                <div className="avatar">
                  <div className="mask text-center flex items-center justify-center mask-squircle w-12 h-12">
                    <LazyLoad className="w-12 h-12">
                      <img
                        src={item.picture}
                        alt="Avatar Tailwind CSS Component"
                        className="mx-auto"
                      />
                    </LazyLoad>
                  </div>
                </div>
              </div>
            </td>
            <td className="text-center">
              {item.name}
              <br />
            </td>
            <td>
              <p className="capitalize text-center">{item.sub_category}</p>
            </td>
            <td>
              <p className="capitalize text-center"> ${item.price}/-</p>
            </td>
            <td>
              <p className="capitalize text-center">
                {" "}
                {item.available_quantity}
              </p>
            </td>
            <td>{showRating}</td>
            <th className="text-center">
              <Link to={`/toy/${item._id}`} className="btn btn-ghost btn-xs">
                details
              </Link>
            </th>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Toy;