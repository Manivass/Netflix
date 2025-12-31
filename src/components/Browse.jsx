import React from "react";
import Header from "./Header";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../Store/userSlice";
import { MOVIE_OPTIONS } from "../utils/constant";
import useMoviesAPI from "../hooks/useMoviesAPI";
import { removeMovies } from "../Store/moviesSlice";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";

const Browse = () => {
  useMoviesAPI();
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(removeMovies());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Main Container
  // - Movie Background
  // - Movie Title

  // Secondry Container
  //

  return (
    <div>
      <Header />
      <div className="absolute top-7 right-7 flex gap-6 items-center z-20">
        <img
          className="w-18 h-18  shadow-sm shadow-black"
          src="https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
        />
        <button
          className="bg-red-600 h-14 p-3 text-2xl text-white  cursor-pointer rounded-md "
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>

      <div className="w-auto bg-black">
        <MainContainer />
        <div className="-mt-15">
          <SecondryContainer />
        </div>
      </div>
    </div>
  );
};

export default Browse;
