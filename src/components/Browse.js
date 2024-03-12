import React, { useState } from "react";
import Header from "./Header";
import useFetchMovies from "../customHooks/useFetchMovies";

import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import movieCategory from "../utils/movieCategory";
import MovieList from "./MovieList";
import PopUpTrailer from "./PopUpTrailer";
const Browse = () => {
  //calling custom hook for movie list

  useFetchMovies(movieCategory);

  const moviedata = useSelector((store) => store?.movies);
  // const [popUp, setPopUp] = useState(false);
  // const displayPopUp = () => {
  //   setPopUp(!popUp);
  // };
  return (
    <div className="relative w-full  bg-black">
      <Header />
      <MainContainer moviedata={moviedata?.nowPlayingMovies} />
      <div className=" -top-52 relative z-[60]">
        <MovieList
          title={"Now Playing"}
          moviedata={moviedata?.nowPlayingMovies}
        />
        <MovieList title={"Top Rated"} moviedata={moviedata?.topRatedMovies} />
        <MovieList title={"Upcoming"} moviedata={moviedata?.upcomingMovies} />
        <MovieList title={"popular"} moviedata={moviedata?.popularMovies} />
      </div>
      {/* {popUp && <PopUpTrailer displayPopUp={displayPopUp} videoId={"UBBHpoW3AKA"}/>} */}
    </div>
  );
};

export default Browse;
