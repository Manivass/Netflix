import React from "react";
import { MOVIES_IMAGE_API } from "../utils/constant";

const MoviesList = ({ movies }) => {
  const { poster_path } = movies;

  return (
    <div className="w-72 flex-shrink-0 mr-10">
      <img className="rounded-xl h-72 w-full" src={MOVIES_IMAGE_API + poster_path} />
    </div>
  );
};

export default MoviesList;
