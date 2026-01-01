import { useDispatch } from "react-redux";
import { addMovies } from "../Store/moviesSlice";
import { MOVIE_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
const useMoviesAPI  = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieAPI();
  }, []);
  var fetchMovieAPI = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-IN",
      MOVIE_OPTIONS
    );
    let json = await data.json();
    console.log(json);
    dispatch(addMovies(json.results));
  };
};
export default useMoviesAPI ;
