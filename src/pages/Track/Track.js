import React, { lazy, Suspense, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import MuiAlert from "@material-ui/lab/Alert";
import {
  Grid,
  LinearProgress,
  CircularProgress,
  TextField,
  Button,
  Hidden,
  Snackbar,
  Container,
} from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {
  getTrackData,
  setTrackDataToNotError,
  setFoundStateTrackToFalse,
} from "../../actions";
const Carousel = lazy(() => import("components/Carousel"));
const MCarousel = lazy(() => import("components/MCarousel"));
const Result = lazy(() => import("./components/result"));
const NoData = lazy(() => import("./components/nodata"));
const useStyles = makeStyles((theme) => ({
  h2: {
    textAlign: "center",
  },
  grid: {
    marginTop: "5px",
    marginBottom: "5px",
  },
  grid2: {
    marginTop: "5px",
    marginBottom: "5px",
    borderBottom: "0.5px dashed",
  },
  headline: {
    textAlign: "center",
    borderBottom: "0.5px solid",
    marginBottom: "10px",
  },
  image: {
    width: "400px",
    height: "400px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      height: "200px",
    },
  },
  button: {
    display: "block",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    marginBottom: "10px",
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
  },
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
const Track = () => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const { error, status, found } = useSelector((state) => state.track);
  const { track_loading } = useSelector((state) => state.loading);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setTrackDataToNotError());
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setFoundStateTrackToFalse());
  };
  return (
    <div
      style={{
        paddingBottom: 200,
      }}>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error'>
          Data Tidak Ditemukan
        </Alert>
      </Snackbar>
      <Snackbar
        open={found}
        autoHideDuration={6000}
        onClose={handleCloseSuccess}>
        <Alert onClose={handleCloseSuccess} severity='success'>
          Data Ditemukan
        </Alert>
      </Snackbar>
      <Helmet>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Lacak Perkembangan Gadget-mu dengan Mudah'
        />
        <title>
          Makersware Service Center - Lacak Perkembangan Gadget-mu dengan Mudah
        </title>
      </Helmet>
      <Hidden smUp>
        <div
          style={{
            marginTop: -100,
          }}>
          <Suspense fallback={<div>Loading...</div>}>
            <MCarousel />
          </Suspense>
        </div>
      </Hidden>
      <Container>
        <Hidden xsDown>
          <Suspense fallback={<div>Loading...</div>}>
            <Carousel />
          </Suspense>
        </Hidden>
        <LazyLoadImage
          src='/assets/track.svg'
          alt='Track'
          className={classes.image}
        />
        <Hidden smDown>
          <h2 className={classes.h2}>
            Lacak Perkembangan Gadget-mu dengan Mudah
          </h2>
        </Hidden>
        <Hidden mdUp>
          <h4 className={classes.h2}>
            Lacak Perkembangan Gadget-mu dengan Mudah
          </h4>
        </Hidden>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(getTrackData(searchValue));
          }}
          autoComplete='off'>
          <TextField
            id='outlined-basic'
            style={{ boxSizing: "content-box" }}
            variant='outlined'
            onChange={(e) => setSearchValue(e.target.value)}
            fullWidth
            placeholder='Masukkan Nomor Resi'
          />
          <br />
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            disabled={track_loading}
            type='submit'>
            {track_loading ? (
              <CircularProgress size={22} color='secondary' />
            ) : (
              "CEK RESI"
            )}
          </Button>
        </form>
        <br />
        <Grid container justify='center'>
          <Grid item xs={12} sm={9} md={9} lg={9}>
            <Suspense
              fallback={
                <div>
                  <LinearProgress />
                </div>
              }>
              {status === 404 ? <NoData /> : <Result />}
            </Suspense>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Track;
