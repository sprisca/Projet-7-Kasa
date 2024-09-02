import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import Slide from '../../components/slide/slide.jsx';
import Error from '../error/error.jsx'
import Collapse from '../../components/collapse/collapse.jsx';
import Rating from '../../components/rating/rating.jsx';
import './logement.scss'

function Logement() {
  const { id } = useParams();
  const appart = data.find((logement) => logement.id === id);

  if (!appart) {
    return <Error />
  }

  return (
    <section className='appart'>
      <div className='appart-slide'>
        <Slide pictures={appart.pictures} title={appart.title} />
      </div>
    <div className='appart-content'>
      <div className='container'>
      <div className='apart-description'>
        <h1 className='appart-title'>{appart.title}</h1>
        <p className='appart-location'>{appart.location}</p>
        <div className='appart-tagsbox'>
        {appart.tags.map((tags,index)=>{
              return(
                <span className="appart-tag" key={index}>{tags}</span>
              )})
            }   
        </div>
      </div>
      <div className='appart-profil'>
      <div className='appart-host'>
        <p className='host-name'>{appart.host.name}</p>
        <img className='host-pictures' src={appart.host.picture} alt='photo owner' />
      </div>
      <Rating rating={appart.rating} />
      </div>
      </div>
      <div className='appart-collapse'>
        <Collapse contentClass='appart-collapse-text' title="Description" content={appart.description} />
        <Collapse contentClass='appart-collapse-text' title="Equipements" content={ appart.equipments.map((eq) => <li>{eq}</li> )} />
      </div>
    </div>
    </section>
  ) 
}

export default Logement
