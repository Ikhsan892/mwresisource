import React from "react";
import {
  Avatar,
  Button,
  Collapse,
  Grid,
  Hidden,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DeviceUnknownIcon from "@material-ui/icons/DeviceUnknown";
import TodayIcon from "@material-ui/icons/Today";
import ExpandLess from "@material-ui/icons/ExpandLess";
import { Link } from "react-router-dom";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ErrorIcon from "@material-ui/icons/Error";
import WorkIcon from "@material-ui/icons/Work";
import { useSelector, useDispatch } from "react-redux";
import { Progress } from "./index";
import { getResiData } from "../../../actions";
//../../actions
const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "50px",
    marginBottom: "5px",
  },
  grid2: {
    marginBottom: "10px",
  },
  biru: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
  nested: {
    paddingLeft: theme.spacing(6),
  },
}));

const SingleRes = () => {
  const classes = useStyles();
  const [kebuka, setKebuka] = React.useState(false);
  const { data } = useSelector((state) => state.track);
  const dispatch = useDispatch();
  const {
    customer,
    no_resi,
    barang: {
      0: { barang, tanggal_masuk, layanan, kerusakan, status, active_status },
    },
  } = data;
  const handleClick = () => {
    setKebuka(!kebuka);
  };
  return (
    <div>
      <Grid container justify='center'>
        <Grid item xs={6} className={classes.grid}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.biru}>
                  <AccountCircleOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={customer} secondary='Nama' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.biru}>
                  <DeviceUnknownIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={barang} secondary='Barang' />
            </ListItem>
            <ListItem button onClick={handleClick}>
              <ListItemAvatar>
                <Avatar className={classes.biru}>
                  <ErrorIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Kerusakan' />
              {kebuka ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={kebuka} timeout='auto'>
              <List component='div' disablePadding>
                {kerusakan.map((v, index) => {
                  return (
                    <ListItem className={classes.nested}>
                      <ListItemIcon>
                        <ArrowForwardIcon />
                      </ListItemIcon>
                      <ListItemText primary={v} />
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item xs={6} className={classes.grid}>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.biru}>
                  <TodayIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={tanggal_masuk} secondary='Tanggal Masuk' />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={classes.biru}>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={layanan} secondary='Layanan' />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.grid2}>
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
          <Progress status={status} active={active_status} />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify='center'>
            <Button
              variant='outlined'
              color='primary'
              component={Link}
              to='/invoice'
              onClick={() => {
                dispatch(getResiData(no_resi));
              }}
              className={classes.button}
              endIcon={<ArrowForwardIcon />}>
              {" "}
              Cek Invoice-mu Langsung
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SingleRes;
