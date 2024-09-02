import React from 'react'
import './container.scss'
function Container(props) {

  const children = props.children
  return (
    <div className='container'>{children}</div>
  )
}


export default Container
