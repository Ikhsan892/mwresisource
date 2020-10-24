import React from "react";
import { makeStyles } from "@material-ui/styles";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import TodayIcon from "@material-ui/icons/Today";
import Interwave from "interweave";
import Barcode from "react-barcode";
import { useSelector, useDispatch } from "react-redux";
import { notDownloadFile } from "../../../actions";
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
  colors,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "unset !important",
    marginTop: "-20px",
    overflow: "auto",
    [theme.breakpoints.only("sm")]: {
      zoom: "50%",
    },
    [theme.breakpoints.only("xs")]: {
      zoom: "27%",
    },
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
    textAlign: "center",
  },
  kop2kanan: {
    marginTop: "10px",
    paddingTop: "30px",
  },
}));

const Result = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { download } = useSelector((state) => state.download);
  const { data } = useSelector((state) => state.resi);
  const {
    tanggal,
    pengiriman,
    pembayaran,
    invoiceId,
    logo_pengiriman,
    jenis_logo_pengiriman,
    logo_pembayaran,
    jenis_logo_pembayaran,
    tagihan: { untuk, alamat, kota_kab, provinsi, kode_pos, no_telp },
    garansi: { durasi },
    dp,
    inv: {
      row: { barang, sparepart, harga },
      subtotal,
      additional,
      total,
      note,
    },
  } = data;
  const renderToPdf = async (el) => {
    const canvas = await new html2canvas(el);
    let imgData = await canvas.toDataURL("image/png");
    const pdf = await new jsPDF({
      orientation: "portrait",
    });
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Invoice ${invoiceId}`);
    dispatch(notDownloadFile());
  };
  React.useEffect(() => {
    if (download === true) {
      const input = document.getElementById("invoice");
      renderToPdf(input);
    }
  }, [download]);
  function formatRupiah(angka, prefix = undefined) {
    let number_string = angka.replace(/[^,\d]/g, "").toString();
    let split = number_string.split(",");
    let sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    return prefix == undefined ? rupiah : rupiah ? "" + rupiah : "";
  }
  return (
    <React.Fragment>
      <Card className={clsx(classes.root)} id='invoice'>
        <CardContent className={classes.content}>
          <Grid
            container
            justify='space-between'
            style={{
              borderBottom: "2px ridge #000",
            }}>
            <Grid item xs={4}>
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
            <Grid item xs={4}>
              <div className={classes.kop2tengah}>
                <div className={classes.kop2}>SERVICE</div>
                <div className={classes.kop2}>CENTER</div>
              </div>
            </Grid>
            <Grid item xs={4}>
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
          <Grid className={classes.marginTop} container justify='space-between'>
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
                    src={`data:image/${jenis_logo_pengiriman};base64,${logo_pengiriman}`}
                    style={{
                      height: "50px",
                    }}
                    alt='kurir'
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
                    src={`data:image/${jenis_logo_pembayaran};base64,${logo_pembayaran}`}
                    style={{
                      height: "50px",
                    }}
                    alt='metode pembayaran'
                  />
                </span>
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify='space-between' className={classes.marginTop}>
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
              <Typography className={classes.textbiasa}>{durasi}</Typography>
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
          <Table className={classes.marginTop} size='small'>
            <TableHead>
              <TableRow>
                <TableCell className={classes.textbiasa}>
                  <Typography
                    variant='overline'
                    className={classes.overlinetext}>
                    Barang
                  </Typography>
                </TableCell>
                <TableCell className={classes.textbiasa}>
                  <Typography
                    variant='overline'
                    className={classes.overlinetext}>
                    Sparepart
                  </Typography>
                </TableCell>
                <TableCell />
                <TableCell align='right' className={classes.textbiasa}>
                  <Typography
                    variant='overline'
                    className={classes.overlinetext}>
                    Harga
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={classes.textbiasa}>
                  {barang.map((b, index) => {
                    return <div>-&gt; {b}</div>;
                  })}
                </TableCell>
                <TableCell className={classes.textbiasa}>
                  {sparepart.map((s, index) => {
                    return <div>-&gt; {s}</div>;
                  })}
                </TableCell>
                <TableCell />
                <TableCell align='right' className={classes.textbiasa}>
                  {harga.map((h, index) => {
                    return <div>Rp {formatRupiah(h.toString())},-</div>;
                  })}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell className={classes.textbiasa}>Subtotal</TableCell>
                <TableCell align='right' className={classes.textbiasa}>
                  Rp {formatRupiah(subtotal.toString())},-
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
                      Rp {formatRupiah(add.biaya.toString())},-
                    </TableCell>
                  </TableRow>
                );
              })}
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell className={classes.textbiasa}>Total</TableCell>
                <TableCell align='right' className={classes.textbiasa}>
                  <strong>Rp {formatRupiah(total.toString())},-</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Grid container justify='space-between' className={classes.marginTop}>
            <Grid item>
              <Typography
                component='h4'
                gutterBottom
                variant='overline'
                className={classes.overlinetext}>
                Notes
              </Typography>
              <Interwave content={note} />
            </Grid>
            <Grid item>
              <Typography
                component='h4'
                gutterBottom
                variant='overline'
                className={classes.overlinetext}>
                DP
              </Typography>
              <Typography className={classes.textbiasa}>
                <em>Rp {formatRupiah(dp.toString())},-</em>
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <br />
    </React.Fragment>
  );
};

export default Result;
