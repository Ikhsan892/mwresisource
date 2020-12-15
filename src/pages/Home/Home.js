import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneIcon from "@material-ui/icons/Phone";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Helmet } from "react-helmet";
import Testi from "./testi";
// import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    backgroundColor: "#f2f2f2",
    marginTop: -50,
    [theme.breakpoints.up("lg")]: {
      marginTop: -25,
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  section1: {
    paddingTop: 60,
    overflow: "hidden",
    width: "100vw",
    display: "flex",
    alignItems: "center",
  },
  section1flex4: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  section1image: {
    height: "92vh",
    background: `url("/assets/section1banner.jpg") no-repeat`,
    clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
  },
  section1mobile: {
    position: "relative",
    marginTop: 50,
    height: 414,
    background: `url("/assets/section1banner.jpg") no-repeat`,
    backgroundSize: "cover",
    clipPath: "polygon(100% 0%, 100% 100%, 0 85%, 0 0)",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  span: {
    color: theme.palette.primary.main,
  },
  section1text: {
    fontWeight: 600,
    color: "#fff",
    width: "70%",
    textAlign: "left",
    [theme.breakpoints.up("lg")]: {
      color: "#000",
      width: "100%",
      fontSize: 60,
    },
  },
  section1textsub: {
    letterSpacing: 6,
    fontSize: 15,
    width: "40%",
    marginTop: 20,
    color: "#fff",
    [theme.breakpoints.up("lg")]: {
      color: "#000",
      width: "60%",
      textAlign: "left",
      fontSize: 20,
      marginTop: 20,
      letterSpacing: 10,
    },
  },
  drop_filter: {
    backdropFilter: "brightness(0.6)",
    height: 414,
    marginTop: -60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 70,
  },
  section1button: {
    borderRadius: 30,
    width: "30%",
    marginTop: 20,
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      fontSize: 20,
      height: 60,
      backgroundColor: "transparent",
      color: theme.palette.primary.main,
      marginTop: 50,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
      },
    },
  },
  section2text: {
    fontWeight: 600,
    width: "50%",
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      fontWeight: 900,
      width: "100%",
      fontSize: 30,
    },
  },
  section2benefits: {
    display: "flex",
    marginBottom: 15,
    flexDirection: (props) =>
      props.direction === "right" ? "row-reverse" : "row",
  },
  section2benefitsline: {
    height: "auto",
    backgroundColor: theme.palette.primary.main,
    marginLeft: 10,
    marginRight: 10,
    width: 10,
  },
  section2benefitscontent: {
    display: "flex",
    flexDirection: "column",
    textAlign: (props) => props.direction,
  },
  section2benefitswrapper: {
    padding: "0 30px",
    marginTop: 50,
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      padding: "0 70px",
    },
  },
  section2benefitschild: {
    display: "block",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flex: 4,
      flexWrap: "wrap",
      alignContent: "space-between",
    },
  },
  section2benefitsimage: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "block",
      flex: 7,
      width: "50%",
      marginLeft: 50,
    },
  },
  section3: {
    marginTop: 70,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContents: "space-between",
  },
  section3lineleft: {
    height: 3,
    width: "50%",
    backgroundColor: theme.palette.primary.main,
    marginBottom: 20,
    float: "left",
    [theme.breakpoints.up("lg")]: {
      height: 5,
    },
  },
  section3lineright: {
    height: 3,
    width: "70%",
    backgroundColor: theme.palette.primary.main,
    float: "right",
    [theme.breakpoints.up("lg")]: {
      height: 5,
    },
  },
  detailsection: {
    marginBottom: 60,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    [theme.breakpoints.up("lg")]: {
      flexDirection: (props) =>
        props.arah === "right" ? "row-reverse" : "row",
      marginBottom: 100,
      alignItems: "center",
    },
  },
  detailsectioncontent: {
    fontSize: 16,
    width: "70%",
    margin: "0 auto",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
      width: "100%",
      textAlign: "left",
    },
  },
  detailsectiontitle: {
    textAlign: "center",
    fontWeight: 600,
    [theme.breakpoints.up("lg")]: {
      fontSize: 45,
      textAlign: "left",
    },
  },
  innerdetailsection: {
    [theme.breakpoints.up("lg")]: {
      flex: 2,
    },
  },
  detailsectionimage: {
    height: 200,
    width: 200,
    [theme.breakpoints.up("lg")]: {
      height: 450,
      width: 450,
    },
  },
  innerdetailsection1: {
    marginBottom: 25,
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: (props) => (props.arah === "right" ? 200 : 0),
      flex: 2,
    },
  },
  imagebrand: {
    height: 200,
    width: 200,
  },
  grayscaling: {
    filter: "grayscale(100%)",
    transition: "filter 0.5s",
    "&:hover": {
      filter: "grayscale(0%)",
      transition: "filter 0.5s",
      cursor: "pointer",
    },
  },
  gridImage: {
    height: 30,
    width: "auto",
    [theme.breakpoints.up("lg")]: {
      height: 40,
      width: "auto",
    },
  },
  gridWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sosmed: {
    height: 50,
    width: 50,
    borderRadius: 30,
    border: "1px solid #c2c2c2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      border: "none",
    },
  },
  section4: {
    padding: "0 70px",
    marginTop: 70,
  },
}));
const pembayaran = [
  {
    img: "/assets/btn.png",
    alt: "Bank BTN",
  },
  {
    img: "/assets/bca.png",
    alt: "Bank Central Asia",
  },
  {
    img: "/assets/dana.png",
    alt: "Dana",
  },
  {
    img: "/assets/ovo.png",
    alt: "OVO",
  },
  {
    img: "/assets/indomaret.png",
    alt: "Indomaret",
  },
  {
    img: "/assets/alfamart.png",
    alt: "Alfamart",
  },
];
const brands = [
  {
    img: "/assets/xiaomi.png",
    alt: "Xiaomi",
  },
  {
    img: "/assets/oppo.png",
    alt: "Oppo",
  },
  {
    img: "/assets/vivo.png",
    alt: "Vivo",
  },
  {
    img: "/assets/samsung.png",
    alt: "Samsung",
  },
  {
    img: "/assets/lenovo.png",
    alt: "Lenovo",
  },
  {
    img: "/assets/asus.png",
    alt: "Asus",
  },
  {
    img: "/assets/apple.png",
    alt: "Apple",
  },
  {
    img: "/assets/realme.png",
    alt: "Realme",
  },
];
const DetailSection = ({ src, title, content, direction }) => {
  const classes = useStyles({ arah: direction });
  return (
    <div className={classes.detailsection}>
      <div className={classes.innerdetailsection1}>
        <img className={classes.detailsectionimage} src={src} alt={title} />
      </div>
      <div className={classes.innerdetailsection}>
        <h3 className={classes.detailsectiontitle}>{title}</h3>
        <p className={classes.detailsectioncontent}>{content}</p>
      </div>
    </div>
  );
};
const Benefits = ({ index, head, body, direction }) => {
  const classes = useStyles({ direction: direction });
  return (
    <div className={classes.section2benefits}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}>
        <Typography
          variant='h1'
          style={{
            color: "#c3c3c3",
            fontSize: 70,
          }}>
          {index}
        </Typography>
      </div>
      <div className={classes.section2benefitsline}></div>
      <div className={classes.section2benefitscontent}>
        <p
          style={{
            fontWeight: 600,
            fontSize: 25,
          }}>
          {head}
        </p>
        <p
          style={{
            fontSize: 15,
          }}>
          {body}
        </p>
      </div>
    </div>
  );
};
const Home = () => {
  const classes = useStyles();
  // const { navitem } = useSelector((state) => state.layout.navbar);
  // const { layout_loading } = useSelector((state) => state.loading);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <div className={classes.root}>
      <Helmet>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Service Center' />
        <title>Makersware Service Center</title>
      </Helmet>
      <section className={classes.section1mobile}>
        <div className={classes.drop_filter}>
          <Typography variant='h3' className={classes.section1text}>
            Makersware Service <span className={classes.span}>Center</span>
          </Typography>
          <Typography
            variant='subtitle2'
            className={classes.section1textsub}
            align='center'>
            Solution For Your Gadget
          </Typography>
          <Button
            variant='outlined'
            color='primary'
            size='large'
            className={classes.section1button}>
            Book Now
          </Button>
        </div>
      </section>
      <Hidden mdDown>
        <section className={classes.section1}>
          <div className={classes.section1flex4}>
            <div
              style={{
                paddingLeft: 90,
              }}>
              <Typography variant='h3' className={classes.section1text}>
                Makersware Service <span className={classes.span}>Center</span>
              </Typography>
              <Typography
                variant='subtitle2'
                className={classes.section1textsub}
                align='center'>
                Solution For Your Gadget
              </Typography>
              <Button
                variant='outlined'
                color='primary'
                size='large'
                className={classes.section1button}>
                Book Now
              </Button>
            </div>
          </div>
          <div
            style={{
              width: "60%",
            }}>
            <img
              src='/assets/section1banner.jpg'
              className={classes.section1image}
              alt='Hero Section'
            />
          </div>
        </section>
      </Hidden>
      <section
        style={{
          marginTop: 70,
        }}>
        <Typography
          variant='h6'
          align='center'
          className={classes.section2text}>
          <span className={classes.span}>4</span>
          {matches ? "" : <br />} Alasan Anda Harus Service Disini
        </Typography>
        <main className={classes.section2benefitswrapper}>
          <div className={classes.section2benefitschild}>
            <Benefits
              index={1}
              head='Original Sparepart'
              body='Kami menjamin sparepart yang kami gunakan original 100% pabrik'
              direction='left'
            />
            <Benefits
              index={2}
              head='Teknisi Handal'
              body='Tenang aja barang kamu ditangani
              teknisi yang super handal'
              direction={matches ? "left" : "right"}
            />
          </div>
          <div
            className={clsx(
              classes.section2benefitsimage,
              classes.section2benefitschild
            )}>
            <img src='/assets/mwlogo2.png' alt='Logo Makersware' />
          </div>
          <div className={classes.section2benefitschild}>
            <Benefits
              index={3}
              head='Bergaransi'
              body='Setiap barang yang kamu servis akan
            mendapatkan garansi'
              direction={matches ? "right" : "left"}
            />
            <Benefits
              index={4}
              head='Terjangkau'
              body='Harga yang kami tawarkan pasti cocok
            denganmu'
              direction='right'
            />
          </div>
        </main>
      </section>
      <section className={classes.section3}>
        <div>
          <div className={classes.section3lineleft}></div>
        </div>
        <div>
          <div className={classes.section3lineright}></div>
        </div>
      </section>
      <section className={classes.section4}>
        <DetailSection
          src='/assets/track.svg'
          title='Lacak Gadget-Mu dengan Mudah'
          content='Saat di service kamu bisa
tau perkembangan
gadgetmu saat ini
'
          direction='left'
        />
        <DetailSection
          src='/assets/pengiriman.svg'
          title='Pengiriman Mudah'
          content='Kamu bisa pilih
          pengiriman selain COD
          saat kamu #DiRumahAja
'
          direction='right'
        />
        <DetailSection
          src='/assets/diskon.svg'
          title='Diskon Melimpah'
          content='Banyak Diskon
          menantimu saat kamu
          servis Gadget-Mu di
          Makersware
'
          direction='left'
        />
      </section>
      <section className={classes.section3}>
        <div>
          <div className={classes.section3lineleft}></div>
        </div>
        <div>
          <div className={classes.section3lineright}></div>
        </div>
      </section>
      <section
        style={{
          marginTop: 70,
          padding: "0px 10px",
        }}>
        <div>
          <Typography
            variant='h6'
            align='center'
            className={classes.section2text}>
            <span className={classes.span}>Testimoni</span> dari mereka yang
            puas
          </Typography>
        </div>
        <div>
          <Testi />
        </div>
      </section>
      <section
        style={{
          marginTop: 90,
          padding: "0px 35px",
        }}>
        <Typography
          variant='h6'
          align='center'
          className={classes.section2text}>
          Berbagai <span className={classes.span}>Brand</span> Dapat Diservis
          Disini
        </Typography>
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='center'
          spacing={3}
          style={{
            marginTop: 35,
          }}>
          {brands.map((i) => {
            return (
              <Grid item className={classes.gridWrapper} key={i}>
                <img
                  src={i.img}
                  className={clsx(classes.gridImage, classes.grayscaling)}
                  alt={i.alt}
                />
              </Grid>
            );
          })}
        </Grid>
      </section>
      <section
        style={{
          marginTop: 90,
          padding: "0px 35px",
        }}>
        <Typography
          variant='h6'
          align='center'
          className={classes.section2text}>
          Metode <span className={classes.span}>Pembayaran</span>
        </Typography>
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='center'
          spacing={3}
          style={{
            marginTop: 35,
          }}>
          {pembayaran.map((i) => {
            return (
              <Grid item className={classes.gridWrapper} key={i}>
                <img src={i.img} className={classes.gridImage} alt={i.alt} />
              </Grid>
            );
          })}
        </Grid>
      </section>
      <section
        style={{
          marginTop: 200,
          backgroundColor: "#002839",
          height: 250,
          transform: "skewY(5deg)",
        }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            transform: "skewY(-5deg)",
          }}>
          <Typography
            variant='h6'
            align='center'
            className={classes.section2text}>
            <span
              style={{
                color: "#fff",
              }}>
              Booking Segera !!
            </span>
          </Typography>
          <Fab
            variant='extended'
            color='primary'
            style={{
              marginTop: 30,
            }}>
            <PhoneIcon className={classes.extendedIcon} />
            Book Now
          </Fab>
        </div>
      </section>
      <section
        style={{
          marginTop: 80,
          marginBottom: 100,
        }}>
        <Typography
          variant='h6'
          align='center'
          className={classes.section2text}>
          Ikuti Media Sosial Kami
        </Typography>
        <Grid
          container
          justify='center'
          alignItems='center'
          spacing={3}
          style={{ marginTop: 50 }}>
          <Grid item>
            <a href='https://instagram.com/makerswareofficial' target='__blank'>
              <div className={classes.sosmed}>
                <InstagramIcon color='inherit' />
              </div>
            </a>
          </Grid>
          <Grid item>
            <a href='https://facebook.com' target='__blank'>
              <div className={classes.sosmed}>
                <FacebookIcon color='inherit' />
              </div>
            </a>
          </Grid>
          <Grid item>
            <a href='https://twitter.com' target='__blank'>
              <div className={classes.sosmed}>
                <TwitterIcon color='inherit' />
              </div>
            </a>
          </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default Home;
