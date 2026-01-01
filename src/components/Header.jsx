import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LANGUAGE_OPTION, LOGO } from "../utils/constant";
import { removeMovies } from "../Store/moviesSlice";
import { signOut } from "firebase/auth";
import { removeUser } from "../Store/userSlice";
import { signOutToggle, toggleGPTSearch } from "../Store/toggleGPTSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.userDetails);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        navigate("/");
        // User is signed out
        // ...
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(removeMovies());
        dispatch(signOutToggle());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearch());
  };

  return (
    <div className="bg-gradient-to-b   from-black w-full absolute px-4 flex justify-between z-20">
      <div className="">
        <img className="w-45" alt="netflix" src={LOGO} />
      </div>
      {user && (
        <div className="absolute top-4 right-4 flex gap-4 items-center z-20">
          <select className="p-3 bg-blue-950 text-white outline-0">
            {LANGUAGE_OPTION?.map((lang) => <option key={lang.identifier} className="bg-white text-black">{lang.value}</option> )}
          </select>
          <button
            onClick={handleGPTSearch}
            className="bg-purple-700 text-white px-3 py-2  rounded-md cursor-pointer"
          >
            GPT Search
          </button>
          <img
            className="w-10 h-10 shadow-sm shadow-black"
            src="https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
          />
          <button
            className="bg-red-600 px-3 py-2 text-white  cursor-pointer rounded-md "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
