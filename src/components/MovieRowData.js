import React, { useState } from "react";
import { MOVIEIMG } from "../utils/constents";
import PopUpTrailer from "./PopUpTrailer";
import { useDispatch, useSelector } from "react-redux";
import useFetchTrailerMovies from "../customHooks/useFetchTrailerMovies";
import { addMovieTrailerKey } from "../reduxUtils/movieSlice";

const MovieRowData = ({ path, title, vId }) => {
  const [popUp, setPopUp] = useState(false);

  const dispatch = useDispatch();
  const handleClick = () => {
    setPopUp(!popUp);
  };
  const displayPopUp = () => {
    dispatch(addMovieTrailerKey({}));
    setPopUp(!popUp);
  };

  return (
    path && (
      <div className="w-24 lg:w-36   cursor-pointer rounded-md overflow-hidden ">
        <img
          src={MOVIEIMG + path}
          alt={title}
          className=" w-full hover:scale-[1.1] transition-all"
          onClick={() => handleClick()}
        />
      
        {popUp && <PopUpTrailer displayPopUp={displayPopUp} vId={vId} />}
      </div>
    )
  );
};

export default MovieRowData;
