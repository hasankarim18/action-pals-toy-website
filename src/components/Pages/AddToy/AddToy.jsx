import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { baseUrl } from "../../loaders/loaders";


const AddToy = () => {
     const { user } = useContext(AuthContext);

     const seller_name = user?.displayName ? user.displayName : 'No name found please update your name';
     const seller_email = user?.email ? user.email : ' ';

    // console.log(seller_name);
    
     

    const handleAddToy = (event)=> {
       

        event.preventDefault()
        const form = event.target 
        const name = form.name.value
        const picture = form.picture.value;
        const seller_name = user?.displayName 
        const seller_email = user?.email
        const price = form.price.value 
        const sub_category = form.sub_category.value 
        const rating      = form.rating.value
        const available_quantity = form.available_quantity.value        
        
        const toyData = {
          name,
          picture,
          seller_name,
          seller_email,
          price,
          sub_category,
          available_quantity,
          rating,
        };

        fetch(`${baseUrl}/toys`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(toyData),
        });
    }


    return (
      <>
        <div>
          <form onSubmit={handleAddToy}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">1. Toy Name</span>
                  </label>
                  <input
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
                    defaultValue={seller_name}
                    type="text"
                    placeholder="Seller Name"
                    className="input input-bordered"
                    name="seller_name"
                    readOnly
                  />
                </div>
                {/* seller email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      4. Seller Email
                    </span>
                  </label>
                  <input
                    defaultValue={seller_email}
                    type="text"
                    placeholder="Seller Email"
                    className="input input-bordered"
                    name="seller_email"
                    readOnly
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
                      type="number"
                      placeholder="Available Quantity"
                      className="input input-bordered"
                      name="available_quantity"
                      defaultValue={30}
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
                    type="textarea"
                    placeholder="Short Description"
                    className="input input-bordered"
                    name="short_description"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-paste border-0 hover:bg-darkpaste ">
                    Add a toy
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
};

export default AddToy;