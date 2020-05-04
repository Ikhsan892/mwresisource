import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import { withRouter, Link } from "react-router-dom";
import ReceiptIcon from '@material-ui/icons/Receipt';
import InfoIcon from '@material-ui/icons/Info';

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
      <BottomNavigationAction label="Home" component={Link} to="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="Invoice" component={Link} to="/invoice" icon={<ReceiptIcon />} />
      <BottomNavigationAction label="Informasi" icon={<InfoIcon />} />
    </BottomNavigation>
  );
}

export default withRouter(NavigationBottom)
