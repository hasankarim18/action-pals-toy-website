import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../../Hooks/useTitle";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import UpdataUserProfile from "./UpdataUserProfile";

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserProfile = () => {
    useTitle("User Profile")
    const {user} = useContext(AuthContext)
 

     const [open, setOpen] = useState(false);
     const handleOpen = () => setOpen(true);
     const handleClose = () => setOpen(false);

    const usreImg = user?.photoURL

    return (
      <div className="mt-20 grid-cols-1 md:grid-cols-[_1fr,_2fr] grid ">
        <div>
          <img
            style={{ width: "200px", height: "200px" }}
            className="rounded-lg"
            src={usreImg}
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl">User Name: {user?.displayName}</h2>
          <h2 className="text-xl">User Email: {user?.email}</h2>
          <div>
            Email Status:{" "}
            {user?.emailVerified ? (
              <span className="text-green-400 font-bold">Verified Email</span>
            ) : (
              <span className="text-rose-400 font-bold">
                Email Not verified
              </span>
            )}
          </div>
          <div className="mt-4">
            <button className="btn btn-success text-white" onClick={handleOpen}>
              Edit Profile
            </button>
          </div>
        </div>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <UpdataUserProfile setOpen={setOpen} user={user} />
              <div className="text-right">
                <button
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="bg-rose-400 text-white rounded-lg p-2"
                >
                  Close
                </button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    );
};

export default UserProfile;