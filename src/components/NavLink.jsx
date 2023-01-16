import React from 'react'
import { NavLink as NavLinkRouterDom  } from 'react-router-dom'

const NavLink = ({to, children }) => {
  return (
    <NavLinkRouterDom className={({isActive}) => isActive ? 'is-active' : undefined } to={to}>
        {children}
    </NavLinkRouterDom>
  )
}

export default NavLink