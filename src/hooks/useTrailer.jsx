import { useEffect } from "react";
import { MOVIE_OPTIONS } from "../utils/constant";

import { useDispatch} from "react-redux";
import { addTrailer } from "../Store/moviesSlice";

const useTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchTrailer();
  }, []);
  var fetchTrailer = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      MOVIE_OPTIONS
    );
    let json = await data.json();
    let movieVedio = json.results?.find((movie) => movie.type === "Trailer");
    let finalizedVedio = movieVedio ? movieVedio : json.results[0];
    dispatch(addTrailer(finalizedVedio));
  };
  return <div></div>;
};

export default useTrailer;
