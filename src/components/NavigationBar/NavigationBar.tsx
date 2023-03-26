import React from 'react'
import {NavLink} from 'react-router-dom'
import {NavBarWrapper} from './navigationBar.styled'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faLaptopMedical,
  faChartLine,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons'

export const NavigationBar = () => {
  return (
    <NavBarWrapper>
      <NavLink className="navigation__link" to="/">
        <FontAwesomeIcon icon={faChartLine} size="2x" />
        Dashboard
      </NavLink>
      <NavLink className="navigation__link" to="portal">
        <FontAwesomeIcon icon={faLaptopMedical} size="2x" />
        Portal
      </NavLink>
      <NavLink className="navigation__link" to="about">
        <FontAwesomeIcon icon={faInfoCircle} size="2x" />
        About
      </NavLink>
    </NavBarWrapper>
  )
}
