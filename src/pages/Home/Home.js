import React from 'react'
import {
  Grid,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardActionArea,
  Typography,
  Avatar
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './bootstrap.min.css'
import './Home.css'
import Check from '@material-ui/icons/Check';
import {Link} from 'react-router-dom'
import Testi from './testi'
const useStyles = makeStyles((theme) => ({
  root : {
  },
  card:{
    maxWidth : '345px',
    paddingTop : '40px',
  },
  navbarlogo :{
    color: 'white',
    left: 20,
    letterSpacing : '2px',
    float: 'left',
    paddingLeft: '100px',
    // textAlign:'center',
    lineHeight: '60px',
  },
  nav : {
    height : '70px',
    backgroundColor : '#333',
    borderBottom : '2px solid #fff',
  },
  ul : {
    color: '#fff',
    float: 'right',
    width: '500px',
    paddingRight: '70px',
    display: 'flex',
    zIndex: 0,
    listStyle:'none',
    lineHeight: '60px',
    justifyContent: 'space-around',
  },
  imagecenter : {
    margin : '0 auto',
  },
  li:{
    fontSize : '15px',
    letterSpacing : '0.5px',
    textDecoration: 'none',
    color : '#fff',
    [theme.breakpoints.down('sm')]:{
      display : 'none',
    },
    '&:hover':{
      borderBottom : '1px solid #fff',
      transition : '0.3s'
    },
  }
}))
const Home = () => {
  const classes = useStyles()
  return(
    <div className={classes.root}>
      <header>
        <nav className={classes.nav}>
          <h3 className={classes.navbarlogo}>Makersware Service</h3>
          <ul className={classes.ul}>
            <Link to="/home"><li className={classes.li}>Home</li></Link>
            <Link to="/track"><li className={classes.li}>Track</li></Link>
            <Link to="/invoice"><li className={classes.li}>Invoice</li></Link>
            <Link to="/information"><li className={classes.li}>Informasi</li></Link>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero-banner mb-30px">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="hero-banner__img">
                  <div className={classes.imagecenter}>
                    <img className="img-fluid" src="/assets/mwlogo2.png" alt="Logo"/>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 pt-5">
                <div className="hero-banner__content">
                  <h1>Makersware Service</h1>
                  <h5>Tempat service gadget mu dengan cepat, murah dan mudah. Dapat garansi lagi, kapan lagi coba</h5>
                  <a className="button bg" href="#">Booking Service</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-margin">
          <div className="container">
            <div className="section-intro pb-85px text-center">
              <h2 className="section-intro__title">Kenapa Harus Service di Kami?</h2>
              <p className="section-intro__subtitle">Berikut 4 keunggulan kami dibanding yang lain</p>
            </div>

            <div className="row">
              <div className="col-lg-6">

                <div className="row offer-single-wrapper">
                  <div className="col-lg-6 offer-single">
                    <div className="card offer-single__content text-center">
                      <span className="offer-single__icon">
                        <Check/>
                      </span>
                      <h4>Sistem Service</h4>
                      <p>Sistem service kami dijamin tebaik dari yang tebaik</p>
                    </div>
                  </div>

                  <div className="col-lg-6 offer-single">
                    <div className="card offer-single__content text-center">
                      <span className="offer-single__icon">
                        <Check/>
                      </span>
                      <h4>Teknisi Handal</h4>
                      <p>Tenang aja barang kamu ditangani teknisi yang super handal</p>
                    </div>
                  </div>
                </div>

                <div className="row offer-single-wrapper">
                  <div className="col-lg-6 offer-single">
                    <div className="card offer-single__content text-center">
                      <span className="offer-single__icon">
                        <Check/>
                      </span>
                      <h4>Bergaransi</h4>
                      <p>Barang kamu bergaransi selama sebulan kalo service disini</p>
                    </div>
                  </div>

                  <div className="col-lg-6 offer-single">
                    <div className="card offer-single__content text-center">
                      <span className="offer-single__icon">
                        <Check/>
                      </span>
                      <h4>Bisa Sehari Jadi</h4>
                      <p>Butuh cepet ? tenang , tim kami bisa buat gadget mu selesai satu hari</p>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-6">
                <div className="offer-single__img">
                  <img className="img-fluid" src="/assets/offer.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding--small">
          <div className="container">
            <div className="row align-items-center pt-xl-3 pb-xl-5">
              <div className="col-lg-6">
                <div className="solution__img text-center text-lg-left mb-4 mb-lg-0">
                  <img className="img-fluid" src="/assets/kirim.svg" alt="Ekspedisi"/>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="solution__content">
                  <h2><strong>#DikirimAja</strong></h2>
                  <h5>Mumpung lagi #DiRumahAja kamu bisa nungguin barang kamu tanpa COD, bisa pakai Gosend atau GrabExpress</h5>
                  <a className="button button-light" href="#">Know More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="section-padding--small">
          <div class="container">
            <div class="row no-gutters align-items-center">
              <div class="col-md-5 mb-5 mb-md-0">
                <div class="solution__content">
                  <h2><strong>Lacak Gadget-Mu</strong></h2>
                  <h5>Saat di service kamu bisa tau perkembangan gadgetmu saat ini</h5>
                  <Link className="button button-light" to="/track">Lacak</Link>
                </div>
              </div>
              <div class="col-md-7">
                <div class="solution__img text-center text-lg-right mb-4 mb-lg-0">
                  <img class="img-fluid" src="/assets/tracking.svg" alt="tracking"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding">
          <div class="container">
            <div class="section-intro pb-5 text-center">
              <h2 class="section-intro__title">Apa Kata Mereka Tentang Kami</h2>
              <p class="section-intro__subtitle">Masih ragu? nih bukti bahwa banyak yang service sama kami dan puas loh</p>
            </div>
            <Grid justify="center" container>
              <Grid item>
                <Testi/>
              </Grid>
            </Grid>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
