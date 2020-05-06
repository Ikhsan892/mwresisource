import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@material-ui/core';
import { withRouter, Link } from "react-router-dom";
import {
  Receipt,
  Info,
  Home
} from '@material-ui/icons';

const useStyles = makeStyles(theme =>({
  root: {
     bottom : 0,
     width : '100%',
     position : 'fixed'
  },
}));

const NavigationBottom = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleRoute = (event,newValue) => {
    setValue(newValue);
  }
  return (
    <BottomNavigation
      value={value}
      onChange={handleRoute}
      showLabels
      className={classes.root}
      color="primary"
    >
      <BottomNavigationAction label="Home" component={Link} to="/" icon={<Home />} />
      <BottomNavigationAction label="Invoice" component={Link} to="/invoice" icon={<Receipt />} />
      <BottomNavigationAction label="Informasi" component={Link} to="/information" icon={<Info />} />
    </BottomNavigation>
  );
}

export default withRouter(NavigationBottom)
