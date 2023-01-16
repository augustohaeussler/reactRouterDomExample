import React from 'react'
import { Link } from 'react-router-dom'
import tacos from '../tacos'
import '../styles/searchPage.css'

const SearchPage = () => {

  

  return (

    <div>
        <h2>Elige tu taco favorito</h2>
        
        <ul className='ul-searchPage'>
            
            {tacos.map(taco => (
              <li key={taco.name}>
                <Link  to={`/tacos/${taco.name}`}>{taco.name}</Link>
                <img src={taco.image} alt={taco.name} />
              </li>
              ) )}

        </ul>

    </div>
  )
}

export default SearchPage