import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InvoiceImg from '../assets/invoice.svg'
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  image2 : {
    marginTop : '5px',
    width : '400px',
    height : '400px',
    display : 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
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
  return(
    <div>
      <img src = {InvoiceImg} alt="Invoice" className={classes.image2}/>
      <Hidden smDown>
        <h2 className={classes.h2}>Cari Invoice mu Disini</h2>
      </Hidden>
      <Hidden mdUp>
        <h4 className={classes.h2}>Cari Invoice mu Disini</h4>
      </Hidden>
      <hr/>
      <TextField color="inherit" id="outlined-basic" label="Masukkan Nomor Resi" variant="outlined" fullWidth/>
      <br/>
      <Button variant="contained" color="primary" className={classes.button}>
        CEK RESI
      </Button>
    </div>
  )
}

export default Invoice
