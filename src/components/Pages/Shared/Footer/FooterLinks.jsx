import { Link } from "react-router-dom";


const FooterLinks = () => {
    return <div className="p-2">
        <h3 className="text-2xl font-bold">Quick Links</h3>
        <div className="mt-4">
            <ul className="text-xl flex flex-col gap-3 ">
                <li><Link className="hover:text-sweetPink" to="/all-toys" > All Toys </Link></li>
                <li><Link className="hover:text-sweetPink" to="/about" > About Us </Link></li>
                <li><Link className="hover:text-sweetPink" to="/blogs" > Blog </Link></li>
            </ul>
        </div>
    </div>;
};

export default FooterLinks;