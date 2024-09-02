import React from 'react'
import './banner.scss'


function Banner({titre, src, alt}) {
  return (
    <div className='banner'>
        <h1>{titre}</h1>
        <img className='banner-img' src = {src} alt={alt} />        
      
    </div>
  )
}

export default Banner
