import { Link } from "react-router-dom";

const FooterInformation = () => {
  return (
    <div className="p-2">
      <h3 className="text-2xl font-bold">Information</h3>
      <div className="mt-4">
        <ul className="text-xl flex flex-col gap-3 ">
          <li>
            <Link className="hover:text-sweetPink" to="/">
              {" "}
              Product Support{" "}
            </Link>
          </li>
          <li>
            <Link className="hover:text-sweetPink" to="/">
              {" "}
              Checkout{" "}
            </Link>
          </li>
          <li>
            <Link className="hover:text-sweetPink" to="/">
              {" "}
              Policy{" "}
            </Link>
          </li>
          <li>
            <Link className="hover:text-sweetPink" to="/">
              {" "}
              Affiliate{" "}
            </Link>
          </li>
          <li>
            <Link className="hover:text-sweetPink" to="/">
              {" "}
              License Plicy{" "}
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default FooterInformation;
