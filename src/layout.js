import React from 'react'
import Hidden from '@material-ui/core/Hidden';
import Navigation from './components/Navigation'
import NavigationBottom from './components/NavigationBottom'
import Footer from './components/Footer'
import MCarousel from './components/MCarousel'
const Layout = ({children, toggle}) => {
  return(
    <div>
      <Navigation>
        {toggle}
      </Navigation>
      <Hidden smUp>
        <MCarousel/>
      </Hidden>
        {children}
      <Footer/>
      <Hidden mdUp>
        <NavigationBottom/>
      </Hidden>
    </div>
  )
}

export default Layout
