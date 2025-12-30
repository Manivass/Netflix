import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/userSlice";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constant";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSign = useSelector((store) => store);
  console.log(toggleSign);
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
  return (
    <div className="bg-gradient-to-b w-full  from-black absolute px-4 flex justify-between z-20">
      <div className="">
        <img
          className="w-72"
          alt="netflix"
          src={LOGO}
        />
      </div>
    </div>
  );
};
export default Header;
