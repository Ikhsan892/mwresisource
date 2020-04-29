import React from 'react'
import './bootstrap.min.css'
import './Footer.css'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import RoomIcon from '@material-ui/icons/Room';
import FacebookIcon from '@material-ui/icons/Facebook';
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
                      <h3>Makersware Service Track</h3>
                      <ul>
                          <li><a target='__blank' href="https://wa.me/6288976972688"><i><WhatsAppIcon/></i>088976972688</a></li>
                          <li><i><RoomIcon/></i>
                              Jl. Pengasinan Tengah Raya No. 99 Rawalumbu
                              <br/>Kota Bekasi,
                              <br/>Jawa Barat 17115
                          </li>
                      </ul>
                      <a target='__blank' href="https://wa.me/6288976972688" className="btn red-btn">Pengen Service ?</a>
                  </div>
                  <div className="col-md-6 col-lg-2 page-more-info">
                      <div className="footer-title">
                          <h4>Halaman</h4>
                      </div>
                      <ul>
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Testimonial</a></li>
                          <li><a href="#">Blog</a></li>
                          <li><a href="#">Contact</a></li>
                      </ul>
                  </div>

                  <div className="col-md-6 col-lg-3 page-more-info">
                      <div className="footer-title">
                          <h4>Info Tambahan</h4>
                      </div>
                      <ul>
                          <li><a href="#">Klaim Garansi</a></li>
                          <li><a href="#">Service 1 Hari</a></li>
                      </ul>
                  </div>
                  <div className="col-md-6 col-lg-4 open-hours">
                      <div className="footer-title">
                          <h4>Jam Pelayanan</h4>
                          <ul className="footer-social">
                              <li><a href="" target="_blank"><i><FacebookIcon/></i></a></li>
                              <li><a href="" target="_blank"><i><InstagramIcon/></i></a></li>
                              <li><a href="" target="_blank"><i><EmailIcon/></i></a></li>
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

                      <table>
                          <tbody>
                              <tr>
                                  <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg"/></td>
                                  <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg"/></td>
                                  <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg"/></td>
                                  <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg"/></td>
                                  <td><img src="https://i.ibb.co/vxc577d/dummy-logo3.jpg"/></td>
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
