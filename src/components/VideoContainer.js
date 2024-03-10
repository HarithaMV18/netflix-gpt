import React, { useEffect } from "react";

import { useSelector } from "react-redux";

import useFetchTrailerMovies from "../customHooks/useFetchTrailerMovies";

const VideoContainer = ({ vId }) => {
  //calling custom hook for movie trailer

  useFetchTrailerMovies(vId);
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  return (
    <div className=" w-screen ">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${movieTrailer.key}?rel=0&showinfo=0&controls=0&autohide=0&autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
 
    </div>
  );
};

export default VideoContainer;
