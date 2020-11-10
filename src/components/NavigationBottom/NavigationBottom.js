import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BottomNavigation,
  BottomNavigationAction,
  SvgIcon,
} from "@material-ui/core";
import { withRouter, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import { ReactComponent as TrackIcon } from "./icons/timeline.svg";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { ReactComponent as BlogIcon } from "./icons/blogging.svg";
import { ReactComponent as HomeIcon } from "./icons/home.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    top: (props) => props.top,
    zIndex: 4,
    transition: "top 0.3s",
    width: "100%",
    height: "60px",
    position: "fixed",
    borderBottom: "2px solid #ccc",
    borderRadius: "0px 0px 15px 15px",
  },
}));
const Home = (props) => {
  return (
    <SvgIcon {...props}>
      <HomeIcon />
    </SvgIcon>
  );
};
const Track = (props) => {
  return (
    <SvgIcon {...props}>
      <TrackIcon />
    </SvgIcon>
  );
};
const Blog = (props) => {
  return (
    <SvgIcon {...props}>
      <BlogIcon />
    </SvgIcon>
  );
};
const icons = [<Home />, <Track />, <InsertDriveFileIcon />, <Blog />];
const NavigationBottom = ({ open }) => {
  let url = useLocation();
  const classes = useStyles({ top: open ? "55px" : "-60px" });
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
      case "/blog":
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
    <div>
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
                  label={
                    <Skeleton variant='rect' width={50} animation='wave' />
                  }
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
    </div>
  );
};

export default withRouter(NavigationBottom);
