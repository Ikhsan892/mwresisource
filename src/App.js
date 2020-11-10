import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getlayoutdata } from "./actions";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import { renderRoutes } from "react-router-config";
function App() {
  const { dark } = useSelector((state) => state.dark);
  const dispatch = useDispatch();

  const mainTheme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
      primary: {
        main: "#2196f3",
      },
    },
    typography: {
      fontFamily: ["sans-serif", "Montserrat"].join(","),
    },
  });
  const loadfirst = useCallback(() => {
    dispatch(getlayoutdata());
  }, []);
  useEffect(() => {
    loadfirst();
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={mainTheme}>
        <ScopedCssBaseline>
          <Router history='true'>{renderRoutes(routes)}</Router>
        </ScopedCssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
