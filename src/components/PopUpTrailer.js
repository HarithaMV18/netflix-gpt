import React from 'react'
import useFetchTrailerMovies from '../customHooks/useFetchTrailerMovies';
import { useSelector } from 'react-redux';

const PopUpTrailer = ({displayPopUp,vId}) => {
  useFetchTrailerMovies(vId,"popup");
  const videoId=useSelector((store)=>store?.movies?.movieTrailer)

  return (
    <div className='w-[100%] h-[100%]  fixed flex items-center justify-start z-[100]  inset-0  backdrop-blur-sm bg-black bg-opacity-30'>
        <div className='text-white  m-auto  w-[80%] '>
        <div className=" w-full flex items-center justify-center relative">
          <div>
          <span className='absolute right-0 top-0 pr-4 text-xl cursor-pointer ' onClick={()=>displayPopUp()}>x</span>
          </div>
            
      <iframe
        className="w-[80%] aspect-video"
        src={`https://www.youtube.com/embed/${videoId.key}?rel=0&showinfo=0&controls=0&autohide=0&autoplay=1&loop`}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div className='bg-gradient-to-l from-black w-[80%] h-[12%] absolute top-0'></div>
 
    </div>
        </div>
      
    </div>
  )
}

export default PopUpTrailer
