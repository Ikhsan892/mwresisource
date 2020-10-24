import React from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DeviceUnknownIcon from "@material-ui/icons/DeviceUnknown";
import TodayIcon from "@material-ui/icons/Today";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import WorkIcon from "@material-ui/icons/Work";
import ErrorIcon from "@material-ui/icons/Error";
import { Progress } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { getResiData } from "../../../actions";

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: "50px",
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
    // borderRightStyle: "groove",
  },
  button: {
    marginTop: "100px",
  },
  biru: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
  nested: {
    paddingLeft: theme.spacing(6),
  },
  avatar: {
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));

const DoubleRes = () => {
  const classes = useStyles();
  const { data } = useSelector((state) => state.track);
  const { customer, barang, no_resi } = data;
  const dispatch = useDispatch();
  const [kebuka, setKebuka] = React.useState(false);

  const handleClick = () => {
    setKebuka(!kebuka);
  };
  return (
    <div>
      <Grid container>
        <Grid container justify='center'>
          <Grid item xs={6} className={classes.grid}>
            <Avatar className={classes.avatar}>
              <AccountCircleOutlinedIcon />
            </Avatar>
            <Hidden smDown>
              <Typography variant='h6' gutterbottom='true' align='center'>
                <div>{customer}</div>
              </Typography>
              <Typography variant='subtitle2' align='center'>
                customer
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography variant='body1' gutterbottom='true' align='center'>
                <div>{customer}</div>
              </Typography>
              <Typography variant='subtitle2' align='center'>
                customer
              </Typography>
            </Hidden>
          </Grid>
        </Grid>
        <Divider />
        <div className={classes.div}>
          {barang.map((item) => {
            return (
              <div className={classes.gridInside}>
                <Card elevation={2}>
                  <CardContent>
                    <Grid container direction='column'>
                      <div style={{ height: "300px", overflow: "auto" }}>
                        <Grid item>
                          <List>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar className={classes.biru}>
                                  <DeviceUnknownIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={item.barang}
                                secondary='Nama Barang'
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar className={classes.biru}>
                                  <TodayIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={item.tanggal_masuk}
                                secondary='Tanggal Masuk'
                              />
                            </ListItem>
                            <ListItem>
                              <ListItemAvatar>
                                <Avatar className={classes.biru}>
                                  <WorkIcon />
                                </Avatar>
                              </ListItemAvatar>
                              <ListItemText
                                primary={item.layanan}
                                secondary='Layanan'
                              />
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
                                {item.kerusakan.map((v, index) => {
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
                        <Progress
                          status={item.status}
                          active={item.active_status}
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        <Grid container justify='center'>
          <Grid item>
            <Button
              variant='outlined'
              color='primary'
              className={classes.button}
              endIcon={<ArrowForwardIcon />}
              component={Link}
              onClick={() => {
                dispatch(getResiData(no_resi));
              }}
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
