import FooterInformation from "./FooterInformation";
import FooterLinks from "./FooterLinks";
import LogoAndAddress from "./LogoAndAddress";
import SocilaLinks from "./SocilaLinks";
import { FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa } from "react-icons/fa";

const Footer = () => {
    return (
      <>
        <div className="mt-8 bg-gray-100 py-8 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* logo and adddress */}
            <div>
              <LogoAndAddress />
            </div>
            {/* quick links */}
            <div>
              <FooterLinks />
            </div>
            {/* information */}
            <div>
              <FooterInformation />
            </div>
            {/* follow on us */}
            <div>
              <SocilaLinks />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row text-center md:text-left py-4 bg-paste text-white ">
          <p className="p-2">&copy; Copyright Action Pals</p>
          <div className="p-2">
            <ul className="flex  justify-center items-center gap-4 ">
              <li className="text-3xl">
                {" "}
                <FaCcVisa />{" "}
              </li>
              <li className="text-3xl">
                {" "}
                <FaCcPaypal />{" "}
              </li>
              <li className="text-3xl">
                {" "}
                <FaCcMastercard />{" "}
              </li>
              <li className="text-3xl">
                {" "}
                <FaCcStripe />{" "}
              </li>
            </ul>
          </div>
        </div>
      </>
    );
};

export default Footer;