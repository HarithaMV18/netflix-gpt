import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addActionMovies, addAdventureMovies, addComedyMovies, addFamilyMovies, addAnimationMovies, addNowPlayingMovies,addPopularMovies, addScienceFictionMovies, addTopRatedMovies,addUpcomingMovies, addWarMovies } from "../reduxUtils/movieSlice";
const useFetchMovies = (category) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieData =  () => {
      Object.keys(category).map(async(items)=>{
    
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/${category[items]}`
          );
          const data = await response.json();
   
          if(items==="now_playing") dispatch(addNowPlayingMovies(data.results));
          if(items==="popular")dispatch(addPopularMovies(data.results));
          if(items==="top_rated")dispatch(addTopRatedMovies(data.results));
          if(items==="upcoming")dispatch(addUpcomingMovies(data.results));
          if(items==="action")dispatch(addActionMovies(data.results));
          if(items==="adventure")dispatch(addAdventureMovies(data.results));
          if(items==="family")dispatch(addFamilyMovies(data.results));
          if(items==="comedy")dispatch(addComedyMovies(data.results));
          if(items==="science_fiction")dispatch(addScienceFictionMovies(data.results));
          if(items==="animation")dispatch(addAnimationMovies(data.results));
          if(items==="war")dispatch(addWarMovies(data.results));
        } catch (err) {
          console.log(err.message);
        }
      })
  
    };

    getMovieData();
  }, []);
};
export default useFetchMovies;
