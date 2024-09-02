import React from 'react'
import './cards.scss'
import data from '../../data/logements.json'
import { Link} from "react-router-dom"

function Cards() {
  return (
    <div className='cards'>
      {data.map(({id, title, cover}) => (
        <Link className='card' to={`Logement/${id}`} key={id}>
          <img className='card-img' src = {cover} alt="preview de l'appart" />
          <div className='card-title'>
            <h2 className='card-subtitle'>{title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cards
