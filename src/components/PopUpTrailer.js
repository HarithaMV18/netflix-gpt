import React, { useState } from "react";
import useFetchTrailerMovies from "../customHooks/useFetchTrailerMovies";
import { useSelector } from "react-redux";

const PopUpTrailer = ({ displayPopUp, vId }) => {
  useFetchTrailerMovies(vId, "popup");
  // const [error, setError] = useState(false);
  const videoId = useSelector((store) => store?.movies);


  return  (
    <div className="w-[100%] h-[100%]  fixed flex items-center justify-start z-[100]  inset-0  backdrop-blur-sm bg-black bg-opacity-30">
      <div className="text-white  m-auto w-full ">
        <div className=" w-full flex items-center justify-center relative">
          <div>
            <span
              className="absolute right-0 top-0 pr-4 text-xl cursor-pointer z-[100]"
              onClick={() => displayPopUp()}
            >
              x
            </span>
          </div>

          {videoId.movieTrailer!=="Trailer not present" ? (
            <>
              {" "}
              <iframe
                className="w-[100%]  aspect-video md:w-[70%]"
                src={`https://www.youtube.com/embed/${videoId.movieTrailer.key}?rel=0&controls=0&autohide=0&autoplay=1&loop`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
               
              ></iframe>
              <div className="bg-gradient-to-l  from-black w-[100%] md:w-[70%] h-[20%] lg:h-[12%] absolute top-0"></div>
            </>
          )  
          : (
            <p className="text-2xl">Trailer not available</p>
          )} 
        </div>
      </div>
    </div>
  );
};

export default PopUpTrailer;
