import React, { lazy, Suspense, useState } from "react";
import {
  TextField,
  LinearProgress,
  Button,
  Hidden,
  CircularProgress,
  Backdrop,
  Snackbar,
  Container,
} from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GetAppIcon from "@material-ui/icons/GetApp";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import { Helmet } from "react-helmet";
import Fab from "@material-ui/core/Fab";
import { useDispatch, useSelector } from "react-redux";
import {
  downloadFile,
  getResiData,
  setResiDataToNotError,
  setFoundStateToFalse,
} from "../../actions";

const Result = lazy(() => import("./components/result"));
const NoData = lazy(() => import("./components/nodata"));
const useStyles = makeStyles((theme) => ({
  image: {
    display: "block",
    marginTop: "5px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "400px",
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      height: "200px",
    },
  },
  buttonspeedial: {
    position: "relative",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      marginTop: "20px",
      right: theme.spacing(10),
      zIndex: "1",
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
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    display: "flex",
    flexDirection: "column",
  },
  loading_invoice: {
    height: "20px",
  },
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}
const Invoice = ({ carousel, mcarousel }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const { download } = useSelector((state) => state.download);
  const { error, status, found } = useSelector((state) => state.resi);
  const { resi_loading } = useSelector((state) => state.loading);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setResiDataToNotError());
  };
  const handleCloseSuccess = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setFoundStateToFalse());
  };

  return (
    <div>
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
        <meta name='description' content='Cari Invoice mu disini' />
        <title>Makersware Service Center - Cari Invoice mu disini</title>
      </Helmet>
      <Hidden smUp>
        <Suspense fallback={<div>Loading...</div>}>{mcarousel}</Suspense>
      </Hidden>
      <Container>
        <Hidden xsDown>
          <Suspense fallback={<div>Loading...</div>}>{carousel}</Suspense>
        </Hidden>
        <LazyLoadImage
          src='/assets/invoice.svg'
          alt='Invoice'
          className={classes.image}
        />
        <Hidden smDown>
          <h2 style={{ textAlign: "center" }}>Cari Tagihanmu Disini</h2>
        </Hidden>
        <Hidden mdUp>
          <h4 style={{ textAlign: "center" }}>Cari Tagihanmu Disini</h4>
        </Hidden>
        <hr />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(getResiData(searchValue));
          }}
          autoComplete='off'>
          <TextField
            id='outlined-basic'
            style={{ boxSizing: "content-box", textTransform: "uppercase" }}
            placeholder='Masukkan Nomor Resi'
            variant='outlined'
            onChange={(e) => setSearchValue(e.target.value)}
            fullWidth
          />
          <br />
          <Button
            variant='contained'
            color='primary'
            type='submit'
            disabled={resi_loading}
            className={classes.button}>
            {resi_loading ? (
              <CircularProgress size={22} color='secondary' />
            ) : (
              "CEK INVOICE"
            )}
          </Button>
        </form>
        <br />
        <Suspense
          fallback={
            <div>
              <LinearProgress />
            </div>
          }>
          {status === 200 ? <Result /> : <NoData />}
        </Suspense>
        {status === 200 ? (
          <Fab
            onClick={() => {
              window.scrollTo(1, 1);
              dispatch(downloadFile());
            }}
            variant='extended'
            color='primary'
            className={classes.button}>
            <GetAppIcon className={classes.extendedIcon} />
            {download ? <span>lagi donlot...</span> : <span>Download</span>}
          </Fab>
        ) : (
          ""
        )}
      </Container>
      <Backdrop className={classes.backdrop} open={download}>
        <CircularProgress color='inherit' />
        Sedang Merender Dokumen, Harap Tidak Scroll Halaman Web !! Karena
        Berpengaruh Ke Hasil
      </Backdrop>
    </div>
  );
};

export default Invoice;
