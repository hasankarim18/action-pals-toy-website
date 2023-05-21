

const UpdataUserProfile = ({user}) => {

    const handleProfile = (event)=> {

    }

    return (
      <div>
        <form>
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    );
};

export default UpdataUserProfile;