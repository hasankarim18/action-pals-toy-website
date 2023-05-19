import { useFormik } from "formik";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {

  

  const errors = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Password must have at least 6 charecter";
  }

 
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { LogInWithEmailPassword, loginWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  const handleShowPassword = ()=> {
    setShowPassword(prev =>!prev)
  }

  let from = location.state?.from?.pathname || "/";

  // login with google 
  const loginWithGoogleHandler = ()=> {
    loginWithGoogle()
      .then(() => {
        const notify = ()=> toast("Social sing in successful")
        notify()
        navigate(from)
      })
      .catch((error) => {
       
        console.log(error);
        // ...
      });
  }
  
  const formik = useFormik({
    initialValues: {
      password:"",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      const email = values.email 
      const password = values.password 
      LogInWithEmailPassword(email, password)
        .then(() => {
          // Signed in
         // const user = userCredential.user;
          // setUser(user)
          navigate(from)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        //  console.log(errorCode, errorMessage);
          // ..
          setLoginError(`${errorMessage} with code ${errorCode}`)
        });
      
    },
  });
  return (
    <div className="w-full">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="input input-bordered"
            />
            {formik.errors.email ? (
              <div className="text-rose-400">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="lastName">
              Password
            </label>
            <div className="w-full relative ">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={formik.handleChange}
                value={formik.values.password}
                className="input w-full input-bordered"
              />
              <button
                onClick={handleShowPassword}
                className="cursor-pointer text-2xl absolute right-4 top-1/4"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {formik.errors.password ? (
              <div className="text-rose-400">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="mt-4">
            <button
              className="bg-paste 
            text-2xl
             tracking-widest
              border-2
              border-paste
              text-white py-2
              px-12
              rounded-md 
              hover:bg-white
              hover:text-paste 
              transition-all
              duration-500
               "
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-8">
          <div className="">
            <button
              onClick={loginWithGoogleHandler}
              className="flex  items-center btn capitalize text-2xl w-full gap-4 "
            >
              Sign In With <FaGoogle />
            </button>
          </div>
          {/* <div>
            <button>
              Sign In With <FaGoogle />{" "}
            </button>
          </div> */}
          <div className="my-4 text-rose-400">
            {loginError !== "" && loginError}
          </div>
          <div className="mt-4">
            <p className="text-xl">
              Dont Have Accoutn?{" "}
              <Link
                to="/register"
                className="text-paste underline-offset-2 underline"
              >
                {" "}
                Sign Up{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
