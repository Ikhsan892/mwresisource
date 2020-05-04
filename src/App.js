import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Blue from '@material-ui/core/colors/blue'
// import white from '@material-ui/core/colors/White'
import DarkToggle from './components/DarkToggle'
import Layout from './layout'
import {ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Home from './pages/Home'
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Invoice from './pages/Invoice'
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
          <CssBaseline/>
            <Router>
              <div>
                <Layout toggle={<DarkToggle check={JSON.parse(localStorage.getItem('dark'))} click={toggle}/>}>
                  <Container style={{marginTop : '70px'}}>
                        <Switch>
                          <Route exact path="/">
                            <Home/>
                          </Route>
                          <Route path="/invoice">
                            <Invoice/>
                          </Route>
                        </Switch>
                  </Container>
                </Layout>
              </div>
            </Router>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
