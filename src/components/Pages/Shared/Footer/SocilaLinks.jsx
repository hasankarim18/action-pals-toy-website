
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from "react-icons/fa";

const SocilaLinks = () => {
    return (
      <div className="p-2">
        <h3 className="text-2xl font-bold">Quick Links</h3>
        <div className="mt-4">
          <ul className="text-xl flex flex-col gap-3 ">
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://instagram.com"
                className="hover:text-sweetPink flex gap-2 items-center"
              >
                {" "}
                <span>
                  {" "}
                  <FaInstagramSquare />{" "}
                </span>{" "}
                Instagram{" "}
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://facebook.com"
                className="hover:text-sweetPink flex gap-2 items-center"
              >
                {" "}
                <span>
                  {" "}
                  <FaFacebookSquare />{" "}
                </span>{" "}
                Facebook{" "}
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com"
                className="hover:text-sweetPink flex gap-2 items-center"
              >
                {" "}
                <span>
                  {" "}
                  <FaTwitterSquare />{" "}
                </span>{" "}
                Twitter{" "}
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://pinterest.com"
                className="hover:text-sweetPink flex gap-2 items-center"
              >
                {" "}
                <span>
                  {" "}
                  <FaPinterestSquare />{" "}
                </span>{" "}
                Pinterest{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default SocilaLinks;