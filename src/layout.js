import React from 'react'
import Navigation from './components/Navigation'
import Hidden from '@material-ui/core/Hidden';
import NavigationBottom from './components/NavigationBottom'
import Footer from './components/Footer'
import { makeStyles } from '@material-ui/core/styles';
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
