import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Toolbar, IconButton, Hidden } from "@material-ui/core";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import NavigationBottom from "components/NavigationBottom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: "none",
    backgroundColor: (props) => (props.onHome ? "#f2f2f2" : "#fff"),
  },
  navbar_img: {
    width: 100,
    filter: `invert(0%)`,
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      width: 150,
    },
  },
  mainbar: {
    top: 0,
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
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  skeletonPadding: {
    marginRight: "20px",
  },
  inline: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      display: "inline-block",
    },
  },
  links: {
    fontSize: 19,
    fontWeight: 300,
    width: "10%",
    marginRight: 70,
    textAlign: "center",
  },
  links_hover: {
    "&:hover": {
      fontWeight: 700,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      textDecoration: "none",
    },
  },
  selected_links: {
    fontWeight: 900,
    color: theme.palette.primary.main,
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    "&:visited": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  },
  alink: {
    textDecoration: "none",
    color: "#000",
    "&:visited": {
      textDecoration: "none",
      color: "#000",
    },
    "&:hover": {
      textDecoration: "none",
      color: "#000",
    },
  },
}));

const Navigation = () => {
  let url = useLocation();
  const [topval, setTopval] = useState("-60px");
  const [onHome, setOnHome] = useState(false);
  const [open, setOpen] = useState(false);
  const { navitem } = useSelector((state) => state.layout.navbar);
  const { layout_loading } = useSelector((state) => state.loading);
  const { dark } = useSelector((state) => state.dark);
  useEffect(() => {
    if (url.pathname === "/home") {
      setOnHome(true);
      setTopval("0px");
    } else {
      setOnHome(false);
      setTopval("-60px");
      setOpen(false);
    }
    window.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setTopval("0px");
      } else {
        if (url.pathname === "/home") {
          setTopval("0px");
        } else {
          setTopval("-60px");
          setOpen(false);
        }
      }
    };
  }, [url]);
  const openNav = () => {
    setOpen(!open);
  };
  const props = {
    top: topval,
    onHome: onHome,
    invert: dark,
  };
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <AppBar position='fixed' color='inherit' className={classes.mainbar}>
        <Toolbar>
          <div className={classes.inline}>
            <img src='/assets/mwlogo.png' className={classes.navbar_img} />
            <IconButton
              aria-label='open drawer'
              edge='start'
              className={classes.menuButton}
              onClick={openNav}>
              <MenuIcon />
            </IconButton>
          </div>
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
                    <div
                      className={clsx(
                        classes.links,
                        n.label.toLowerCase() === url.pathname.substr(1)
                          ? ""
                          : classes.links_hover
                      )}>
                      <Link
                        to={n.to}
                        style={{
                          textDecoration: "none",
                        }}>
                        <a
                          className={
                            n.label.toLowerCase() === url.pathname.substr(1)
                              ? classes.selected_links
                              : classes.alink
                          }
                          href='javascript:void(0)'>
                          {n.label}
                        </a>
                      </Link>
                    </div>
                  );
                })}
          </Hidden>
        </Toolbar>
      </AppBar>
      <NavigationBottom open={open} />
    </div>
  );
};
export default Navigation;
