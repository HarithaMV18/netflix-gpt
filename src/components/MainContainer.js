import React from "react";
import VideoContainer from "./VideoContainer";

import VideoDescription from "./VideoDescription";
const MainContainer = ({ moviedata }) => {
  // const randomMovie = Math.floor(Math.random() * 20);

  if (!moviedata[10]) return;

  const { id, original_title, overview, poster_path } = moviedata[10];

  return (
    <div className="text-white relative w-full bg-black overflow-hidden ">
      <VideoDescription title={original_title} overview={overview} vId={id}  />
      <VideoContainer vId={id} className="hidden" poster={poster_path}/>
    </div>
  );
};

export default MainContainer;
