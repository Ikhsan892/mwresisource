import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
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

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      color="primary"
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Invoice" icon={<ReceiptIcon />} />
      <BottomNavigationAction label="About" icon={<InfoIcon />} />
    </BottomNavigation>
  );
}

export default NavigationBottom
