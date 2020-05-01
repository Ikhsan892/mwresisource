import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import Blue from '@material-ui/core/colors/blue'
// import white from '@material-ui/core/colors/White'
import DarkToggle from './components/DarkToggle'
import Layout from './layout'
import {ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Home from './pages/Home'
function App() {
  const [dark, setDark] = useState(true)
  const [storage, setStorage] = useState()
  const mainTheme = createMuiTheme({
    palette : {
      // primary : Blue
      type : dark ? 'dark' : 'light',
      primary : Blue
    }
  })
  const toggle = () => {
    setDark(!dark)
  }
  return (
    <React.Fragment>
        <ThemeProvider theme={mainTheme}>
          <CssBaseline/>
            <Layout toggle={<DarkToggle klik={toggle} check={dark}/>}>
              <Container>
                <Home/>
              </Container>
            </Layout>
        </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
