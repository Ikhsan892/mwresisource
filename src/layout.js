import React, { Suspense } from "react";
import Hidden from "@material-ui/core/Hidden";
import Navigation from "./components/Navigation";
import NavigationBottom from "./components/NavigationBottom";
import Footer from "./components/Footer";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import LinearProgress from "@material-ui/core/LinearProgress";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles } from "@material-ui/core/styles";
import { renderRoutes } from "react-router-config";
const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: 100,
    [theme.breakpoints.up("lg")]: {
      paddingTop: 35,
    },
  },
}));
const Layout = (props) => {
  const [hidden, setHidden] = React.useState(false);
  const { route } = props;
  const classes = useStyles();
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, []);
  return (
    <div>
      <Navigation />
      <div className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </div>
      <Zoom in={hidden}>
        <Fab
          onClick={() => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }}
          color='primary'
          aria-label='add'
          style={{
            position: "fixed",
            bottom: "0",
            right: "0",
            marginBottom: "70px",
            marginRight: "20px",
            zIndex: 1,
          }}>
          <UpIcon />
        </Fab>
      </Zoom>
      <Footer />
      <Hidden mdUp>
        <NavigationBottom />
      </Hidden>
    </div>
  );
};

export default Layout;
