import React from 'react'
import {AboutImg, AboutWrapper} from './about.styled'

export const About = () => {
  return (
    <AboutWrapper>
      <h2>Project Details</h2>
      <p>
        Frontend application to display global medical dashboards and clinical
        portal for health personnel.
      </p>
      <h2>Project Architecture</h2>
      <AboutImg
        src={require('assets/microapps.png')}
        alt="Med MicroApp architecture"
      />
      <h3>More information</h3>
      <a
        href="https://github.com/carl0sarb0leda/microf-container-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github repository
      </a>
      <p>v1.0.0 - ©carl0sarb0leda</p>
    </AboutWrapper>
  )
}
