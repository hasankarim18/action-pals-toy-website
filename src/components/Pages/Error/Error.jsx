import { useRouteError } from "react-router-dom";
import {  FaSadTear } from 'react-icons/fa';


const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
      <div className="h-screen w-screen flex items-center justify-center ">
        <div id="error-page">
          <h1>Oops!</h1>
          <div className="text-6xl">
            <FaSadTear />
          </div>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </div>
    );
};

export default Error;