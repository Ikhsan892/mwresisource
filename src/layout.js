import React from 'react'
import Navigation from './components/Navigation'
import Hidden from '@material-ui/core/Hidden';
import NavigationBottom from './components/NavigationBottom'
import Footer from './components/Footer'
const Layout = ({children}) => {
  return(
    <div>
      <Navigation/>
        {children}
      <Footer/>
      <Hidden mdUp>
        <NavigationBottom/>
      </Hidden>
    </div>
  )
}

export default Layout
