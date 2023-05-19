import { Link, useRouteError } from "react-router-dom";
import {  FaSadTear } from 'react-icons/fa';


const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
      <div className="h-screen w-screen flex items-center justify-center text-center ">
        <div
          className="flex gap-4 flex-col items-center justify-center "
          id="error-page "
        >
          <h1 className="text-4xl">Oops!</h1>
          <div className="text-6xl">
            <FaSadTear className="mx-auto text-sweetPink " />
          </div>
          <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
          <p className="text-2xl">
            <i>{error.statusText || error.message}</i>
          </p>
          <div>
            <Link className="btn"> Back to home</Link>
          </div>
        </div>
      </div>
    );
};

export default Error;