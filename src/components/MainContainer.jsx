import React from "react";
import { useSelector } from "react-redux";
import VedioTitle from "./VedioTitle";
import VedioBackground from "./VedioBackground";

const MainContainer = () => {
  const promotedMovie = useSelector((store) => store.movies?.nowPlaying);
  if (!promotedMovie) return null;
  const movieDetails = promotedMovie[1];
  console.log(movieDetails);

  let { original_title, overview, id } = movieDetails;

  return (
    <div>
      <VedioTitle original_title={original_title} overview={overview} />
      <VedioBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
