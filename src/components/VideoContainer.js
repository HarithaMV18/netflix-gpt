import React from "react";

import { useSelector } from "react-redux";

import useFetchTrailerMovies from "../customHooks/useFetchTrailerMovies";
import { MOVIEIMG } from "../utils/constents";

const VideoContainer = ({ vId,poster }) => {
  //calling custom hook for movie trailer

  useFetchTrailerMovies(vId,"banner");
  const movieTrailer = useSelector((store) => store.movies?.movieBannerTrailer);
if(!movieTrailer) return
  return (
    <div className=" w-screen ">
      <iframe
        className="w-screen aspect-video hidden  md:block"
        src={`https://www.youtube.com/embed/${movieTrailer.key}?rel=0&showinfo=0&controls=0&autohide=0&autoplay=1&mute=1&loop`}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className="lg:hidden md:hidden w-full bg-black pt-12 pb-2 ">
      <img src={MOVIEIMG+poster} alt="" className="w-52  m-auto rounded-md "/>
      </div>
      
 
    </div>
  );
};

export default VideoContainer;
