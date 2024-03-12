import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APIKEY } from "../utils/constents";
import { addMovieBannerTrailerKey } from "../reduxUtils/movieSlice";
import { addMovieTrailerKey } from "../reduxUtils/movieSlice";
const useFetchTrailerMovies = (vId,type) => {
  const dispatch = useDispatch();

  useEffect(() => {
 if (vId===null) return
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

        if (type==="banner")dispatch(addMovieBannerTrailerKey(trailerId));
        if (type==="popup")dispatch(addMovieTrailerKey(trailerId));
      };

      fetchVideoData();
    } catch (err) {
      console.log(err.message);
    }
  }, []);
};

export default useFetchTrailerMovies;
