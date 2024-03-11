import React from "react";
import MovieRowData from "./MovieRowData";

const MovieList = ({ title, moviedata }) => {
  return (
    moviedata.length > 0 && (
      <div className=" text-white px-4  ">
        <h1 className="py-2">{title}</h1>
        <div className=" flex  overflow-x-scroll no-scrollbar ">
          <div className="flex gap-3">
            {moviedata.map((items) => {
             
              return (
                <MovieRowData
                  path={items.poster_path}
                  title={items.title}
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
