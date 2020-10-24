import React from "react";
import "./Footer.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  WhatsApp,
  Room,
  Facebook,
  Instagram,
  Email,
  QueryBuilder,
} from "@material-ui/icons";
import Skeleton from "@material-ui/lab/Skeleton";
import { useSelector } from "react-redux";
import Fab from "@material-ui/core/Fab";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: (props) => props.display,
  },
  skeletonCenter: {
    margin: "0 auto",
  },
}));
const Footer = () => {
  const [display, setDisplay] = React.useState("block");
  const { layout_loading } = useSelector((state) => state.loading);
  const { caption, img } = useSelector(
    (state) => state.layout.footer.support_brand
  );
  const url = useLocation();
  const {
    capt,
    wa,
    alamat: { jalan, kota_kab, provinsi, kode_pos },
    cta: { title, act },
  } = useSelector((state) => state.layout.footer.about);
  const {
    title_jam_pelayanan,
    social_media: { instagram, facebook, email },
    waktu,
    metode_pembayaran,
  } = useSelector((state) => state.layout.footer.jam_pelayanan);
  const { footer_bottom } = useSelector((state) => state.layout.footer);
  const props = { display: display };
  const classes = useStyles(props);
  React.useEffect(() => {
    if (url.pathname === "/preview") {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  }, []);
  return (
    <div>
      <footer className={classes.root}>
        <div className='container'>
          <div className='footer-top'>
            <div className='row'>
              <div className='col-lg-12'>
                <h3 className='text-center'>
                  {layout_loading ? (
                    <Skeleton
                      variant='rect'
                      width={100}
                      animation='wave'
                      className={classes.skeletonCenter}
                    />
                  ) : (
                    caption
                  )}
                </h3>
                {layout_loading ? (
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    className={classes.skeletonCenter}
                  />
                ) : (
                  <LazyLoadImage
                    effect='blur'
                    src={process.env.PUBLIC_URL + img}
                    alt='sponsor'
                  />
                )}
              </div>
              <div className='col-md-6 col-lg-3 about-footer'>
                <h3 className='center'>
                  {layout_loading ? (
                    <Skeleton variant='rect' width={150} animation='wave' />
                  ) : (
                    capt
                  )}
                </h3>
                <ul>
                  {layout_loading
                    ? [1, 2].map((n) => {
                        return (
                          <li>
                            <i>
                              <WhatsApp />
                            </i>
                            <Skeleton
                              variant='rect'
                              width={150}
                              animation='wave'
                            />
                          </li>
                        );
                      })
                    : wa.map((p) => {
                        return (
                          <li>
                            <a
                              target='__blank'
                              href={`https://wa.me/62${p
                                .replace(/-/g, "")
                                .slice(1, p.length)}`}>
                              <i>
                                <WhatsApp />
                              </i>
                              {p}
                            </a>
                          </li>
                        );
                      })}
                  <li>
                    <i>
                      <Room />
                    </i>
                    {layout_loading ? (
                      <Skeleton variant='rect' width={150} animation='wave' />
                    ) : (
                      jalan
                    )}
                    <br />
                    {layout_loading ? (
                      <Skeleton variant='rect' width={150} animation='wave' />
                    ) : (
                      kota_kab
                    )}
                    ,
                    <br />
                    {layout_loading ? (
                      <Skeleton variant='rect' width={50} animation='wave' />
                    ) : (
                      provinsi
                    )}{" "}
                    {layout_loading ? (
                      <Skeleton variant='rect' width={50} animation='wave' />
                    ) : (
                      kode_pos
                    )}
                  </li>
                </ul>
                <a target='__blank' href={act}>
                  <Fab variant='extended' color='primary'>
                    {layout_loading ? (
                      <Skeleton variant='rect' width={150} animation='wave' />
                    ) : (
                      title
                    )}
                  </Fab>
                </a>
              </div>
              <br />
              <div className='col-md-6 col-lg-2 page-more-info'></div>
              <div className='col-md-6 col-lg-3 page-more-info'></div>
              <br />
              <div className='col-md-6 col-lg-4 open-hours'>
                <div className='footer-title'>
                  <h4>
                    {layout_loading ? (
                      <Skeleton variant='rect' width={150} animation='wave' />
                    ) : (
                      title_jam_pelayanan
                    )}
                  </h4>
                  <ul className='footer-social'>
                    <li>
                      <a href={facebook} target='__blank'>
                        <i>
                          <Facebook />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href={instagram} target='__blank'>
                        <i>
                          <Instagram />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href={email} target='__blank'>
                        <i>
                          <Email />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
                <table className='table'>
                  <tbody>
                    {layout_loading
                      ? [1, 2, 3].map((n) => {
                          return (
                            <tr>
                              <td>
                                <i>
                                  <QueryBuilder />
                                </i>
                                <Skeleton
                                  variant='rect'
                                  width={150}
                                  animation='wave'
                                />
                              </td>
                              <td>
                                {" "}
                                <Skeleton
                                  variant='rect'
                                  width={150}
                                  animation='wave'
                                />
                              </td>
                            </tr>
                          );
                        })
                      : waktu.map(({ hari, jam }) => {
                          return (
                            <tr>
                              <td>
                                <i>
                                  <QueryBuilder />
                                </i>
                                {hari}
                              </td>
                              <td>{jam}</td>
                            </tr>
                          );
                        })}
                  </tbody>
                </table>
                <hr />
                <div className='footer-logo'>
                  <h4>
                    {layout_loading ? (
                      <Skeleton variant='rect' width={150} animation='wave' />
                    ) : (
                      "Metode Pembayaran"
                    )}
                  </h4>
                  <br />
                  <table>
                    <tbody>
                      <tr>
                        {layout_loading
                          ? [1, 2, 3, 4, 5, 6].map((n) => {
                              return (
                                <td>
                                  <Skeleton
                                    variant='rect'
                                    width={50}
                                    animation='wave'
                                  />
                                </td>
                              );
                            })
                          : metode_pembayaran.map(({ img, alt }) => {
                              return (
                                <td>
                                  <LazyLoadImage
                                    effect='blur'
                                    src={process.env.PUBLIC_URL + img}
                                    alt={alt}
                                  />
                                </td>
                              );
                            })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='footer-bottom'>
            <div className='row'>
              <div className='col-sm-4'></div>
              <div className='col-sm-8'>
                <p>
                  {layout_loading ? (
                    <Skeleton variant='rect' width={200} animation='wave' />
                  ) : (
                    footer_bottom
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
