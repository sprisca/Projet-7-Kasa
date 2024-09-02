import React from 'react'
import {Link} from 'react-router-dom'
import './error.scss'

function Error() {
  return (
    <div className='error'>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" className='link-error'>Retour à la page d'accueil</Link>
    </div>

  )
}

export default Error
