import React from 'react'
import {Footer, Header, NavigationBar} from 'components'
import {ContentWrapper, LayoutContent, LayoutWrapper} from './layout.styled'
import {Outlet} from 'react-router-dom'

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <LayoutContent>
        <NavigationBar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </LayoutContent>
      <Footer />
    </LayoutWrapper>
  )
}
