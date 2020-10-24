import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Hidden } from "@material-ui/core";
import { Link, useLocation, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: (props) => props.display,
  },
  mainbar: {
    top: (props) => props.toponhome,
    [theme.breakpoints.down("xs")]: {
      top: (props) => props.top,
    },
    transition: "top 0.3s",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  skeletonPadding: {
    marginRight: "20px",
  },
}));

const Navigation = ({ children }) => {
  let url = useLocation();
  const [topval, setTopval] = useState("-60px");
  const [tophome, setTophome] = useState("-70px");
  const [display, setDisplay] = useState("block");
  const { title, navitem } = useSelector((state) => state.layout.navbar);
  const { layout_loading } = useSelector((state) => state.loading);
  let match = useRouteMatch("/details/:slug");
  useEffect(() => {
    window.onscroll = () => {
      if (url.pathname === "/home") {
        setTopval("-60px");
      } else {
        if (match) {
          setTopval("0px");
        } else {
          if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
          ) {
            setTopval("0px");
          } else {
            setTopval("-60px");
          }
        }
      }
    };
    if (url.pathname === "/home") {
      setTophome("-70px");
      setTopval("-60px");
      setDisplay("block");
    } else if (url.pathname === "/preview") {
      setDisplay("none");
    } else {
      if (match) {
        setTopval("0px");
      }
      setDisplay("block");
      setTophome("0px");
    }
  }, [url]);
  const props = { top: topval, toponhome: tophome, display: display };
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='primary' className={classes.mainbar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            {layout_loading ? (
              <Skeleton variant='rect' width={150} animation='wave' />
            ) : (
              title
            )}
          </Typography>
          <Hidden smDown>
            {layout_loading
              ? [1, 2, 3, 4].map((n) => {
                  return (
                    <Skeleton
                      variant='rect'
                      width={50}
                      animation='wave'
                      className={classes.skeletonPadding}
                    />
                  );
                })
              : navitem.map((n) => {
                  return (
                    <Button color='inherit' component={Link} to={n.to}>
                      {n.label}
                    </Button>
                  );
                })}
          </Hidden>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navigation;
