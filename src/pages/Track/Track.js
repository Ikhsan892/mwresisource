import React, {lazy, Suspense} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  Card,
  Grid,
  CardContent,
  LinearProgress,
  TextField,
  Button,
  Hidden,
  Container
} from '@material-ui/core';
const Result = lazy(() => import('./components/result'))
const useStyles = makeStyles((theme) => ({
  h2: {
    textAlign : 'center'
  },
  grid : {
    marginTop : '5px',
    marginBottom : '5px',
  },
  grid2 : {
    marginTop : '5px',
    marginBottom : '5px',
    borderBottom : '0.5px dashed'
  },
  headline : {
    textAlign:'center',
    borderBottom : '0.5px solid',
    marginBottom : '10px'
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
const Track = ({carousel, mcarousel}) => {
  const classes = useStyles()
  return(
    <div>
      <Hidden smUp>
        <Suspense fallback={<div>Loading...</div>}>
            {mcarousel}
        </Suspense>
      </Hidden>
      <Container>
        <Hidden xsDown>
          <Suspense fallback={<div>Loading...</div>}>
              {carousel}
          </Suspense>
        </Hidden>
        <LazyLoadImage src ="/assets/track.svg" alt="Track" className={classes.image}/>
        <Hidden smDown>
          <h2 className={classes.h2}>Lacak Perkembangan Gadget-mu dengan Mudah</h2>
        </Hidden>
        <Hidden mdUp>
          <h4 className={classes.h2}>Lacak Perkembangan Gadget-mu dengan Mudah</h4>
        </Hidden>
        <hr/>
        <form onSubmit={(e) => {
          e.preventDefault()
          alert('submit')
        }} autoComplete ="off">
          <TextField id="outlined-basic" style={{boxSizing:'content-box'}} variant="outlined" fullWidth placeholder="Masukkan Nomor Resi"/>
          <br/>
          <Button variant="contained" color="primary" className={classes.button}>
            CEK RESI
          </Button>
        </form>
        <br/>
        <Grid
          container
          justify="center"
        >
          <Grid item xs={12} sm={9} md={9} lg={9}>
            <Card elevation={3}>
              <CardContent>
                <Suspense fallback={<div><LinearProgress/></div>}>
                  <Result/>
                </Suspense>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Track
