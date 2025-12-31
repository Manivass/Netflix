import { useSelector } from "react-redux";
import React from "react";
import { MOVIE_OPTIONS } from "../utils/constant";
import useTrailer from "../hooks/useTrailer";
const VedioBackground = ({ movieId }) => {
  useTrailer(movieId); // to fetch the movie ID to get Trailer

  const trailer = useSelector((store) => store.movies.trailer);

  return (
    <div className="">
      <iframe
        className="relative w-screen h-screen  min-w-full min-h-full"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VedioBackground;
