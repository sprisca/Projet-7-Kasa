import React from 'react'
import { useState } from 'react'
import arrowUp from '../../assets/images/collapseup.png'
import './collapse.scss'
function Collapse({title, content}) {

  
    const [ open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open);
    };

  return (
    <div className='collapse'>
        <div className='collapse-title'>
            <h2>{title}</h2>
            <img src={arrowUp} alt='flèche up' className={open ? "arrow arrow-down" : "arrow arrow-up"} onClick={toggle} />
        </div>
        <div className={`collapse-content ${open ? "collapse-content-show" : "collapse-content-hide"}`}> {content} </div>
    </div>
  )
}

export default Collapse
