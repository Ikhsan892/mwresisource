import React from 'react'
import './bootstrap.min.css'
import './Footer.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  WhatsApp,
  Room,
  Facebook,
  Instagram,
  Email,
  QueryBuilder
} from '@material-ui/icons';
import Fab from '@material-ui/core/Fab';
// import {Link} from 'react-router-dom'

// <div className="col-md-6 col-lg-2 page-more-info">
//     <div className="footer-title">
//         <h4>Halaman</h4>
//     </div>
//     <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/invoice">Invoice</Link></li>
//         <li><Link to="/informasi">Informasi</Link></li>
//     </ul>
// </div>
//
// <div className="col-md-6 col-lg-3 page-more-info">
//     <div className="footer-title">
//         <h4>Informasi</h4>
//     </div>
//     <ul>
//         <li><Link to ="/informasi">Klaim Garansi</Link></li>
//         <li><Link to="/informasi">Home Service</Link></li>
//         <li><Link to="/informasi">#DianterinAja via Gosend</Link></li>
//     </ul>
// </div>
const Footer = () => {
  return(
    <footer>
      <div className="container">
          <div className="footer-top">
              <div className="row">
                  <div className="col-lg-12">
                    <h3 className="text-center">Support Brand</h3>
                    <LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + '/assets/sponsor.png'} alt="sponsor"/>
                  </div>
                  <div className="col-md-6 col-lg-3 about-footer">
                      <h3 className="center">Makersware Service Workshop</h3>
                      <ul>
                          <li><a target='__blank' href="https://wa.me/6288976972688"><i><WhatsApp/></i>0889-7697-2688</a></li>
                          <li><a target='__blank' href="https://wa.me/6283875012460"><i><WhatsApp/></i>0838-7501-2460</a></li>
                          <li><i><Room/></i>
                              Jl. Pengasinan Tengah Raya No. 99 Rawalumbu
                              <br/>Kota Bekasi,
                              <br/>Jawa Barat 17115
                          </li>
                      </ul>
                      <a target='__blank' href="https://wa.me/6283875012460">
                           <Fab variant="extended" color="primary">
                                Booking Service
                            </Fab>
                      </a>
                  </div>
                  <br/>
                  <div className="col-md-6 col-lg-2 page-more-info">
                  </div>
                  <div className="col-md-6 col-lg-3 page-more-info">
                  </div>
                  <br/>
                  <div className="col-md-6 col-lg-4 open-hours">
                      <div className="footer-title">
                          <h4>Jam Pelayanan</h4>
                          <ul className="footer-social">
                              <li><a href="https://facebook.com" target="__blank"><i><Facebook/></i></a></li>
                              <li><a href="https://instagram.com" target="__blank"><i><Instagram/></i></a></li>
                              <li><a href="mailto:admin@makersware.web.id" target="__blank"><i><Email/></i></a></li>
                          </ul>
                      </div>
                      <table className="table">
                          <tbody>
                              <tr>
                                  <td><i><QueryBuilder/></i>Senin - Jumat</td>
                                  <td>8:00am - 5:00pm</td>
                              </tr>
                              <tr>
                                  <td><i><QueryBuilder/></i>Sabtu</td>
                                  <td>Close</td>
                              </tr>
                              <tr>
                                  <td><i><QueryBuilder/></i>Minggu</td>
                                  <td>Close</td>
                              </tr>
                          </tbody>
                      </table>
                      <hr/>
                      <div className="footer-logo">
                      <h4>Metode Pembayaran</h4>
                      <br/>
                      <table>
                          <tbody>
                              <tr>
                                  <td><LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + "/assets/dana.png"} alt="dana"/></td>
                                  <td><LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + "/assets/ovo.png"} alt="ovo"/></td>
                                  <td><LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + "/assets/indomaret.png"} alt="indomaret"/></td>
                                  <td><LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + "/assets/alfamart.png"} alt="alfamart"/></td>
                                  <td><LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + "/assets/bca.png"} alt="bca"/></td>
                                  <td><LazyLoadImage effect="blur" src={process.env.PUBLIC_URL + "/assets/btn.png"} alt="btn"/></td>
                              </tr>
                          </tbody>
                      </table>
                      </div>
                  </div>
              </div>
          </div>
          <hr/>
          <div className="footer-bottom">
              <div className="row">
                  <div className="col-sm-4">
                    
                  </div>
                  <div className="col-sm-8">
                      <p>Makersware Service @ 2020 All rights reserved</p>
                  </div>
              </div>
          </div>
      </div>
  </footer>
  )
}

export default Footer
