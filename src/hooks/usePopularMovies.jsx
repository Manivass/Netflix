import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Store/moviesSlice";
import { MOVIE_OPTIONS } from "../utils/constant";
const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchPopularMovie();
  }, []);

  var fetchPopularMovie = async () => {
    let movie = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US",
      MOVIE_OPTIONS
    );
    let json = await movie.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
  };
 
};

export default usePopularMovies;
