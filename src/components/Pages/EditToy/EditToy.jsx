import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { baseUrl } from "../../loaders/loaders";
import { toast } from "react-toastify";
import useTitle from "../../Hooks/useTitle";
import { useLoaderData } from "react-router-dom";

const EditToy = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData() 

  useTitle("Edit toy");

  const [newPrice, setNewPrice] = useState(data?.price)
  const [quantity, setQuantity] = useState(data?.available_quantity)
  const [description, setDescription] = useState(data?.description)



  const seller_name = user?.displayName
    ? user.displayName
    : "No name found please update your name";
  const seller_email = user?.email ? user.email : " ";

  // console.log(seller_name);

  const handleAddToy = (event) => {
    const addToyToast = () => toast("Product Updated Successfully.");
    const addToyToastFailed = () => toast("Product Updating Failed.");

    event.preventDefault();
   
    const updatedId = data._id
    
    const updateData = {
      updatedId,
      newPrice,
      quantity,
      description,
    };
   

    fetch(`${baseUrl}/toy`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((data) => {
       // form.reset();
        console.log(data);
        addToyToast();
      })
      .catch((error) => {
        console.log(error);
        addToyToastFailed();
      });
  };

  return (
    <>
      <div>
        <div className="my-4">
          <h2 className="text-3xl">Update Your Toy</h2>
          <p>
            Only <strong>price, available quantity and short description</strong> can be updated.
          </p>
        </div>
        <form onSubmit={handleAddToy}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">1. Toy Name </span>
                </label>
                <input
                  disabled
                  readOnly
                  value={data.name}
                  type="text"
                  placeholder="Toy Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              {/* piture */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">2. Picture Url</span>
                </label>
                <input
                  disabled
                  readOnly
                  value={data.picture}
                  type="text"
                  placeholder="Picture Url"
                  className="input input-bordered"
                  name="picture"
                />
              </div>
              {/* seller name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">3. Seller Name</span>
                </label>
                <input
                  disabled
                  readOnly
                  defaultValue={seller_name}
                  type="text"
                  placeholder="Seller Name"
                  className="input input-bordered"
                  name="seller_name"
                />
              </div>
              {/* seller email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">4. Seller Email</span>
                </label>
                <input
                  disabled
                  readOnly
                  defaultValue={seller_email}
                  type="text"
                  placeholder="Seller Email"
                  className="input input-bordered"
                  name="seller_email"
                />
              </div>

              {/* Price */}
            </div>
            <div className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">5. Price</span>
                </label>
                <input
                  onChange={(e) => {
                    setNewPrice(e.target.value);
                  }}
                  value={newPrice}
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  name="price"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Category */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      6. Select Category
                    </span>
                  </label>
                  <select
                    disabled
                    readOnly
                    defaultValue="justice_league"
                    name="sub_category"
                    className="border-1 border"
                  >
                    <option value="marvel" key="1">
                      Marvel
                    </option>
                    <option value="justice_league" key="2">
                      Justice League
                    </option>
                    <option value="star_war" key="3">
                      Star Wars
                    </option>
                    <option value="transformers" key="4">
                      Transformers
                    </option>
                  </select>
                </div>
                {/* Rating */}
                <div className="form-control  ">
                  <label className="label">
                    <span className="label-text font-bold">7. Rating</span>
                  </label>
                  <select
                    disabled
                    readOnly
                    defaultValue={3}
                    className="border border-1"
                    name="rating"
                  >
                    <option value="1" key="5">
                      1
                    </option>
                    <option value="2" key="6">
                      2
                    </option>
                    <option value="3" key="7">
                      3
                    </option>
                    <option value="4" key="8">
                      4
                    </option>
                    <option value="5" key="9">
                      5
                    </option>
                  </select>
                </div>
                {/* AvailAble quantity */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      8. Available Quantity
                    </span>
                  </label>
                  <input
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                    type="number"
                    placeholder="Available Quantity"
                    className="input input-bordered"
                    name="available_quantity"
                    value={quantity}
                  />
                </div>
              </div>
              {/* AvailAble quantity */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    9. Short Description
                  </span>
                </label>
                <textarea
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  type="textarea"
                  placeholder="Short Description"
                  className="input input-bordered"
                  name="short_description"
                  value={!description ? " " : description}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-paste border-0 hover:bg-darkpaste ">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditToy;
