import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Store/moviesSlice";
import { MOVIE_OPTIONS } from "../utils/constant";
const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTopPopular();
  }, []);

  var fetchTopPopular = async () => {
    let movie = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US",
      MOVIE_OPTIONS
    );
    let json = await movie.json();
    console.log(json);
    dispatch(addTopRatedMovies(json.results));
  };
};

export default useTopRatedMovies;
