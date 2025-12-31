import React from "react";
import MoviesContainer from "./MoviesContainer";
import { useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../utils/constant";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondryContainer = () => {
  //Movies Popular
  //  -movies * n
  //Movies NowPlaying
  //  -movies * n
  //Movies
  //

  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const nowPlaying = useSelector((store) => store.movies.nowPlaying);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  return (
    <div className=" bg-black ">
      <div className=" px-20 pb-25 -mt-40 relative z-20">
        <div>
          <MoviesContainer title={"Now Playing"} movieList={nowPlaying} />
        </div>
        <div className="pt-15">
          <MoviesContainer title={"Popular Movies"} movieList={popularMovies} />
        </div>
        <div className="pt-15">
          <MoviesContainer
            title={"Top Rated Movies"}
            movieList={topRatedMovies}
          />
        </div>
        <div className="pt-15">
          <MoviesContainer
            title={"Upcoming Movies"}
            movieList={upComingMovies}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondryContainer;
