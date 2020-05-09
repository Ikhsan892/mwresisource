import React from 'react'
import {
  Grid,
  Typography,
  Hidden
} from '@material-ui/core';
import { HeaderStepper, Progress} from './index'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
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
}))
const Result = () => {
  const classes = useStyles()
  return(
    <div>
    <Grid container>
    <Grid item xs={12} className={classes.headline}>
      <HeaderStepper/>
      <Hidden smDown>
        <Typography variant="h4" gutterbottom="true">
          <strong>No Resi : </strong><span>MW2312424535454345</span>
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography variant="h5" gutterbottom="true">
          <strong>No Resi : </strong><span>MW2312424535454345</span>
        </Typography>
      </Hidden>
    </Grid>
    <hr/>
      <Grid item xs={6} className={classes.grid}>
        <Hidden smDown>
          <Typography variant="h6" gutterbottom="true">
            <strong>Nama : </strong><span>Muhammad Fatihul Ikhsan</span>
          </Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="body1" gutterbottom="true">
            <strong>Nama : </strong><span>Muhammad Fatihul Ikhsan</span>
          </Typography>
        </Hidden>
      </Grid>
      <Grid item xs={6} className={classes.grid}>
        <Hidden smDown>
          <Typography variant="h6" gutterbottom="true">
            <strong>Tanggal Masuk : </strong><span>Rabu, 14 April 2020</span>
          </Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="body1" gutterbottom="true">
            <strong>Tanggal Masuk : </strong><span>Rabu, 14 April 2020</span>
          </Typography>
        </Hidden>
      </Grid>
      <Grid item xs={6} className={classes.grid}>
        <Hidden smDown>
          <Typography variant="h6" gutterbottom="true">
            <strong>Barang : </strong><span>Xiaomi Redmi 5A</span>
          </Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="body1" gutterbottom="true">
            <strong>Barang : </strong><span>Xiaomi Redmi 5A</span>
          </Typography>
        </Hidden>
      </Grid>
      <Grid item xs={6} className={classes.grid}>
        <Hidden smDown>
          <Typography variant="h6" gutterbottom="true">
            <strong>Layanan : </strong><span>Reguler Service</span>
          </Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="body1" gutterbottom="true">
            <strong>Layanan : </strong><span>Reguler Service</span>
          </Typography>
        </Hidden>
      </Grid>
      <Grid item xs={12} className={classes.grid2}>
        <Hidden smDown>
          <Typography variant="h6" gutterbottom="true">
            <strong>Kerusakan : </strong>
              <ol>
                <li>Ganti Lcd Original Samsung 2017</li>
                <li>Ganti Oli</li>
                <li>Buka Pola Terkunci</li>
                <li>Ganti Speaker</li>
                <li>Ganti Fleksibel</li>
              </ol>
          </Typography>
        </Hidden>
        <Hidden mdUp>
          <Typography variant="body1" gutterbottom="true">
          <strong>Kerusakan : </strong>
          <span>
            <ol>
              <li>Ganti Lcd Original Samsung 2017</li>
              <li>Ganti Oli</li>
              <li>Buka Pola Terkunci</li>
              <li>Ganti Speaker</li>
              <li>Ganti Fleksibel</li>
            </ol>
          </span>
          </Typography>
        </Hidden>
      </Grid>
      <Grid item xs={12}>
      <Hidden smDown>
        <Typography variant="h6" gutterbottom="true">
          <strong>Status : </strong>
        </Typography>
      </Hidden>
      <Hidden mdUp>
        <Typography variant="body1" gutterbottom="true">
          <strong>Status : </strong>
          </Typography>
        </Hidden>
        <Progress/>
      </Grid>
      </Grid>
    </div>
  )
}

export default Result
