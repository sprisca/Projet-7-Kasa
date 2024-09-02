import starGrey from '../../assets/images/starGrey.png'
import starRed from '../../assets/images/starRed.png'
import React from 'react'


function Rating({rating}) {
    const stars = []

    for (let i = 1; i <= 5; i++){
        const filled = i <= rating
        const star = filled? starRed:starGrey
        stars.push(<img src={star} key={i} className='stars' />);
    }
  return (
    <div className='rating'>{stars}</div>
  )
}

export default Rating
