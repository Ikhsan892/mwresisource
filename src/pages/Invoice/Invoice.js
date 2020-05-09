import React,{lazy,Suspense} from 'react'
import {
  TextField,
  LinearProgress,
  Button,
  Hidden
} from '@material-ui/core';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { makeStyles } from '@material-ui/core/styles';
const Result = lazy(() => import('./components/result'))
const useStyles = makeStyles((theme) => ({
  image : {
    display : 'block',
    marginTop : '5px',
    marginRight: 'auto',
    marginLeft : 'auto',
    width : '400px',
    height : '400px',
    [theme.breakpoints.down('sm')] : {
      width : '200px',
      height : '200px',
    },
  },
  div : {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
  },
  button : {
    display:'block',
    width : '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    marginBottom : '10px',
    [theme.breakpoints.up('sm')] : {
      width : '30%',
    },
  }
}));

const Invoice = () => {
  const classes = useStyles()
  // const [value, setValue] = React.useState('')
  // function useQuery() {
  //   return new URLSearchParams(useLocation().search);
  // }
  // let query = useQuery()

  // useEffect(() => {
  //   if(query.get('resi')){
  //     setValue(query.get('resi'))
  //   }
  // },[value])
  return(
    <div>
      <LazyLoadImage src = "/assets/invoice.svg" alt="Invoice" className={classes.image}/>
      <Hidden smDown>
        <h2 style={{textAlign:'center'}}>Cari Tagihanmu Disini</h2>
      </Hidden>
      <Hidden mdUp>
        <h4 style={{textAlign:'center'}}>Cari Tagihanmu Disini</h4>
      </Hidden>
      <hr/>
      <form onSubmit={(e) => {
        e.preventDefault()
        alert('submit')
      }} autoComplete ="off">
        <TextField id="outlined-basic" style={{boxSizing:'content-box'}}label="Masukkan Nomor Resi" variant="outlined" fullWidth/>
        <br/>
        <Button variant="contained" color="primary" className={classes.button}>
          CEK INVOICE
        </Button>
      </form>
      <br/>
      <div className={classes.div}>
        <Suspense fallback={<div><LinearProgress/></div>}>
          <Result/>
        </Suspense>
      </div>
    </div>
  )
}

export default Invoice
