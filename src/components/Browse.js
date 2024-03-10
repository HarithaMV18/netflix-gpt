import React from "react";
import Header from "./Header";
import useFetchMovies from "../customHooks/useFetchMovies";

import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  //calling custom hook for movie list
  useFetchMovies()
  
  const moviedata = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <div className="relative  bg-black">
      <Header />
 <MainContainer  moviedata={moviedata}/>
    </div>
  );
};

export default Browse;
