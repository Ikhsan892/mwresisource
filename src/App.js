import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import Blue from "@material-ui/core/colors/blue";
import DarkToggle from "./components/DarkToggle";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import LinearProgress from "@material-ui/core/LinearProgress";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
const Layout = lazy(() => import("./layout"));
const Carousel = lazy(() => import("./components/Carousel"));
const MCarousel = lazy(() => import("./components/MCarousel"));
const Home = lazy(() => import("./pages/Home"));
const Track = lazy(() => import("./pages/Track"));
const Invoice = lazy(() => import("./pages/Invoice"));
const Information = lazy(() => import("./pages/Information"));
const InformationDetail = lazy(() =>
  import("./pages/Information/InformationDetail")
);
const Error = lazy(() => import("./pages/Error"));
function App() {
  const [dark, setDark] = useState(false);
  const mainTheme = createMuiTheme({
    palette: {
      // primary : Blue
      type: dark ? "dark" : "light",
      primary: Blue,
    },
  });
  const toggle = () => {
    setDark(!dark);
  };
  return (
    <React.Fragment>
      <ThemeProvider theme={mainTheme}>
        <ScopedCssBaseline>
          <Router history='true'>
            <div>
              <Suspense
                fallback={
                  <div>
                    <LinearProgress />
                  </div>
                }>
                <ScopedCssBaseline>
                  <Layout toggle={<DarkToggle check={dark} click={toggle} />}>
                    <ScopedCssBaseline>
                      <Switch>
                        <Suspense
                          fallback={
                            <div>
                              <LinearProgress />
                            </div>
                          }>
                          <ScopedCssBaseline>
                            <Route exact path='/'>
                              <Redirect to='/home' />
                            </Route>
                            <Route path='/home'>
                              <Home />
                            </Route>
                            <Route path='/track'>
                              <Track
                                carousel={<Carousel />}
                                mcarousel={<MCarousel />}
                              />
                            </Route>
                            <Route path='/invoice'>
                              <Invoice
                                carousel={<Carousel />}
                                mcarousel={<MCarousel />}
                              />
                            </Route>
                            <Route path='/information'>
                              <Information
                                carousel={<Carousel />}
                                mcarousel={<MCarousel />}
                              />
                            </Route>
                            {/* <Route path='/details'>
                              <Error />
                            </Route> */}
                            <Route path='/details/:slug'>
                              <InformationDetail />
                            </Route>
                          </ScopedCssBaseline>
                        </Suspense>
                      </Switch>
                    </ScopedCssBaseline>
                  </Layout>
                </ScopedCssBaseline>
              </Suspense>
            </div>
          </Router>
        </ScopedCssBaseline>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
