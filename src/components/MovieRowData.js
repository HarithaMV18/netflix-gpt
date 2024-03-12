import React, { useState } from "react";
import { MOVIEIMG } from "../utils/constents";
import PopUpTrailer from "./PopUpTrailer";
const MovieRowData = ({ path, title, vId }) => {
  const [popUp, setPopUp] = useState(false);
  const displayPopUp = () => {
   
    setPopUp(!popUp);
  };

  return (
    <div
      className="w-36  transition-all cursor-pointer rounded-md overflow-hidden"
      onClick={() => displayPopUp()}
    >
      <img src={MOVIEIMG + path} alt={title} className=" w-full" />
      {popUp && <PopUpTrailer displayPopUp={displayPopUp} vId={vId} />}
    </div>
  );
};

export default MovieRowData;
