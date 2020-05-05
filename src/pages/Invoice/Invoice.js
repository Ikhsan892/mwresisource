import React,{useEffect} from 'react'
import {
  TextField,
  Button,
  Hidden
} from '@material-ui/core';
import { useLocation } from 'react-router-dom'
import Result from './components/result'
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import { makeStyles } from '@material-ui/core/styles';
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
  h2: {
    textAlign : 'center'
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
  const [value, setValue] = React.useState('')
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery()

  useEffect(() => {
    if(query.get('resi')){
      setValue(query.get('resi'))
    }
  },[value])
  return(
    <div>
      <LazyLoadImage src = "/assets/invoice.svg" alt="Invoice" className={classes.image}/>
      <Hidden smDown>
        <h2 className={classes.h2}>Cari Tagihan mu Disini</h2>
      </Hidden>
      <Hidden mdUp>
        <h4 className={classes.h2}>Cari Tagihan mu Disini</h4>
      </Hidden>
      <hr/>
      <TextField color="inherit" id="outlined-basic" label="Masukkan Nomor Resi" variant="outlined" fullWidth value={value}/>
      <br/>
      <Button variant="contained" color="primary" className={classes.button}>
        CEK INVOICE
      </Button>
      <br/>
      <Result/>
    </div>
  )
}

export default Invoice
