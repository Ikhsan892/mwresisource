import React from 'react'
import {
  Container
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root : {
    paddingTop : '70px',
    [theme.breakpoints.down('sm')] : {
      paddingTop : '5px'
    }
  }
}))
const Home = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <Container>
        <h1>Home</h1>
      </Container>
    </div>
  )
}

export default Home
