import { useEffect, useState } from "react";
import { baseUrl } from "../../loaders/loaders";



const AllToys = () => {
   const [data, setData] = useState([])
   const [showToysNumber, setShowToysNumber] = useState(10)


   const showResultHandler = (event)=> {
        console.log(event.target.value);
        setShowToysNumber(event.target.value)
   }

   useEffect(() => {
     fetch(`${baseUrl}/toys?limit=${showToysNumber}`)
       .then((res) => {
         return res.json();
       })
       .then((data) => {
         setData(data);
       })
       .catch((error) => {
         console.log(error);
       });
   }, [showToysNumber]);
   

   

    return (
      <div>
        <h1 className="text-6xl my-4">Toy Category: Comic Books Toy </h1>

        <div>
          <div className="overflow-x-auto w-full">
            <div className="my-4 w-full flex justify-end">
              <div>
                <span className="text-2xl">Show Result: </span>
                <select
                  onChange={showResultHandler}
                  value={showToysNumber}                 
                  className="w-40 text-center text-2xl"
                >
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                  <option value="1000">All</option>                 
                </select>
              </div>
            </div>
            <table className="table w-full text-cener">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-center"></th>
                  <th className="text-center">Si</th>
                  <th className="text-center">Seller Name</th>
                  <th className="text-center">Picture</th>
                  <th className="text-center">Toy Name</th>
                  <th className="text-center">Sub Category</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Available Quantity</th>
                  <th className="text-center">View Details</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data.map((item, i) => {
                  return (
                    <tr key={item._id}>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>{i + 1}</td>
                      <td>
                        <p>{item.seller_name}</p>
                      </td>
                      <td>
                        <div className="flex items-center justify-center space-x-3">
                          <div className="avatar">
                            <div className="mask text-center flex items-center justify-center mask-squircle w-12 h-12">
                              <img
                                src={item.picture}
                                alt="Avatar Tailwind CSS Component"
                                className="mx-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">
                        {item.name}
                        <br />
                      </td>
                      <td>
                        <p className="capitalize text-center">
                          {item.sub_category}
                        </p>
                      </td>
                      <td>
                        <p className="capitalize text-center">
                          {" "}
                          ${item.price}/-
                        </p>
                      </td>
                      <td>
                        <p className="capitalize text-center">
                          {" "}
                          {item.available_quantity}
                        </p>
                      </td>
                      <th className="text-center">
                        <button className="btn btn-ghost btn-xs">
                          details
                        </button>
                      </th>
                    </tr>
                  );
                })}
                {/* row 2 */}

                {/* row 3 */}

                {/* row 4 */}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
};

export default AllToys;