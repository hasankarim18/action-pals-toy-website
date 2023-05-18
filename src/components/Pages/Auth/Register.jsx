import { useFormik } from "formik";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Register = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="w-full">
      <div className="w-full sm:w-3/4 md:w-1/2 mx-auto">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="input input-bordered"
            />
            {formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              className="input input-bordered"
            />
            {formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
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
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
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
              Register
            </button>
          </div>
        </form>
        <div className="mt-8">
          <div className="">
            <button className="flex  items-center btn capitalize text-2xl w-full gap-4 ">
              Sign Up With <FaGoogle />
            </button>
          </div>
          {/* <div>
            <button>
              Sign In With <FaGoogle />{" "}
            </button>
          </div> */}
          <div className="mt-4">
            <p className="text-xl capitalize">
             Aleredy Have An  Accoutn?{" "}
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
