import { useFormik } from "formik";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
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
  //  confirm password
   if (!values.confirmPassword) {
     errors.confirmPassword = "Required";
   } else if (values.confirmPassword != values.password) {
     errors.confirmPassword = "Password did not match";
   }

   if (!values.email) {
     errors.email = "Required";
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = "Invalid email address";
   }

  return errors;
};

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { createUser, updateUserInfo, loginWithGoogle } =
      useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate()
    
    const handleShowPassword = () => {
      setShowPassword((prev) => !prev);
    };
    const handleShowConfirmPassword = () => {
      setShowConfirmPassword((prev) => !prev);
    };

    const welcome = ()=> toast("Welcome you are successfully registered")

     const loginWithGoogleHandler = () => {
       loginWithGoogle()
         .then(() => {
           const notify = () => toast("Social sing in successful");
           notify();
           navigate("/");
         })
         .catch((error) => {
           console.log(error);
           // ...
         });
     };


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      photo:"",
      password: "",
      confirmPassword:""
    },
    validate,
    onSubmit: (values) => {
        createUser(values.email, values.password)
        .then((res) => {
          welcome()
          const newUser = res.user 
          // update profile
          updateUserInfo(newUser, values.name,values.photo)
          .then(()=> {
            navigate('/')
          })
          .catch(error => {
            console.log(error);
          })
        })
        .catch((error) => {
          const errorCode = JSON.stringify(error.code)
          const errorMessage = JSON.stringify(error.message)

          setSignUpError(`${errorMessage} with code ${errorCode}`)
          
          
          // ..
        });

    },
  });

  return (
    <div className="w-full">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="firstName">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="input input-bordered"
            />
            {formik.errors.name ? (
              <div className="text-rose-400">{formik.errors.name}</div>
            ) : null}
          </div>
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
            <label className="label" htmlFor="email">
              Photo url
            </label>
            <input
              id="photo"
              name="photo"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.photo}
              className="input input-bordered"
            />
          </div>
          {/* password */}
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
                onClick={() => {
                  handleShowPassword();
                }}
                className="cursor-pointer text-2xl absolute right-4 top-1/4"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {formik.errors.password ? (
              <div className="text-rose-400">{formik.errors.password}</div>
            ) : null}
          </div>
          {/* confirm password */}
          <div className="form-control">
            <label className="label" htmlFor="lastName">
              Confirm Password
            </label>
            <div className="w-full relative ">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                className="input w-full input-bordered"
              />
              <button
                onClick={() => {
                  handleShowConfirmPassword();
                }}
                className="cursor-pointer text-2xl absolute right-4 top-1/4"
              >
                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            {formik.errors.confirmPassword ? (
              <div className="text-rose-400">
                {formik.errors.confirmPassword}
              </div>
            ) : null}
          </div>
          <div className="p-1"></div>
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
              Register
            </button>
          </div>
        </form>
        <div className="mt-8">
          <div className="">
            <button
              onClick={loginWithGoogleHandler}
              className="flex  items-center btn capitalize text-2xl w-full gap-4 "
            >
              Sign Up With <FaGoogle />
            </button>
          </div>
          {/* <div>
            <button>
              Sign In With <FaGoogle />{" "}
            </button>
          </div> */}
          <div className="my-4 text-rose-400">
            {signUpError !== "" && signUpError}
          </div>
          <div className="mt-4">
            <p className="text-xl capitalize">
              Aleredy Have An Accoutn?{" "}
              <Link
                to="/login"
                className="text-paste underline-offset-2 underline"
              >
                {" "}
                Login{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
