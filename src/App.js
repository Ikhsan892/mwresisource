import React,{useState, lazy, Suspense} from 'react';
import './App.css';
import Blue from '@material-ui/core/colors/blue'
import DarkToggle from './components/DarkToggle'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
const Layout = lazy(() => import('./layout'))
const Carousel = lazy(() => import('./components/Carousel'))
function App() {
  const [dark, setDark] = useState(JSON.parse(localStorage.getItem('dark')))
  const mainTheme = createMuiTheme({
    palette : {
      // primary : Blue
      type : JSON.parse(localStorage.getItem('dark')) ? 'dark' : 'light',
      primary : Blue
    }
  })
  const toggle = () => {
    setDark(!dark)
    localStorage.setItem('dark',dark)
  }
  return (
    <React.Fragment>
        <ThemeProvider theme={mainTheme}>
          <ScopedCssBaseline>
            <Router>
              <div>
                <Suspense fallback={<div><LinearProgress/></div>}>
                  <ScopedCssBaseline>
                    <Layout toggle={<DarkToggle check={JSON.parse(localStorage.getItem('dark'))} click={toggle}/>}>
                      <Container style={{ paddingTop:'70px'}}>
                        <ScopedCssBaseline>
                          <Hidden xsDown>
                            <Suspense fallback={<div>Loading...</div>}>
                              <Carousel/>
                            </Suspense>
                          </Hidden>
                              <Switch>
                                <Suspense fallback={<div><LinearProgress/></div>}>
                                  <ScopedCssBaseline>
                                    <Route exact path="/" component={lazy(() => import('./pages/Home'))}/>
                                    <Route path="/invoice" component={lazy(() => import('./pages/Invoice'))}/>
                                    <Route path="/information" component={lazy(() => import('./pages/Information'))}/>
                                  </ScopedCssBaseline>
                                </Suspense>
                              </Switch>
                        </ScopedCssBaseline>
                      </Container>
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
