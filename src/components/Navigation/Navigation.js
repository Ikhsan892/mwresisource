import React, {useEffect,useState} from 'react';
// import PropTypes from 'prop-types';
import { makeStyles} from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden
} from '@material-ui/core';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mainbar : {
    top : '0px',
    [theme.breakpoints.down('xs')]:{
      top : props => props.top
    },
    transition : 'top 0.3s'
  },
  sectionDesktop: {
   display: 'none',
   [theme.breakpoints.up('md')]: {
     display: 'flex',
   },
 },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = ({children}) => {
  const [topval, setTopval] = useState('-60px')
  useEffect(() => {
    window.onscroll = () => {
      if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        setTopval('0px')
      }else{
        setTopval('-60px')
      }
    }
  },[])
  const props = { top : topval };
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary" className={classes.mainbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Makersware Service Track
          </Typography>
          <Hidden smDown>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/invoice">Invoice</Button>
            <Button color="inherit" component={Link} to="/information">Informasi</Button>
          </Hidden>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navigation
