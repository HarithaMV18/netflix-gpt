import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const VideoDescription = ({title,overview}) => {

  return  (
     <div className='absolute z-40  w-full h-full  bg-gradient-to-r from-black'>
      <div className=' w-2/5 h-full flex flex-col justify-center px-5 gap-2'>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <p>{overview.length>150?overview.slice(0,151)+"...":overview}</p>
    </div>
   </div>
  )
}

export default VideoDescription
