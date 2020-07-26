import React from "react";
import Hidden from "@material-ui/core/Hidden";
import Navigation from "./components/Navigation";
import NavigationBottom from "./components/NavigationBottom";
import Footer from "./components/Footer";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
const Layout = ({ children, toggle }) => {
  const [hidden, setHidden] = React.useState(false);
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
      <Navigation>{toggle}</Navigation>
      {children}
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
