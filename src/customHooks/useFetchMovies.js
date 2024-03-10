import { useEffect } from "react";
import { APIKEY } from "../utils/constents";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../reduxUtils/movieSlice";
const useFetchMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}`
        );
        const data = await response.json();
        
        dispatch(addNowPlayingMovies(data.results));
      } catch (err) {
        console.log(err.message);
      }
    };

    getMovieData();
  }, []);
};
export default useFetchMovies;
