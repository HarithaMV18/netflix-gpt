import React, { useState } from "react";
import MovieRowData from "./MovieRowData";

const MovieList = ({ title, moviedata }) => {

  return (
    moviedata.length > 0 && (
    <div className=" text-white ">
        <h1 className=" text-sm  md:text-lg md:py-2 px-4  inline cursor-pointer " >
          {title}{" "}
        </h1>
        <div className=" flex  overflow-x-scroll no-scrollbar ">
          <div className="flex gap-3 py-3 px-4">
            {moviedata.map((items) => {
              return (
                <MovieRowData
                  path={items.poster_path}
                  title={items.title}
                  vId={items.id}
                  key={items.id}
                />
              );
            })}
          </div>
        </div>
        
      </div>
  
    )
  );
};
export default MovieList;
