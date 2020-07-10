import React from "react";
import { makeStyles } from "@material-ui/styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import ImageIcon from '@material-ui/icons/Image';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import PrintIcon from '@material-ui/icons/Print';
import clsx from "clsx";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  colors,
} from "@material-ui/core";
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
      position: 'relative',
      '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        marginTop : '20px',
        right: theme.spacing(10),
      },
  },
  content: {
    padding: theme.spacing(6),
    minWidth: "800px",
  },
  kop: {
    width: "auto",
    height: "200px",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: "auto",
    },
  },
  marginTop: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
  dates: {
    padding: theme.spacing(2),
    border: "1px solid " + colors.grey[100],
  },
}));
const actions = [
  { icon: <ImageIcon />, name: 'Png' },
  { icon: <PictureAsPdfIcon />, name: 'PDF' },
  { icon: <PrintIcon />, name: 'Print' },
];
const Result = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <div>
      <Card className={clsx(classes.root)}>
        <Box overflow='auto' component='div'>
          <CardContent className={classes.content}>
            <Grid container justify='space-between'>
              <Grid item>
                <LazyLoadImage
                  src='/assets/mwlogo2.png'
                  alt='logo makersware'
                  effect='blur'
                  className={classes.kop}
                />
              </Grid>
              <Grid item>
                <Typography align='right' component='h3' variant='h3'>
                  LUNAS
                </Typography>
              </Grid>
            </Grid>
            <Grid
              alignItems='center'
              className={classes.marginTop}
              container
              justify='space-between'>
              <Grid item>
                <Typography variant='h5'>Makersware Service Center</Typography>
              </Grid>
              <Grid item>
                <Typography align='right'>
                  Invoice #MW232144243434234242
                </Typography>
              </Grid>
            </Grid>
            <Grid
              className={classes.marginTop}
              container
              justify='space-between'>
              <Grid item>
                <Typography>
                  Jl. Pengasinan Tengah Raya No. 99 Rawalumbu
                  <br />
                  Kota Bekasi,
                  <br />
                  Jawa Barat 17115
                </Typography>
              </Grid>
              <Grid item></Grid>
              <Grid item>
                <Typography align='right'>
                  Email: admin@makersware.web.id <br />
                  WhatsApp : 0896-3199-6733
                </Typography>
              </Grid>
            </Grid>
            <Grid
              className={clsx(classes.marginTop, classes.dates)}
              container
              justify='space-between'>
              <Grid item>
                <Typography component='h4' gutterBottom variant='overline'>
                  Tanggal Invoice
                </Typography>
                <Typography>04 April 2020</Typography>
              </Grid>
              <Grid item>
                <Typography component='h4' gutterBottom variant='overline'>
                  Pengiriman
                </Typography>
                <Typography>COD</Typography>
              </Grid>
              <Grid item>
                <Typography component='h4' gutterBottom variant='overline'>
                  Metode Pembayaran
                </Typography>
                <Typography>Transfer Bank</Typography>
              </Grid>
            </Grid>
            <Grid
              container
              justify='space-between'
              className={classes.marginTop}>
              <Grid item>
                <Typography component='h4' gutterBottom variant='overline'>
                  Tagihan Untuk
                </Typography>
                <Typography>
                  Muhammad Fatihul Ikhsan <br />
                  Jl.Putat No. 26 <br />
                  Kota Bekasi <br />
                  Jawa Barat <br />
                  088976972688 <br />
                </Typography>
              </Grid>
              <Grid item>
                <Typography component='h4' gutterBottom variant='overline'>
                  Garansi
                </Typography>
                <Typography>1 Bulan</Typography>
              </Grid>
            </Grid>
            <Table className={classes.marginTop}>
              <TableHead>
                <TableRow>
                  <TableCell>Deskirpsi</TableCell>
                  <TableCell />
                  <TableCell align='right'>Harga</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Lcd Xiaomi Redmi 5A</TableCell>
                  <TableCell />
                  <TableCell align='right'>Rp 400.000,-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>connector original Xiaomi</TableCell>
                  <TableCell />
                  <TableCell align='right'>Rp 100.000,-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell>Subtotal</TableCell>
                  <TableCell align='right'>Rp 450.000,-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell>Biaya Service</TableCell>
                  <TableCell align='right'>Rp 50.000,-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell />
                  <TableCell>Total</TableCell>
                  <TableCell align='right'>
                    <strong>Rp 500.000,-</strong>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className={classes.marginTop}>
              <Typography component='h4' gutterBottom variant='overline'>
                Notes
              </Typography>
              <Typography>
                Setiap service 1 barang anda akan mendapatkan Garansi 1 Bulan
              </Typography>
            </div>
          </CardContent>
        </Box>
      </Card>
      <br />
      <SpeedDial
          ariaLabel="Download Options"
          className={classes.button}
          icon={<GetAppIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction='Left'
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
    </div>
  );
};

export default Result;
