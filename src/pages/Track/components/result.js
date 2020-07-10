import React from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { HeaderStepper, Progress, SingleRes,DoubleRes } from "./index";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  headline: {
    textAlign: "center",
    borderBottom: "0.5px solid",
    marginBottom: "10px",
    paddingBottom : '10px',
  },
}));
const Result = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.headline}>
          <HeaderStepper />
          <br/>
          <Hidden smDown>
            <Typography variant='h4' gutterbottom='true'>
              <strong>No Resi : </strong>
              <span>MW324324</span>
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='h5' gutterbottom='true'>
              <strong>No Resi : </strong>
              <span>MW324324</span>
            </Typography>
          </Hidden>
        </Grid>
        <hr />
        <Grid item xs={12}>
          <SingleRes Progress={<Progress/>}/>
          {/* <DoubleRes ProgressDouble={<Progress/>}/> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Result;
