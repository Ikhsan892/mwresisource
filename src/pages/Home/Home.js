import React from "react";
import { Grid } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { makeStyles } from "@material-ui/core/styles";
import "./bootstrap.min.css";
import "./Home.css";
import Check from "@material-ui/icons/Check";
import { Link } from "react-router-dom";
import Testi from "./testi";
const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    maxWidth: "345px",
    paddingTop: "40px",
  },
  navbarlogo: {
    color: "white",
    left: 20,
    letterSpacing: "2px",
    float: "left",
    paddingLeft: "100px",
    // textAlign:'center',
    lineHeight: "60px",
  },
  nav: {
    height: "70px",
    background: "transparent",
    borderBottom: "2px solid #fff",
    zIndex: "1",
  },
  ul: {
    color: "#fff",
    float: "right",
    width: "500px",
    paddingRight: "70px",
    display: "flex",
    zIndex: 0,
    listStyle: "none",
    lineHeight: "60px",
    justifyContent: "space-around",
  },
  imagecenter: {
    margin: "0 auto",
  },
  li: {
    fontSize: "15px",
    letterSpacing: "0.5px",
    textDecoration: "none",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      borderBottom: "1px solid #fff",
      transition: "0.3s",
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className='header_area'>
        <div className='main_menu'>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <div className='container box_1620'>
              <a className='navbar-brand logo_h' href='index.html'>
                <LazyLoadImage
                  effect='blur'
                  src='/assets/mwlogo.png'
                  alt='Logo'
                  style={{ height: "50px", filter: "invert(100%)" }}
                />
              </a>
              <div
                className='collapse navbar-collapse offset'
                id='navbarSupportedContent'>
                <ul className='nav navbar-nav menu_nav justify-content-end'>
                  <li className='nav-item active'>
                    <Link className='nav-link' to='/home'>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/track'>
                      Track
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/invoice'>
                      Invoice
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/information'>
                      Informasi
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main className='side-main'>
        <section className='hero-banner mb-30px'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7'>
                <div className='hero-banner__img'>
                  <LazyLoadImage
                    effect='blur'
                    className='img-fluid'
                    src='/assets/mwlogo2.png'
                    alt='Logo mW gede'
                    style={{ filter: "invert(100%)" }}
                  />
                </div>
              </div>
              <div className='col-lg-5 pt-5'>
                <div className='hero-banner__content'>
                  <h1>Makersware Service Center</h1>
                  <p>Life is Your Choice</p>
                  <a
                    className='button bg'
                    href='#'
                    style={{ position: "relative", zIndex: "1" }}>
                    Booking Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-margin'>
          <div className='container'>
            <div className='section-intro pb-85px text-center'>
              <h2 className='section-intro__title'>
                Kenapa Harus Service di Kami?
              </h2>
              <p className='section-intro__subtitle'>
                Berikut 4 keunggulan kami dibanding yang lain
              </p>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='row offer-single-wrapper'>
                  <div className='col-lg-6 offer-single'>
                    <div className='card offer-single__content text-center'>
                      <span className='offer-single__icon'>
                        <Check />
                      </span>
                      <h4>Sistem Service</h4>
                      <p>Sistem service kami dijamin tebaik dari yang tebaik</p>
                    </div>
                  </div>

                  <div className='col-lg-6 offer-single'>
                    <div className='card offer-single__content text-center'>
                      <span className='offer-single__icon'>
                        <Check />
                      </span>
                      <h4>Teknisi Handal</h4>
                      <p>
                        Tenang aja barang kamu ditangani teknisi yang super
                        handal
                      </p>
                    </div>
                  </div>
                </div>

                <div className='row offer-single-wrapper'>
                  <div className='col-lg-6 offer-single'>
                    <div className='card offer-single__content text-center'>
                      <span className='offer-single__icon'>
                        <Check />
                      </span>
                      <h4>Bergaransi</h4>
                      <p>
                        Barang kamu bergaransi selama sebulan kalo service
                        disini
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 offer-single'>
                    <div className='card offer-single__content text-center'>
                      <span className='offer-single__icon'>
                        <Check />
                      </span>
                      <h4>Bisa Sehari Jadi</h4>
                      <p>
                        Butuh cepet ? tenang , tim kami bisa buat gadget mu
                        selesai satu hari
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='offer-single__img'>
                  <LazyLoadImage
                    effect='blur'
                    className='img-fluid'
                    src='/assets/offer.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-padding--small'>
          <div className='container'>
            <div className='row align-items-center pt-xl-3 pb-xl-5'>
              <div className='col-lg-6'>
                <div className='solution__img text-center text-lg-left mb-4 mb-lg-0'>
                  <LazyLoadImage
                    effect='blur'
                    className='img-fluid'
                    src='/assets/kirim.svg'
                    alt='Ekspedisi'
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='solution__content'>
                  <h2>
                    <strong>#DikirimAja</strong>
                  </h2>
                  <h5>
                    Mumpung lagi #DiRumahAja kamu bisa nungguin barang kamu
                    tanpa COD, bisa pakai Gosend atau GrabExpress
                  </h5>
                  <a className='button button-light' href='#'>
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-padding--small'>
          <div className='container'>
            <div className='row no-gutters align-items-center'>
              <div className='col-md-5 mb-5 mb-md-0'>
                <div className='solution__content'>
                  <h2>
                    <strong>Lacak Gadget-Mu</strong>
                  </h2>
                  <h5>
                    Saat di service kamu bisa tau perkembangan gadgetmu saat ini
                  </h5>
                  <Link className='button button-light' to='/track'>
                    Lacak
                  </Link>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='solution__img text-center text-lg-right mb-4 mb-lg-0'>
                  <LazyLoadImage
                    effect='blur'
                    className='img-fluid'
                    src='/assets/tracking.svg'
                    alt='tracking'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section-padding'>
          <div className='container'>
            <div className='section-intro pb-5 text-center'>
              <h2 className='section-intro__title'>
                Apa Kata Mereka Tentang Kami
              </h2>
              <p className='section-intro__subtitle'>
                Masih ragu? nih bukti bahwa banyak yang service sama kami dan
                puas loh
              </p>
            </div>
            <Grid justify='center' container>
              <Grid item>
                <Testi />
              </Grid>
            </Grid>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
