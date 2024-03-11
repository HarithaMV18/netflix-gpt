import React from "react";
import { MOVIEIMG } from "../utils/constents";
const MovieRowData = ({ path, title }) => {
  // const {poster_path,title,backdrop_path}=data

  return (
    <div  className="w-28">
      <img src={MOVIEIMG + path} alt={title} className="rounded-md"/>
    </div>
  );
};

export default MovieRowData;
