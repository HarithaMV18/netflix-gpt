import React from 'react'


const VideoDescription = ({title,overview}) => {

  return  (
     <div className='absolute z-40  w-full h-full  bg-gradient-to-r from-black hidden md:block'>
      <div className=' w-2/5 h-full pb-7 flex flex-col justify-center px-5 gap-2 lg:w-3/5  md:w-4/5 md:mb-2'>
      <h1 className='font-bold text-2xl max-[880px]:text-xl'>{title}</h1>
      <p className='max-[880px]:text-sm lg:pb-28'>{overview.length>150?overview.slice(0,151)+"...":overview}</p>
    </div>
   </div>
  )
}

export default VideoDescription
