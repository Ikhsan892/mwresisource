import React from "react";
import { Grid, Typography, Hidden, Card, CardContent } from "@material-ui/core";
import { HeaderStepper, SingleRes, DoubleRes } from "./index";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    maxWidth: "350px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-10px",
    height: "150px",
    borderRadius: "20px",
  },
}));
const Result = () => {
  const classes = useStyles();
  const { data } = useSelector((state) => state.track);
  const { no_resi, jumlah_barang } = data;
  return (
    <div>
      <Card elevation={0}>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <HeaderStepper />
              <br />
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant='subtitle2' align='center'>
                    Nomor Resi
                  </Typography>
                  <Typography
                    gutterbottom='true'
                    align='center'
                    style={{
                      fontWeight: "bold",
                      fontSize: "50px",
                    }}>
                    <div>{no_resi}</div>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12}>
              {jumlah_barang > 1 ? <DoubleRes /> : <SingleRes />}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Result;
