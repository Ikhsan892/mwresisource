import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { withRouter, Link, useLocation } from "react-router-dom";
import { Receipt, Info, Home, TrackChanges } from "@material-ui/icons";
import { useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    bottom: 0,
    width: "100%",
    height: "60px",
    position: "fixed",
    borderTop: "2px solid #ccc",
    borderRadius: "30px 30px 0px 0px",
    zIndex: 1,
  },
}));
const icons = [<Home />, <TrackChanges />, <Receipt />, <Info />];
const NavigationBottom = () => {
  let url = useLocation();
  const classes = useStyles();
  const [value, setValue] = React.useState(1);
  const { navitem } = useSelector((state) => state.layout.navbar);
  const { layout_loading } = useSelector((state) => state.loading);
  React.useEffect(() => {
    let number = pagetonumber(url);
    handleRoute(number);
  }, [url]);
  const pagetonumber = (url) => {
    switch (url.pathname) {
      case "/home":
        return 0;
        break;
      case "/track":
        return 1;
        break;
      case "/invoice":
        return 2;
        break;
      case "/information":
        return 3;
        break;
      default:
        return -1;
    }
  };
  const handleRoute = (newValue) => {
    setValue(newValue);
    window.scrollTo(1, 1);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleRoute}
      showLabels
      className={classes.root}
      color='primary'>
      {layout_loading
        ? [0, 1, 2, 3].map((index) => {
            return (
              <BottomNavigationAction
                icon={icons[index]}
                label={<Skeleton variant='rect' width={50} animation='wave' />}
              />
            );
          })
        : navitem.map((n, index) => {
            return (
              <BottomNavigationAction
                label={n.label}
                component={Link}
                to={n.to}
                icon={icons[index]}
              />
            );
          })}
    </BottomNavigation>
  );
};

export default withRouter(NavigationBottom);
