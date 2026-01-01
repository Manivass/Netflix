import MoviesList from "./MoviesList";
import { FaAngleRight } from "react-icons/fa6";


const MoviesContainer = ({ title, movieList }) => {
  

  return (
    <div>
      {movieList && (
        <div >
          <h2 className="text-xl font-semibold pb-5 text-white flex gap-3">{title} <span className="text-lg translate-y-2"><FaAngleRight /></span></h2>
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
