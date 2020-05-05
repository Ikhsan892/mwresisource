import React from 'react'
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  h2 : {
    textAlign : 'center'
  },
  image : {
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
}))
const Nodata = () => {
  const classes = useStyles()
  return(
    <div>
      <img src = "/assets/nodata.svg" alt="no responses" className={classes.image}/>
      <Hidden smDown>
        <h2 className={classes.h2}>Data Kosong</h2>
      </Hidden>
      <Hidden mdUp>
        <h4 className={classes.h2}>Data Kosong</h4>
      </Hidden>
    </div>
  )
}

export default Nodata
