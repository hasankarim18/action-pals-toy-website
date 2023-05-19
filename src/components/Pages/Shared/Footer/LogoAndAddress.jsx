import { Link } from "react-router-dom";
import { FaAddressCard, FaEnvelopeSquare, FaMobileAlt } from 'react-icons/fa';



const LogoAndAddress = () => {
    return (
      <div className="p-2">
        <div>
          <Link
            to="/"
            className=" normal-case logo flex items-center gap-4 text-3xl sm:text-3xl md:text-4xl  lg:text-5xl  "
          >
            <img src="/logo.png" style={{ width: "50px" }} alt="" />
            <span className="text-paste">
              {" "}
              Action <span className="text-sweetPink">Pals</span>{" "}
            </span>
          </Link>
        </div>

        <p className="text-gray-500 mt-4 text-center sm:text-left ">
          Lorem ipsum dolor sit amet consectetur 
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex gap-4 items-center">
            <span className="text-2xl">
              {" "}
              <FaAddressCard className="text-sweetPink" />{" "}
            </span>
            <span>123 Grove Street London SW1A 1AA United Kingdom</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-2xl">
              {" "}
              <FaEnvelopeSquare className="text-sweetPink" />{" "}
            </span>
            <span>hello@actionpals.com</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-2xl">
              {" "}
              <FaMobileAlt className="text-sweetPink" />{" "}
            </span>
            <span>+11000393938949</span>
          </div>
        </div>
      </div>
    );
};

export default LogoAndAddress;