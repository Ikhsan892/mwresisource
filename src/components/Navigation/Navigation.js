import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Makersware Service Track
          </Typography>
          <Hidden smDown>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/invoice">Invoice</Button>
            <Button color="inherit">Informasi</Button>
          </Hidden>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation
