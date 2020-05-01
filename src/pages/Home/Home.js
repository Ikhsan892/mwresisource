import React from 'react'
import Navigation from '../../components/Navigation'
import SwipeableButton from '../../components/SwipeableButton'
import { makeStyles } from '@material-ui/core/styles';
import TrackImage from '../assets/track.svg'
import Hidden from '@material-ui/core/Hidden';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  h2: {
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
const Home = () => {
  const classes = useStyles()
  return(
    <div>
      <img src = {TrackImage} alt="Track" className={classes.image}/>
      <Hidden smDown>
        <h2 className={classes.h2}>Lacak Perkembangan Barangmu dengan Mudah</h2>
      </Hidden>
      <Hidden mdUp>
        <h4 className={classes.h2}>Lacak Perkembangan Barangmu dengan Mudah</h4>
      </Hidden>
      <hr/>
      <TextField color="inherit" id="outlined-basic" label="Masukkan Nomor Resi" variant="outlined" fullWidth/>
      <br/>
      <Button variant="contained" color="primary" className={classes.button}>
        CEK RESI
      </Button>
      <br/>
      <Grid
        container
        justify="center"
      >
        <Grid item xs={12} sm={9} md={9} lg={9}>
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs>
                  <Hidden smDown>
                    <Typography variant="h3" gutterbottom>
                      <strong>No Resi : </strong><span>MW2312424535454345</span>
                    </Typography>
                  </Hidden>
                  <Hidden mdUp>
                    <Typography variant="h5" gutterbottom>
                      <strong>No Resi : </strong><span>MW2312424535454345</span>
                    </Typography>
                  </Hidden>
                </Grid>
                <hr/>
                  <Grid item xs={6}>
                    <Hidden smDown>
                      <Typography variant="h6">
                        <strong>Nama : </strong><span>Muhammad Fatihul Ikhsan</span>
                      </Typography>
                    </Hidden>
                    <Hidden mdUp>
                      <Typography variant="body1">
                        <strong>Nama : </strong><span>Muhammad Fatihul Ikhsan</span>
                      </Typography>
                    </Hidden>
                  </Grid>
                  <Grid item xs={6}>
                    <Hidden smDown>
                      <Typography variant="h6">
                        <strong>Tanggal Masuk : </strong><span>Rabu, 14 April 2020</span>
                      </Typography>
                    </Hidden>
                    <Hidden mdUp>
                      <Typography variant="body1">
                        <strong>Tanggal Masuk : </strong><span>Rabu, 14 April 2020</span>
                      </Typography>
                    </Hidden>
                  </Grid>
                  <Grid item xs={6}>
                    <Hidden smDown>
                      <Typography variant="h6">
                        <strong>Barang : </strong><span>Xiaomi Redmi 5A</span>
                      </Typography>
                    </Hidden>
                    <Hidden mdUp>
                      <Typography variant="body1">
                        <strong>Barang : </strong><span>Xiaomi Redmi 5A</span>
                      </Typography>
                    </Hidden>
                  </Grid>
                  <Grid item xs={6}>
                    <Hidden smDown>
                      <Typography variant="h6">
                        <strong>Tanggal Masuk : </strong><span>Rabu, 14 April 2020</span>
                      </Typography>
                    </Hidden>
                    <Hidden mdUp>
                      <Typography variant="body1">
                        <strong>Tanggal Masuk : </strong><span>Rabu, 14 April 2020</span>
                      </Typography>
                    </Hidden>
                  </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
