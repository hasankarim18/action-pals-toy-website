import { useEffect, useState } from "react";
import { baseUrl } from "../../loaders/loaders";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../../Hooks/useTitle";
import LazyLoad from "react-lazy-load";
import Spinner from "../../utils/Spinner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";



const MyToys = () => {
    const [myToys, setMyToys] = useState([])
    const { user } = useContext(AuthContext);
    const [sortOrder, setSortOrder] = useState(-1)
    const [isLoading, setIsLoading] = useState(true)
    useTitle("My Toys")

    const MySwal = withReactContent(Swal);


    const handleSortOrder = (event)=> {
        setSortOrder(event.target.value)
    }

    useEffect(() => {
      fetch(`${baseUrl}/mytoys?email=${user?.email}&sortOrder=${sortOrder}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
          setMyToys(data);
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false)
        });
    }, [user.email, sortOrder])



    const deleteMyToyHandler = (id)=> {
      
       MySwal.fire({
         title: "Do you want delete a toy?",
        // showDenyButton: true,
         showCancelButton: true,
         confirmButtonText: "Delete",
        // denyButtonText: `Don't save`,
       }).then((result) => {
         /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
           fetch(`${baseUrl}/toys/${id}`, {
             method: "DELETE",
           })
             .then((res) => res.json())
             .then((data) => {
               console.log(data);
               if (data.acknowledged && data.deletedCount > 0) {
                 const remainingToys = myToys.filter((toy) => toy._id !== id);
                 setMyToys(remainingToys);
                 Swal.fire("Deleted Successfully!");
               }
             })
             .catch((error) => {
               console.log(error);
               Swal.fire("Deleted not possible please try again later.");
             });
         }

       });   
  }

    return (
      <>
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            <div>
              <h2 className="text-3xl">My Toys</h2>
            </div>
            <div className="my-4 items-center text-xl flex gap-4">
              <span> Sort by price </span>
              <select
                value={sortOrder}
                onChange={handleSortOrder}
                className=" border-2 p-2 rounded-md"
              >
                <option value="-1" key="1">
                  Descending
                </option>
                <option value="1" key="2">
                  Ascending
                </option>
              </select>
              <span>order</span>
            </div>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>
                      {/* <label>
                    <input type="checkbox" className="checkbox" />
                  </label> */}
                    </th>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Sub Category</th>
                    <th>Price</th>
                    <th>Available Q.</th>
                    <th>Edit</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {myToys.map((item) => {
                    return (
                      <tr key={item._id}>
                        <th>
                          <button
                            onClick={() => {
                              deleteMyToyHandler(item._id);
                            }}
                          >
                            <span
                              title="delete"
                              className="p-2 cursor-pointer bg-red-400 w-8 h-8 flex items-center justify-center text-white rounded-full"
                            >
                              X
                            </span>
                          </button>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <LazyLoad className="w-12 h-12">
                                  <img src={item.picture} alt={item.name} />
                                </LazyLoad>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <span className="capitalize">
                            {item.sub_category}
                          </span>
                        </td>
                        <td>${item.price}/-</td>

                        <td>{item.available_quantity}</td>
                        <td>
                          <Link to={`/edit-toy/${item._id}`} className="btn btn-xs btn-success text-white">
                            Edit
                          </Link>
                        </td>
                        <th>
                          <Link to="/toy" className="btn btn-ghost btn-xs">
                            details
                          </Link>
                        </th>
                      </tr>
                    );
                  })}
                  {/* row 1 */}
                </tbody>
                {/* foot */}
                <tfoot>
                  <tr></tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}
      </>
    );
};

export default MyToys;