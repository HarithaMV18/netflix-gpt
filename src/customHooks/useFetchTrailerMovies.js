import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APIKEY } from "../utils/constents";
import { addMovieTrailerKey } from "../reduxUtils/movieSlice";
const useFetchTrailerMovies = (vId) => {
  const dispatch = useDispatch();

  useEffect(() => {
 
    try {
      const fetchVideoData = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${vId}/videos?api_key=${APIKEY}`
        );

        const data = await response.json();
        const filteredVideos =await data?.results?.filter(
          (item) =>
            item?.type === "Trailer" 
        )[0];

        const trailerId = filteredVideos?filteredVideos:data?.results[0];

        dispatch(addMovieTrailerKey(trailerId));
      };

      fetchVideoData();
    } catch (err) {
      console.log(err.message);
    }
  }, []);
};

export default useFetchTrailerMovies;
