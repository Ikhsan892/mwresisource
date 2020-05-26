import React,{useState, lazy, Suspense} from 'react';
import './App.css';
import Blue from '@material-ui/core/colors/blue'
import DarkToggle from './components/DarkToggle'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';
import {BrowserRouter as Router,Switch,Redirect,useParams,Route} from "react-router-dom";
const Layout = lazy(() => import('./layout'))
const Carousel = lazy(() => import('./components/Carousel'))
const MCarousel = lazy(() => import('./components/MCarousel'))
const Home = lazy(() => import('./pages/Home'))
const Track = lazy(() => import('./pages/Track'))
const Invoice = lazy(() => import('./pages/Invoice'))
const Information = lazy(() => import('./pages/Information'))
const Error = lazy(() => import('./pages/Error'))
// <Route exact path="/" component={lazy(() => import('./pages/Home'))}/>
// <Route path="/track" component={lazy(() => import('./pages/Track'))}/>
// <Route path="/invoice" component={lazy(() => import('./pages/Invoice'))}/>
// <Route path="/information" component={lazy(() => import('./pages/Information'))}/>
function Child({check}){
  let {path} = useParams()
  const [landing, setLanding] = useState(false)
  console.log(path)
  switch(path){
    case 'home' :
      return <Home/>
    break;
    case 'track' :
      return <Track  carousel = {<Carousel/>} mcarousel={<MCarousel/>}/>
    break;
    case 'invoice' :
      return <Invoice carousel ={<Carousel/>} mcarousel={<MCarousel/>}/>
    break;
    case 'information' :
      return <Information carousel={<Carousel/>} mcarousel={<MCarousel/>}/>
    break;
    default :
      return <Error/>
    break;
  }
  return null
}
function App() {
  const [dark, setDark] = useState(false)
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
          <ScopedCssBaseline>
            <Router history="true">
              <div>
                <Suspense fallback={<div><LinearProgress/></div>}>
                  <ScopedCssBaseline>
                    <Layout toggle={<DarkToggle check={dark} click={toggle}/>}>
                        <ScopedCssBaseline>
                              <Switch>
                                <Suspense fallback={<div><LinearProgress/></div>}>
                                  <ScopedCssBaseline>
                                    <Route path="/" render={() => <Redirect to="/home"/>}/>
                                    <Route path="/:path" children={<Child/>}/>
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
