import React from 'react'
import { useParams, Link } from 'react-router-dom'
import tacos from '../tacos'


const Details = () => {

    const {name } = useParams()

    const miTaco = tacos.find((taco) => taco.name === name);


  return (
    <div>
      <h3>Detalles del taco {name}</h3>

      <p>{miTaco.details}</p>

      <h1>${miTaco.price}</h1>

      <Link to={-1}>Ocultar detalles</Link>
      
    </div>

    
  )
}

export default Details