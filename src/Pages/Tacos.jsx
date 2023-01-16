import React from 'react'
import { useParams } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import NavLink from '../components/NavLink'
import '../styles/tacos.css'

import tacos from '../tacos'

const Tacos = ( ) => {



  
    const {name} = useParams()

    const miTaco = tacos.find((taco) => taco.name === name);

  

  return (
    <div>
    
        <h1>{name}</h1>
        Has elegido el taco {name}
        <br />
        <img className='image-tacos' src={miTaco.image} alt="" />
        <NavLink to='details'>Ir a los detalles</NavLink>
        <Outlet/>

    </div>
  )
}

export default Tacos