import MoviesList from "./MoviesList";
import { FaAngleRight } from "react-icons/fa6";


const MoviesContainer = ({ title, movieList }) => {
  console.log(movieList);
  

  return (
    <div>
      {movieList && (
        <div >
          <h2 className="text-4xl font-semibold pb-5 text-white flex gap-3">{title} <span className="text-2xl translate-y-3"><FaAngleRight /></span></h2>
          <div className="flex overflow-x-auto scrollbar-hidden scrollbar-hide scroll-smooth" >
            {movieList?.map((movies) => (
              <MoviesList movies={movies} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default MoviesContainer;
