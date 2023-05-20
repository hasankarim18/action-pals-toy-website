import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../../Hooks/useTitle";

const UserProfile = () => {
    useTitle("User Profile")
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1 className="text-6l">
                {user.email}
            </h1>
        </div>
    );
};

export default UserProfile;