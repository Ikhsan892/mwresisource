import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  image : {
    display : 'block',
    marginTop : 'auto',
    marginRight: 'auto',
    marginLeft : 'auto',
    width : '400px',
    height : '400px',
    [theme.breakpoints.down('sm')] : {
      width : '200px',
      height : '200px',
    },
  },
}))
const Error = () => {
  const classes = useStyles()
  return(
    <div>
      <LazyLoadImage src = "/assets/error.svg" alt="Invoice" className={classes.image}/>
    </div>
  )
}

export default Error
