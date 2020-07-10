import React from 'react'
import Hidden from '@material-ui/core/Hidden';
import Navigation from './components/Navigation'
import NavigationBottom from './components/NavigationBottom'
import Footer from './components/Footer'
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';
const Layout = ({children, toggle}) => {
  const [hidden, setHidden] = React.useState(true)
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if(document.body.scrollTop > 20 && document.documentElement.scrollTop > 20){
        setHidden(false)
      }else{
        setHidden(true)
      }
    });
    console.log(hidden)
  },[])
  return(
    <div>
      <Navigation>
        {toggle}
      </Navigation>
        {children}
        <Fab 
        hidden = {hidden}
        onClick={() => {
          document.body.scrollTop = 0; 
          document.documentElement.scrollTop = 0; 
        }}color="primary" aria-label="add" style={{position: 'fixed',
    bottom: '0',
    right: '0',
    marginBottom: '70px',
    marginRight: '20px',
    zIndex : 1,
    }}>
          <UpIcon />
        </Fab>
      <Footer/>
      <Hidden mdUp>
        <NavigationBottom/>
      </Hidden>
    </div>
  )
}

export default Layout
