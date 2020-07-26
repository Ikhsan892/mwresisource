import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { withRouter, Link, useLocation } from "react-router-dom";
import { Receipt, Info, Home, TrackChanges } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    width: "100%",
    position: "fixed",
    borderTop: "2px solid #ccc",
    zIndex: 1,
  },
}));

const NavigationBottom = () => {
  let url = useLocation()
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  React.useEffect(() => {
    let number = pagetonumber(url);
    setValue(number)
  },[])
  const pagetonumber = (url) => {
    switch(url.pathname){
      case '/home':
        return 0
      break
      case '/track':
        return 1
      break
      case '/invoice':
        return 2
      break
      case '/information':
        return 3
      break
      default :
        return 0
    }
  }
  const handleRoute = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleRoute}
      showLabels
      className={classes.root}
      color='primary'>
      <BottomNavigationAction
        label='Home'
        component={Link}
        to='/home'
        icon={<Home />}
      />
      <BottomNavigationAction
        label='Track'
        component={Link}
        to='/track'
        icon={<TrackChanges />}
      />
      <BottomNavigationAction
        label='Invoice'
        component={Link}
        to='/invoice'
        icon={<Receipt />}
      />
      <BottomNavigationAction
        label='Informasi'
        component={Link}
        to='/information'
        icon={<Info />}
      />
    </BottomNavigation>
  );
};

export default withRouter(NavigationBottom);
