import React from "react";
import Header from "./Header";
import useFetchMovies from "../customHooks/useFetchMovies";

import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import movieCategory from "../utils/movieCategory";
import MovieList from "./MovieList";
const Browse = () => {
  //calling custom hook for movie list
  
  useFetchMovies(movieCategory)
  
  const moviedata = useSelector((store) => store?.movies);

  return (
    <div className="relative w-full  bg-black">
      <Header />
      <MainContainer  moviedata={moviedata?.nowPlayingMovies}/>
      <div className=" -top-52 relative z-[60]">
      <MovieList title={"Now Playing"} moviedata={moviedata?.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} moviedata={moviedata?.topRatedMovies}/>
      <MovieList title={"Upcoming"} moviedata={moviedata?.upcomingMovies}/>
      <MovieList title={"popular"} moviedata={moviedata?.popularMovies}/>
      </div>
  
    </div>
  );
};

export default Browse;
