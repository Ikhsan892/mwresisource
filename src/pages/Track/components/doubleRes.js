import React from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "5px",
    marginBottom: "15px",
  },
  grid2: {
    marginTop: "5px",
    marginBottom: "5px",
    borderBottom: "0.5px dashed",
  },
  gridlist: {
    transform: "translateZ(0)",
    flexWrap: "nowrap",
  },
  div: {
    overflowX: "auto",
    display: "flex",
  },
  gridInside: {
    minWidth: "400px",
    paddingLeft: "30px",
    borderRightStyle: "groove",
  },
  button: {
    marginTop: "50px",
  },
}));

const DoubleRes = ({ ProgressDouble }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid container justify='center'>
          <Grid item xs={6} className={classes.grid}>
            <Hidden smDown>
              <Typography variant='h6' gutterbottom='true' align='center'>
                <strong>Nama : </strong>
                <span>Muhammad Faris</span>
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant='body1' gutterbottom='true' align='center'>
                <strong>Nama : </strong>
                <span>Muhammad Faris</span>
              </Typography>
            </Hidden>
          </Grid>
        </Grid>
        <Divider />
        <div className={classes.div}>
          <div className={classes.gridInside}>
            <Grid container direction='column'>
              <div style={{ height: "280px", overflow: "auto" }}>
                <Grid item>
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
                <Grid item>
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
                <Grid item>
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
                <Grid item>
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
              </div>
              <Grid item>
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
                {ProgressDouble}
              </Grid>
            </Grid>
          </div>

          <div className={classes.gridInside}>
            <Grid container direction='column'>
              <div style={{ height: "280px", overflow: "auto" }}>
                <Grid item>
                  <Hidden smDown>
                    <Typography variant='h6' gutterbottom='true'>
                      <strong>Barang : </strong>
                      <span>Vivo Y91</span>
                    </Typography>
                  </Hidden>
                  <Hidden mdUp>
                    <Typography variant='body1' gutterbottom='true'>
                      <strong>Barang : </strong>
                      <span>Vivo Y91</span>
                    </Typography>
                  </Hidden>
                </Grid>
                <Grid item>
                  <Hidden smDown>
                    <Typography variant='h6' gutterbottom='true'>
                      <strong>Tanggal Masuk : </strong>
                      <span>Kamis, 15 April 2020</span>
                    </Typography>
                  </Hidden>
                  <Hidden mdUp>
                    <Typography variant='body1' gutterbottom='true'>
                      <strong>Tanggal Masuk : </strong>
                      <span>Kamis, 15 April 2020</span>
                    </Typography>
                  </Hidden>
                </Grid>
                <Grid item>
                  <Hidden smDown>
                    <Typography variant='h6' gutterbottom='true'>
                      <strong>Layanan : </strong>
                      <span>Express Service</span>
                    </Typography>
                  </Hidden>
                  <Hidden mdUp>
                    <Typography variant='body1' gutterbottom='true'>
                      <strong>Layanan : </strong>
                      <span>Express Service</span>
                    </Typography>
                  </Hidden>
                </Grid>
                <Grid item>
                  <Hidden smDown>
                    <Typography variant='h6' gutterbottom='true'>
                      <strong>Kerusakan : </strong>
                      <ol>
                        <li>Ganti Lcd Original Vivo</li>
                        <li>Ganti Speaker</li>
                        <li>Buka Pola Terkunci</li>
                      </ol>
                    </Typography>
                  </Hidden>
                  <Hidden mdUp>
                    <Typography variant='body1' gutterbottom='true'>
                      <strong>Kerusakan : </strong>
                      <span>
                        <ol>
                          <li>Ganti Lcd Original Vivo</li>
                          <li>Ganti Speaker</li>
                          <li>Buka Pola Terkunci</li>
                        </ol>
                      </span>
                    </Typography>
                  </Hidden>
                </Grid>
              </div>
              {/* ini terakhir */}
              <Grid item>
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
                {ProgressDouble}
              </Grid>
            </Grid>
          </div>

          <div className={classes.gridInside}>
            <Grid container direction='column'>
              <div style={{ height: "280px", overflow: "auto" }}>
                <Grid item>
                  <Hidden smDown>
                    <Typography variant='h6' gutterbottom='true'>
                      <strong>Barang : </strong>
                      <span>Vivo Y91</span>
                    </Typography>
                  </Hidden>
                  <Hidden mdUp>
                    <Typography variant='body1' gutterbottom='true'>
                      <strong>Barang : </strong>
                      <span>Vivo Y91</span>
                    </Typography>
                  </Hidden>
                </Grid>
                <Grid item>
                  <Hidden smDown>
                    <Typography variant='h6' gutterbottom='true'>
                      <strong>Tanggal Masuk : </strong>
                      <span>Kamis, 15 April 2020</span>
                    </Typography>
                  </Hidden>
                  <Hidden mdUp>
                    <Typography variant='body1' gutterbottom='true'>
                      <strong>Tanggal Masuk : </strong>
                      <span>Kamis, 15 April 2020</span>
                    </Typography>
                  </Hidden>
                </Grid>
                <Grid item>
                  <Hidden smDown>
                    <Typography variant='h6' gutterbottom='true'>
                      <strong>Layanan : </strong>
                      <span>Express Service</span>
                    </Typography>
                  </Hidden>
                  <Hidden mdUp>
                    <Typography variant='body1' gutterbottom='true'>
                      <strong>Layanan : </strong>
                      <span>Express Service</span>
                    </Typography>
                  </Hidden>
                </Grid>
                <Grid item>
                  <Hidden smDown>
                    <Typography variant='h6' gutterbottom='true'>
                      <strong>Kerusakan : </strong>
                      <ol>
                        <li>Ganti Lcd Original Vivo</li>
                        <li>Ganti Speaker</li>
                        <li>Buka Pola Terkunci</li>
                      </ol>
                    </Typography>
                  </Hidden>
                  <Hidden mdUp>
                    <Typography variant='body1' gutterbottom='true'>
                      <strong>Kerusakan : </strong>
                      <span>
                        <ol>
                          <li>Ganti Lcd Original Vivo</li>
                          <li>Ganti Speaker</li>
                          <li>Buka Pola Terkunci</li>
                        </ol>
                      </span>
                    </Typography>
                  </Hidden>
                </Grid>
              </div>
              {/* ini terakhir */}
              <Grid item>
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
                {ProgressDouble}
              </Grid>
            </Grid>
          </div>
        </div>
        <Grid container justify='center'>
          <Grid item>
            <Button
              variant='outlined'
              color='primary'
              className={classes.button}
              endIcon={<ArrowForwardIcon />}
              component={Link}
              to='/invoice'>
              Cek Invoice-mu Langsung
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DoubleRes;
