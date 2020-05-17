import React from 'react'
import Hidden from '@material-ui/core/Hidden';
import Navigation from './components/Navigation'
import NavigationBottom from './components/NavigationBottom'
import Footer from './components/Footer'
const Layout = ({children, toggle}) => {
  return(
    <div>
      <Navigation>
        {toggle}
      </Navigation>
        {children}
      <Footer/>
      <Hidden mdUp>
        <NavigationBottom/>
      </Hidden>
    </div>
  )
}

export default Layout
