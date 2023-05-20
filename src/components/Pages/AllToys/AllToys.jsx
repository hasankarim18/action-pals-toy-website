import { useEffect, useState } from "react";
import { baseUrl } from "../../loaders/loaders";
import useTitle from "../../Hooks/useTitle";
import Toy from "./Toy";
import axios from "axios";
import SmallSpinner from "../../utils/SmallSpinner";


const AllToys = () => {
  const [data, setData] = useState([]);
  const [showToysNumber, setShowToysNumber] = useState(20);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState("");
  const [loadError, setLoadError] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  useTitle("All Toys");

  const showResultHandler = (event) => {
    setShowToysNumber(event.target.value);
  };

  const searchTextHandler = (event) => {
    setSearchText(event.target.value);
  };

    useEffect(() => {
      axios.get(`${baseUrl}/toys?limit=${showToysNumber}&name=${debouncedSearchText}`)       
        .then((data) => {
        //   console.log(data);
          //  console.log("fetch");
          setIsSearching(false)
          setData(data.data);
        })
        .catch((error) => {
         // console.log(error);
           setIsSearching(false);
          setLoadError(error.message);
        });
    }, [showToysNumber, debouncedSearchText]);

      useEffect(() => {
        let timer;
        setIsSearching(true)
        // Update debouncedSearchText after 20 seconds of stop typing
        timer = setTimeout(() => {
          setDebouncedSearchText(searchText);
          
        }, 5000); // Delay time in milliseconds

        return () => {
          clearTimeout(timer);
        };
      }, [searchText]);

   
      const startSearchBtn = () => {
        setDebouncedSearchText(searchText);
         setIsSearching(false);
      };

      const startSearchByEnter = (event) => {
        if (event.key === "Enter") {
          setDebouncedSearchText(searchText);
           setIsSearching(false);
        }
      };

  return (
    <div>
      <h1 className="text-3xl my-4">Toy Category: Comic Books Toy </h1>
      <div className="mt-4  flex items-center justify-start gap-4">
        <div className=" w-3/4 md:w-1/2 relative">
          <input
            onChange={searchTextHandler}
            onKeyUp={startSearchByEnter}
            type="text"
            className="border-2 w-full p-2 relative "
            placeholder="Search Toy By Name"
          />
          {isSearching && (
            <div className="absolute top-2 right-1">
              <SmallSpinner />
            </div>
          )}
        </div>
        <button
          onClick={startSearchBtn}
          className="btn btn-outline btn-success"
        >
          Search{" "}
        </button>
      </div>
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
                <th className="text-center">Si</th>
                <th className="text-center">Seller Name</th>
                <th className="text-center">Picture</th>
                <th className="text-center">Toy Name</th>
                <th className="text-center">Category</th>
                <th className="text-center">Price</th>
                <th className="text-center">Available Q.</th>
                <th className="text-center">Raitings</th>
                <th className="text-center">Details</th>
              </tr>
            </thead>
            <Toy data={data} loadError={loadError} />
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
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
