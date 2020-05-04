import React from 'react'
import Navigation from './Navigation'
import '../styles/main.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  )
}

export default Layout
