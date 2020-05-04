import React from 'react'
import './bootstrap.min.css'
import './Footer.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import RoomIcon from '@material-ui/icons/Room';
import {Link} from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import dana from './dana.png'
import ovo from './ovo.png'
import indomaret from './indomaret.png'
import alfamart from './alfamart.png'
import bca from './bca.png'
import btn from './btn.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const Footer = () => {
  return(
    <footer>
      <div className="container">
          <div className="footer-top">
              <div className="row">
                  <div className="col-md-6 col-lg-3 about-footer">
                      <h3>Makersware Service</h3>
                      <ul>
                          <li><a target='__blank' href="https://wa.me/6289631996733"><i><WhatsAppIcon/></i>0896-3199-6733</a></li>
                          <li><a target='__blank' href="https://wa.me/6283875012460"><i><WhatsAppIcon/></i>0838-7501-2460</a></li>
                          <li><i><RoomIcon/></i>
                              Jl. Pengasinan Tengah Raya No. 99 Rawalumbu
                              <br/>Kota Bekasi,
                              <br/>Jawa Barat 17115
                          </li>
                      </ul>
                      <a target='__blank' href="https://wa.me/6289631996733" className="btn red-btn">Ingin Service ?</a>
                  </div>
                  <br/>
                  <div className="col-md-6 col-lg-2 page-more-info">
                      <div className="footer-title">
                          <h4>Halaman</h4>
                      </div>
                      <ul>
                          <li><Link to="/">Home</Link></li>
                          <li><Link to="/invoice">Invoice</Link></li>
                          <li><Link to="/informasi">Informasi</Link></li>
                      </ul>
                  </div>

                  <div className="col-md-6 col-lg-3 page-more-info">
                      <div className="footer-title">
                          <h4>Informasi</h4>
                      </div>
                      <ul>
                          <li><a href="https://api.whatsapp.com/send?phone=6289631996733&text=Bagaimana%20Mengajukan%20Klaim%20Garansi?">Klaim Garansi</a></li>
                          <li><a href="https://api.whatsapp.com/send?phone=6289631996733&text=Saya%20Ingin%20Menggunakan%20Home%20Service">Home Service</a></li>
                          <li><a href="https://api.whatsapp.com/send?phone=6289631996733&text=Saya%20Ingin%20Diantar">#DianterinAja via Gosend</a></li>
                      </ul>
                  </div>
                  <div className="col-md-6 col-lg-4 open-hours">
                      <div className="footer-title">
                          <h4>Jam Pelayanan</h4>
                          <ul className="footer-social">
                              <li><a href="https://facebook.com" target="__blank"><i><FacebookIcon/></i></a></li>
                              <li><a href="https://instagram.com" target="__blank"><i><InstagramIcon/></i></a></li>
                              <li><a href="mailto:admin@makersware.web.id" target="__blank"><i><EmailIcon/></i></a></li>
                          </ul>
                      </div>
                      <table className="table">
                          <tbody>
                              <tr>
                                  <td><i><QueryBuilderIcon/></i>Senin - Jumat</td>
                                  <td>8:00am - 5:00pm</td>
                              </tr>
                              <tr>
                                  <td><i><QueryBuilderIcon/></i>Sabtu</td>
                                  <td>Close</td>
                              </tr>
                              <tr>
                                  <td><i><QueryBuilderIcon/></i>Minggu</td>
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
                                  <td><img src={dana} alt="dana"/></td>
                                  <td><img src={ovo} alt="ovo"/></td>
                                  <td><img src={indomaret} alt="indomaret"/></td>
                                  <td><img src={alfamart} alt="alfamart"/></td>
                                  <td><img src={bca} alt="bca"/></td>
                                  <td><img src={btn} alt="btn"/></td>
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