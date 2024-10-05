import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({img}) => {
  return (
    <Link>
        <video src={img.url.bg} loop muted autoPlay className="rounded-lg shadow-lg shadow-gray-700/50 scale-90 hover:scale-100 transition-all"></video>  
    </Link>
  )
}

export default Image