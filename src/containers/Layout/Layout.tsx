import React from 'react'
import {NavigationBar} from 'components'
import {LayoutContent, LayoutWrapper} from './layout.styled'
import {Outlet} from 'react-router-dom'

export const Layout = () => {
  return (
    <LayoutWrapper>
      <NavigationBar />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </LayoutWrapper>
  )
}
