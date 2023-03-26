import React from 'react'
import {NavLink} from 'react-router-dom'
import {NavBarWrapper} from './navigationBar.styled'

export const NavigationBar = () => {
  return (
    <NavBarWrapper>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="portal">Portal</NavLink>
      <NavLink to="about">About</NavLink>
    </NavBarWrapper>
  )
}
