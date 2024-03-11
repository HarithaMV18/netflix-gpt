import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const VideoDescription = ({title,overview}) => {

  return  (
     <div className='absolute z-40  w-full h-full  bg-gradient-to-r from-black'>
      <div className=' w-2/5 h-full pb-7 flex flex-col justify-center px-5 gap-2 lg:w-3/5 md:w-3/5 max-[880px]:w-4/5'>
      <h1 className='font-bold text-2xl max-[880px]:text-xl'>{title}</h1>
      <p className='max-[880px]:text-sm'>{overview.length>150?overview.slice(0,151)+"...":overview}</p>
    </div>
   </div>
  )
}

export default VideoDescription
