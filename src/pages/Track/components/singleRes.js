import React from "react";
import { Grid, Typography, Hidden, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "5px",
    marginBottom: "5px",
  },
  grid2: {
    marginTop: "5px",
    marginBottom: "5px",
    borderBottom: "0.5px dashed",
  },
}));

const SingleRes = ({ Progress }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={6} className={classes.grid}>
          <Hidden smDown>
            <Typography variant='h6' gutterbottom='true'>
              <strong>Nama : </strong>
              <span>Muhammad Fatihul Ikhsan</span>
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='body1' gutterbottom='true'>
              <strong>Nama : </strong>
              <span>Muhammad Fatihul Ikhsan</span>
            </Typography>
          </Hidden>
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <Hidden smDown>
            <Typography variant='h6' gutterbottom='true'>
              <strong>Tanggal Masuk : </strong>
              <span>Rabu, 14 April 2020</span>
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='body1' gutterbottom='true'>
              <strong>Tanggal Masuk : </strong>
              <span>Rabu, 14 April 2020</span>
            </Typography>
          </Hidden>
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <Hidden smDown>
            <Typography variant='h6' gutterbottom='true'>
              <strong>Barang : </strong>
              <span>Xiaomi Redmi 5A</span>
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='body1' gutterbottom='true'>
              <strong>Barang : </strong>
              <span>Xiaomi Redmi 5A</span>
            </Typography>
          </Hidden>
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <Hidden smDown>
            <Typography variant='h6' gutterbottom='true'>
              <strong>Layanan : </strong>
              <span>Reguler Service</span>
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='body1' gutterbottom='true'>
              <strong>Layanan : </strong>
              <span>Reguler Service</span>
            </Typography>
          </Hidden>
        </Grid>
        <Grid item xs={12} className={classes.grid2}>
          <Hidden smDown>
            <Typography variant='h6' gutterbottom='true'>
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
            <Typography variant='body1' gutterbottom='true'>
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
            <Typography variant='h6' gutterbottom='true'>
              <strong>Status : </strong>
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='body1' gutterbottom='true'>
              <strong>Status : </strong>
            </Typography>
          </Hidden>
          {Progress}
        </Grid>
        <Grid item xs={12}>
          <Grid container justify='center'>
            <Button
              variant='outlined'
              color='primary'
              className={classes.button}
              endIcon={<ArrowForwardIcon />}>
              Cek Invoice-mu Langsung
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleRes;
