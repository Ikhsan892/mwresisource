import React from "react";
import { makeStyles } from "@material-ui/styles";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TodayIcon from "@material-ui/icons/Today";
import Barcode from "react-barcode";
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

const testingResult = () => {
  return {
    tanggal: "04 April 2020",
    pengiriman: "Go-Send",
    pembayaran: "Dana",
    invoiceId: "MW32432",
    tagihan: {
      untuk: "Muhammad Fatihul Ikhsan",
      alamat: "Jl. Putat No. 26",
      kota_kab: "Kota Bekasi",
      provinsi: "Jawa Barat",
      kode_pos: "17165",
      no_telp: "088210891684",
    },
    garansi: {
      durasi: "1",
      lama: "tahun",
    },
    inv: {
      row: [
        {
          barang: "Xiaomi Redmi 8A",
          sparepart: "LCD Original Xiaomi",
          harga: "700.000",
        },
        {
          barang: "",
          sparepart: "Flexible Original",
          harga: "50.000",
        },
        {
          barang: "",
          sparepart: "IC Power",
          harga: "20.000",
        },
      ],
      subtotal: "770.000",
      additional: [
        {
          judul: "Biaya Service",
          biaya: "50.000",
        },
        {
          judul: "Ongkir",
          biaya: "10.000",
        },
      ],
      total: "830.000",
      notes: "Jaga barang anda ya..",
    },
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "unset !important",
    marginTop: "-20px",
  },
  content: {
    padding: theme.spacing(6),
    minWidth: "1232px",
  },
  kop: {
    width: "auto",
    height: "150px",
  },
  marginTop: {
    marginTop: theme.spacing(4),
    width: "100%",
  },
  dates: {
    padding: theme.spacing(2),
    border: "1px solid " + colors.grey[500],
  },
  overlinetext: {
    fontSize: "15px",
  },
  textbiasa: {
    fontSize: "20px",
  },
  invoiceId: {
    border: "2px dashed #000",
    padding: "5px 5px",
    fontSize: "30px",
    letterSpacing: "1px",
    fontWeight: "200px",
  },
  kop2: {
    fontSize: "50px",
    fontWeight: "bolder",
    marginBottom: "-25px",
  },
  kop2tengah: {
    marginTop: "8px",
  },
  kop2kanan: {
    marginTop: "10px",
    paddingTop: "30px",
  },
}));

const Result = () => {
  const classes = useStyles();
  const {
    tanggal,
    pengiriman,
    pembayaran,
    invoiceId,
    tagihan: { untuk, alamat, kota_kab, provinsi, kode_pos, no_telp },
    garansi: { durasi, lama },
    inv: { row, subtotal, additional, total, notes },
  } = testingResult();
  React.useEffect(() => {
    // const input = document.getElementById("invoice");
    // html2canvas(input, {
    //   logging: true,
    //   backgroundColor: null,
    // }).then((canvas) => {
    //   let imgData = canvas.toDataURL("image/png");
    //   console.log(imgData);
    //   const pdf = new jsPDF({
    //     orientation: "portrait",
    //   });
    //   const imgProps = pdf.getImageProperties(imgData);
    //   const pdfWidth = pdf.internal.pageSize.getWidth();
    //   const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    //   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    //   pdf.save("invoiceprint.pdf");
    // });
  }, []);
  return (
    <div>
      <Card className={clsx(classes.root)} id='invoice'>
        <Box overflow='auto' component='div'>
          <CardContent className={classes.content}>
            <Grid
              container
              justify='space-between'
              style={{
                borderBottom: "2px ridge #000",
              }}>
              <Grid item>
                <div>
                  <img
                    src='/assets/mwlogo2.png'
                    alt='logo makersware'
                    className={classes.kop}
                  />
                  <img
                    src='/assets/mwlogo.png'
                    alt='Logo mw 2'
                    style={{ height: "70px" }}
                  />
                </div>
              </Grid>
              <Grid item>
                <div className={classes.kop2tengah}>
                  <div className={classes.kop2}>SERVICE</div>
                  <div className={classes.kop2}>CENTER</div>
                </div>
              </Grid>
              <Grid item>
                <Typography align='right' className={classes.kop2kanan}>
                  <strong>
                    <em>Receiving of electronic parts and service</em>
                  </strong>
                  <br />
                  Handphone | Laptop | Notebook | Computer (CPU)
                  <br />
                  LCD Monitor & TV | Speaker & Amplifier | etc
                </Typography>
              </Grid>
            </Grid>
            <Grid
              alignItems='center'
              className={classes.marginTop}
              container
              justify='space-between'>
              <Grid item>
                <Typography align='left'>
                  <Typography align='right' className={classes.invoiceId}>
                    {invoiceId}
                  </Typography>
                </Typography>
              </Grid>
              <Grid item>
                <Barcode
                  value={invoiceId}
                  height='50'
                  width='3'
                  displayValue='false'
                />
              </Grid>
              <Grid item>
                <div>
                  <div
                    style={{
                      borderBottom: "5px solid #000",
                      paddingBottom: "3px",
                      marginBottom: "3px",
                      fontSize: "25px",
                      fontWeight: "900",
                    }}>
                    KWITANSI
                  </div>
                  <div
                    style={{
                      fontSize: "25px",
                      textAlign: "center",
                    }}>
                    RECEIPT
                  </div>
                </div>
              </Grid>
            </Grid>
            <Grid
              className={classes.marginTop}
              container
              justify='space-between'>
              <Grid item>
                <Typography variant='overline' className={classes.overlinetext}>
                  workshop
                </Typography>
                <Typography className={classes.textbiasa}>
                  Jl. Pengasinan Tengah Raya No. 99 Rawalumbu
                  <br />
                  Kota Bekasi,
                  <br />
                  Jawa Barat 17115
                </Typography>
              </Grid>
              <Grid item></Grid>
              <Grid item>
                <Typography variant='overline' className={classes.overlinetext}>
                  contact us
                </Typography>
                <Typography align='right' className={classes.textbiasa}>
                  Email: admin@makersware.web.id <br />
                  WhatsApp : 0896-3199-6733 <br />
                  Instagram : @makerswareofficial <br />
                </Typography>
              </Grid>
            </Grid>
            <Grid
              className={clsx(classes.marginTop, classes.dates)}
              container
              justify='space-between'>
              <Grid item>
                <Typography
                  component='h4'
                  gutterBottom
                  variant='overline'
                  className={classes.overlinetext}>
                  Tanggal Invoice
                </Typography>
                <Typography className={classes.textbiasa}>
                  {tanggal}{" "}
                  <span>
                    <TodayIcon />
                  </span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  component='h4'
                  gutterBottom
                  variant='overline'
                  className={classes.overlinetext}>
                  Pengiriman
                </Typography>
                <Typography className={classes.textbiasa}>
                  {pengiriman}

                  <span>
                    <img
                      src='/assets/gojek.svg'
                      style={{
                        height: "50px",
                      }}
                      alt='gojek'
                    />
                  </span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  component='h4'
                  gutterBottom
                  variant='overline'
                  className={classes.overlinetext}>
                  Metode Pembayaran
                </Typography>
                <Typography className={classes.textbiasa}>
                  {pembayaran}

                  <span>
                    <img
                      src='/assets/Dana.svg'
                      style={{
                        height: "50px",
                      }}
                      alt='dana'
                    />
                  </span>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              justify='space-between'
              className={classes.marginTop}>
              <Grid item>
                <Typography
                  component='h4'
                  gutterBottom
                  variant='overline'
                  className={classes.overlinetext}>
                  Tagihan Untuk
                </Typography>
                <Typography className={classes.textbiasa}>
                  {untuk} <br />
                  {alamat}
                  <br />
                  {kota_kab}
                  <br />
                  {`${provinsi} ${kode_pos}`}
                  <br />
                  {no_telp} <br />
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  component='h4'
                  gutterBottom
                  variant='overline'
                  className={classes.overlinetext}>
                  Garansi
                </Typography>
                <Typography
                  className={
                    classes.textbiasa
                  }>{`${durasi} ${lama}`}</Typography>
              </Grid>
            </Grid>
            <Grid container justify='center'>
              <Typography
                component='h4'
                gutterBottom
                variant='overline'
                className={classes.overlinetext}>
                Informasi Kerusakan / Perbaikan
              </Typography>
            </Grid>
            <Table className={classes.marginTop}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.textbiasa}>Barang</TableCell>
                  <TableCell className={classes.textbiasa}>Sparepart</TableCell>
                  <TableCell />
                  <TableCell align='right' className={classes.textbiasa}>
                    Harga
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((r, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell className={classes.textbiasa}>
                        {r.barang}
                      </TableCell>
                      <TableCell className={classes.textbiasa}>
                        {r.sparepart}
                      </TableCell>
                      <TableCell />
                      <TableCell align='right' className={classes.textbiasa}>
                        Rp {r.harga},-
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell className={classes.textbiasa}>Subtotal</TableCell>
                  <TableCell align='right' className={classes.textbiasa}>
                    Rp {subtotal},-
                  </TableCell>
                </TableRow>
                {additional.map((add, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell />
                      <TableCell />
                      <TableCell className={classes.textbiasa}>
                        {add.judul}
                      </TableCell>
                      <TableCell align='right' className={classes.textbiasa}>
                        Rp {add.biaya},-
                      </TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell />
                  <TableCell />
                  <TableCell className={classes.textbiasa}>Total</TableCell>
                  <TableCell align='right' className={classes.textbiasa}>
                    <strong>Rp {total},-</strong>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div className={classes.marginTop}>
              <Typography
                component='h4'
                gutterBottom
                variant='overline'
                className={classes.overlinetext}>
                Notes
              </Typography>
              <Typography className={classes.textbiasa}>{notes}</Typography>
            </div>
          </CardContent>
        </Box>
      </Card>
      <br />
    </div>
  );
};

export default Result;
