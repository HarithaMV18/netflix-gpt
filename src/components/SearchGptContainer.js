import React from "react";
import { useSelector } from "react-redux";
import { MOVIEIMG } from "../utils/constents";
import MovieList from "./MovieList";


const SearchGptContainer = () => {

    const {getGptResults,searchResults} = useSelector((store) => store?.search);
   console.log(getGptResults)
  return (
    getGptResults ?
   
    <div className=" w-full">
      {getGptResults.map((items,index)=> <MovieList title={items} moviedata={searchResults[index]} key={items}/>)}
    </div>
    
   
    :<p>{"oops, we haven't got that. Try searching...."}</p>
  );
};

export default SearchGptContainer;
