import  { useState } from 'react'
import arrowL from '../../assets/images/arrowleft.png'
import arrowR from '../../assets/images/arrowright.png'
import './slide.scss'
import React from 'react'

function Slide({title, pictures}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesLength = pictures.length;
  const count = `${currentIndex +1}/ ${slidesLength}`;

  const nextSlide = () => {
    setCurrentIndex((currentIndex)=>(currentIndex+1) % slidesLength);
  };

  const previousSlide = () => {
    setCurrentIndex((currentIndex) =>(currentIndex-1+slidesLength) % slidesLength);
  };

  return (
    <div className='slide-container'>
      <img src={pictures[currentIndex]} alt={title} className='slide-pictures' />
      {slidesLength > 1 &&
      <div className='slide-arrow'>
        <button className='arrow-btn' onClick={previousSlide}>
          <img src={arrowL} alt='flèche gauche' className='arrow-left'/>
        </button>
        <button className='arrow-btn' onClick={nextSlide}>
          <img src={arrowR} alt='flèche droite' className='arrow-right' />
        </button>
        </div>
      }

      {slidesLength > 1 &&
      <div className='count'>{count}</div>}
    </div>
  )
}

export default Slide
