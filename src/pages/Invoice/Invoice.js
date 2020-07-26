import React, { lazy, Suspense, useState } from "react";
import {
  TextField,
  LinearProgress,
  Button,
  Hidden,
  Container,
} from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import GetAppIcon from "@material-ui/icons/GetApp";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
const Result = lazy(() => import("./components/result"));
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
}));
const Invoice = ({ carousel, mcarousel }) => {
  const classes = useStyles();
  const [down, setDown] = useState({clicked : false});
  React.useEffect(() => {
    console.log(down)
  },[])
  return (
    <div>
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
            alert("submit");
          }}
          autoComplete='off'>
          <TextField
            id='outlined-basic'
            style={{ boxSizing: "content-box" }}
            placeholder='Masukkan Nomor Resi'
            variant='outlined'
            fullWidth
          />
          <br />
          <Button
            variant='contained'
            color='primary'
            className={classes.button}>
            CEK INVOICE
          </Button>
        </form>
        <br />
        <Suspense fallback={
          <div>
            <LinearProgress/>
          </div>
        }>
          <Result />
        </Suspense>
        <Fab
          onClick={() => {
            setDown({clicked : true})
          }}
          variant='extended'
          color='primary'
          className={classes.button}
          >
          <GetAppIcon className={classes.extendedIcon} />
          Download
        </Fab>
      </Container>
    </div>
  );
};

export default Invoice;
