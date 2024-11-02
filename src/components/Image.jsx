import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({img}) => {
  return (
    <Link className='relative group overflow-hidden' to={"/image"}>
      <img  src={img.url.bg} alt="random image"  className="w-full h-[364px]
        shadow-lg shadow-gray-700/50  transition duration-1000 group-hover:scale-110 " />
        {/* <video src={img.url.bg} loop muted autoPlay className="rounded-lg shadow-lg shadow-gray-700/50 scale-90 "></video> */}
        <div className='absolute top-0  bg-black bg-opacity-30 w-full h-full  text-white  flex flex-col font-semibold items-center justify-center group-hover:opacity-0 transition-opacity  duration-1000 '>
          <h2 className='text-2xl'>{img.name}</h2>
          <p>{img.address}</p>
          </div>  
    </Link>
  )
}

export default Image