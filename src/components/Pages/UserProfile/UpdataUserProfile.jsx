import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";


const UpdataUserProfile = ({ user, setOpen }) => {
  const { updateUserProfile } = useContext(AuthContext);

  const updateNotify = () => toast("Update Successful");
  const updateNotifyFailed = () => toast("Update Failed Please try again");

  const handleProfile = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;

    updateUserProfile(user, name, photo)
      .then(() => {
        updateNotify();
        setOpen(false)
      })
      .catch(() => {
        updateNotifyFailed();
        setOpen(true)
      });

  
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleProfile}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">New Name</span>
          </label>
          <input
            type="text"
            name="name"
            className="input input-bordered"
            defaultValue={user?.displayName}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">New Photo url</span>
          </label>
          <input
            type="text"
            placeholder=""
            name="photo"
            className="input input-bordered"
            defaultValue={user?.photoURL}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdataUserProfile;