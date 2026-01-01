import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  addUpcomingMovies } from "../Store/moviesSlice";
import { MOVIE_OPTIONS } from "../utils/constant";
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchUpcoming();
  }, []);

  var fetchUpcoming = async () => {
    let movie = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US",
      MOVIE_OPTIONS
    );
    let json = await movie.json();
    console.log(json);
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
