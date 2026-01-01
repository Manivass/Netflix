import React from "react";
import Header from "./Header";
import { MOVIE_OPTIONS } from "../utils/constant";
import useMoviesAPI from "../CustomHooks/useMoviesAPI";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  useMoviesAPI();

  // Main Container
  // - Movie Background
  // - Movie Title

  // Secondry Container
  //
  const toggle = useSelector((store) => store.GPTSearch.showGPTSearch);
  console.log(toggle);

  return (
    <div>
      <Header />
      {toggle ? (
        <GPTSearch />
      ) : (
        <div className="w-auto bg-black">
          <MainContainer />
          <div className="-mt-15">
            <SecondryContainer />
          </div>
        </div>
      )}
    </div>
  );
};

export default Browse;
