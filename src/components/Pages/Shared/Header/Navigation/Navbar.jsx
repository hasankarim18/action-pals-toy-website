import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showUserName, setShowUserName] = useState(false)
  


  const userPhoto = user?.photoURL || "/user.png";

  const signOutNotify = ()=> toast('Sign Out Successful!')

 

// handle sign out
  const handleSginOut = ()=> {

    logout()
      .then(() => {
       // navigate("/");
        signOutNotify();
       // setUser(null)

      })
      .catch((error) => {
        console.log(error);
      });
   
  }

  const classList = "text-xl hover:text-white p-2 rounded-md hover:bg-sweetPink";
  const activeClass =
    "hover:text-gray-200 text-white p-2 rounded-md bg-sweetPink text-xl  ";

  const NavItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? `${classList} ${activeClass}`
              : `${classList}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${classList} ${activeClass}` : `${classList}`
          }
          to="/all-toys"
        >
          All Toys
        </NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classList} ${activeClass}` : `${classList}`
              }
              to="/my-toys"
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${classList} ${activeClass}` : `${classList}`
              }
              to="/add-toy"
            >
              Add A Toy
            </NavLink>
          </li>
        </>
      ) : null}
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? `${classList} ${activeClass}` : `${classList}`
          }
          to="/blogs"
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* drop down */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="flex flex-col gap-4 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavItems}
          </ul>
        </div>
        {/* drop down */}
        <div>
          <Link
            to="/"
            className=" normal-case logo flex items-center gap-4 text-xl sm:text-3xl md:text-4xl  lg:text-5xl  "
          >
            <img src="/logo.png" style={{ width: "50px" }} alt="" />
            <span className="text-paste">
              {" "}
              Action <span className="text-sweetPink">Pals</span>{" "}
            </span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 menu-horizontal px-1">{NavItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="mr-2 flex">
          {showUserName ? (
            <div className="mr-4 p-2">
              <p className=" p-1 rounded-lg text-paste tracking-widest">
                {user?.displayName !== null
                  ? user?.displayName.length > 6
                    ? user.displayName.slice(0, 6) + "..."
                    : user.displayName
                  : "Please update Name"}
              </p>
            </div>
          ) : null}

          <div className="relative">
            {user && (
              <Link
                onMouseEnter={() => {
                  setShowUserName(true);
                }}
                onMouseLeave={() => {
                  setShowUserName(false);
                }}
                to="/user-profile"
              >
                <img
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-full border-4 border-paste"
                  src={`${userPhoto} `}
                  alt="user"
                />
              </Link>
            )}
          </div>
        </div>
        {!user ? (
          <Link
            className=" transition-all  duration-500 p-2 rounded-md  text-white   hover:bg-white hover:text-paste bg-paste border-2 border-paste "
            to="/login"
          >
            Sign In
          </Link>
        ) : (
          <button
            onClick={handleSginOut}
            className=" transition-all  duration-500 p-2 rounded-md  text-white   hover:bg-white hover:text-sweetPink bg-sweetPink border-2 border-sweetPink "
            to="/logout"
          >
            {" "}
            Sign Out{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;


