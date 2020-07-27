import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Hidden } from "@material-ui/core";
import { Link, useLocation, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
}));

const Navigation = ({ children }) => {
  let url = useLocation();
  const [topval, setTopval] = useState("-60px");
  const [tophome, setTophome] = useState("-70px");
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
    } else {
      if (match) {
        setTopval("0px");
      }
      setTophome("0px");
    }
  }, [url]);
  const props = { top: topval, toponhome: tophome };
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='primary' className={classes.mainbar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Makersware Service
          </Typography>
          <Hidden smDown>
            <Button color='inherit' component={Link} to='/home'>
              Home
            </Button>
            <Button color='inherit' component={Link} to='/track'>
              Track
            </Button>
            <Button color='inherit' component={Link} to='/invoice'>
              Invoice
            </Button>
            <Button color='inherit' component={Link} to='/information'>
              Informasi
            </Button>
          </Hidden>
          {children}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navigation;
