import React, { useRef, useState } from "react";
import openai from "../utils/openai";
import { APIKEY } from "../utils/constents";
import { useDispatch, useSelector } from "react-redux";
import { addSearchResults } from "../reduxUtils/searchSlice";
import SearchGptContainer from "./SearchGptContainer";

const Search = () => {
  const movieName = useRef(null);
  const dispatch = useDispatch();
 const [searchGptEnable,setSearchGptEnable]=useState(false)
  const [error, setError] = useState(null);
  
    const searchMovies = async (movies) => {
      //TMDB search API


      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${movies.trim()}&include_adult=false&language=en-US&page=1&api_key=${APIKEY}`
        );
        const data = await response.json();

        console.log(data.results);
        return data.results?data.results:null;
      } catch (err) {
        console.log(err.message);
      }
    };
    //GPT API call
const searchMoviesGpt=async()=>{
  
  const results = await openai.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Act as a movie recommendation system. Give only top 5 movie names of given 
                  query with only comma separated values
                  here is the query:${movieName.current.value}.Display result in below format:movie name,movie name,movie name,movie name,movie name, If you were not able to fetch or not able to understand or it is invalid,or it is not clear give result: nullvalue`
      },
    ],
    model: "gpt-3.5-turbo",
  });

  if (results?.choices[0]?.message?.content) {
   
    if(results?.choices[0]?.message?.content.toLowerCase()==="nullvalue") return dispatch(addSearchResults({getGptResults:null,searchResults:null}))

    const gptSearchMovieList =
      (results?.choices[0]?.message?.content).split(",");

    const tmdbResults = gptSearchMovieList?.map((movies) => {
      return searchMovies(movies);
    });
    
    const tmdbSearchResults = await Promise.all(tmdbResults)
      .then((results) => dispatch(addSearchResults({getGptResults:gptSearchMovieList,searchResults:results})))
      .catch((err) => console.log(err.message));

    
  } else {
    setError("oops, we haven't got that. Try searching for  movies...");
  }
  setSearchGptEnable(true)

}
  return (
    <div className="bg-black w-full h-screen text-white pt-12 ">
      <div className="py-5 ">
        <form onSubmit={(e) => e.preventDefault()} className=" max-[340px]:w-[80vw] w-64 md:w-fit m-auto  ">
          <input
            type="text"
            placeholder="search genres or movies ...."
            // max-[340px]:w-[80vw]
            // max-[340px]:w-[80vw]
            ref={movieName}
            className=" overflow-hidden block w-full md:inline-block  m-auto  md:w-[40vw] px-2 py-1 rounded text-black text-sm sm:m-auto"
          />
          <button
            className="bg-red-700 px-2  pb-1 block m-auto md:inline-block my-2 md:mx-2 md:my-0 rounded text-sm w-20 "
            onClick={searchMoviesGpt}
          >
            search
          </button>
        </form>
      </div>
      <div className="bg-black w-full h-fit ">
     { searchGptEnable && <SearchGptContainer />}
      </div>
    </div>
  );
};

export default Search;
