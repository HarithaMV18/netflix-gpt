import React from "react";
import Header from "./Header";
import useFetchMovies from "../customHooks/useFetchMovies";

import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import movieCategory from "../utils/movieCategory";
import MovieList from "./MovieList";

import Search from "./Search";


const Browse = () => {
  //calling custom hook for movie list

  useFetchMovies(movieCategory);

  const moviedata = useSelector((store) => store?.movies);

  const searchEnable = useSelector((store) => store.search.searchToggle);

  return (
    <div className="relative w-full   bg-black">
      <Header />
      {!searchEnable ? (
       <>
          <MainContainer moviedata={moviedata?.nowPlayingMovies} />
          <div className="  relative z-[60]   md:-top-32 lg:-top-52 ">
            
             <MovieList
              title={"Now Playing"}
              moviedata={moviedata?.nowPlayingMovies}
            />
            <MovieList
              title={"Top Rated"}
              moviedata={moviedata?.topRatedMovies}
            />
            <MovieList
              title={"Adventure"}
              moviedata={moviedata?.adventureMovies}
            />
            <MovieList title={"Action"} moviedata={moviedata?.actionMovies} />
            <MovieList
              title={"Science Fiction"}
              moviedata={moviedata?.scienceFictionMovies}
            />
            <MovieList
              title={"Upcoming"}
              moviedata={moviedata?.upcomingMovies}
            />
            <MovieList title={"Family"} moviedata={moviedata?.familyMovies} />
            <MovieList title={"Popular"} moviedata={moviedata?.popularMovies} />

            <MovieList title={"Comedy"} moviedata={moviedata?.comedyMovies} />

            <MovieList
              title={"Animation"}
              moviedata={moviedata?.animationMovies}
            />
            <MovieList title={"War"} moviedata={moviedata?.warMovies} /> 
          
          </div>
        </>
      ) : (
        <Search />
      )}
   
      
    </div>
  );
};

export default Browse;
