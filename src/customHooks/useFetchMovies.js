import { useEffect } from "react";
import { APIKEY } from "../utils/constents";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies,addPopularMovies, addTopRatedMovies,addUpcomingMovies } from "../reduxUtils/movieSlice";
const useFetchMovies = (category) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieData =  () => {
      Object.keys(category).map(async(items)=>{
    
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/${category[items]}?api_key=${APIKEY}`
          );
          const data = await response.json();
         
          if(items==="now_playing") dispatch(addNowPlayingMovies(data.results));
           if(items==="popular")dispatch(addPopularMovies(data.results));
          if(items==="top_rated")dispatch(addTopRatedMovies(data.results));
          if(items==="upcoming")dispatch(addUpcomingMovies(data.results));
        } catch (err) {
          console.log(err.message);
        }
      })
  
    };

    getMovieData();
  }, []);
};
export default useFetchMovies;
