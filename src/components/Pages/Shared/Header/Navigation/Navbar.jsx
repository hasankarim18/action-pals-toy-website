import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProviders";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  console.log(user);

  const signOutNotify = ()=> toast('Sign Out Successful!')

// handle sign out
  const handleSginOut = ()=> {
    navigate('/')
    signOutNotify()
  }

  const classList = "text-xl hover:text-sweetPink"
  const activeClass = "text-white p-2 rounded-md bg-sweetPink text-xl hover:text-gray-200 ";

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


