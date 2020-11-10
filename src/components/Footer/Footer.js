// import React from "react";
// import "./Footer.css";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import {
//   WhatsApp,
//   Room,
//   Facebook,
//   Instagram,
//   Email,
//   QueryBuilder,
// } from "@material-ui/icons";
// import Skeleton from "@material-ui/lab/Skeleton";
// import { useSelector } from "react-redux";
// import Fab from "@material-ui/core/Fab";
// import { useLocation } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: (props) => props.display,
//   },
//   skeletonCenter: {
//     margin: "0 auto",
//   },
// }));
// const Footer = () => {
//   const [display, setDisplay] = React.useState("block");
//   const { layout_loading } = useSelector((state) => state.loading);
//   const { caption, img } = useSelector(
//     (state) => state.layout.footer.support_brand
//   );
//   const url = useLocation();
//   const {
//     capt,
//     wa,
//     alamat: { jalan, kota_kab, provinsi, kode_pos },
//     cta: { title, act },
//   } = useSelector((state) => state.layout.footer.about);
//   const {
//     title_jam_pelayanan,
//     social_media: { instagram, facebook, email },
//     waktu,
//     metode_pembayaran,
//   } = useSelector((state) => state.layout.footer.jam_pelayanan);
//   const { footer_bottom } = useSelector((state) => state.layout.footer);
//   const props = { display: display };
//   const classes = useStyles(props);
//   React.useEffect(() => {
//     if (url.pathname === "/preview") {
//       setDisplay("none");
//     } else {
//       setDisplay("block");
//     }
//   }, []);
//   return (
//     <div>
//       <footer className={classes.root}>
//         <div className='container'>
//           <div className='footer-top'>
//             <div className='row'>
//               <div className='col-lg-12'>
//                 <h3 className='text-center'>
//                   {layout_loading ? (
//                     <Skeleton
//                       variant='rect'
//                       width={100}
//                       animation='wave'
//                       className={classes.skeletonCenter}
//                     />
//                   ) : (
//                     caption
//                   )}
//                 </h3>
//                 {layout_loading ? (
//                   <Skeleton
//                     variant='rect'
//                     animation='wave'
//                     className={classes.skeletonCenter}
//                   />
//                 ) : (
//                   <LazyLoadImage
//                     effect='blur'
//                     src={process.env.PUBLIC_URL + img}
//                     alt='sponsor'
//                   />
//                 )}
//               </div>
//               <div className='col-md-6 col-lg-3 about-footer'>
//                 <h3 className='center'>
//                   {layout_loading ? (
//                     <Skeleton variant='rect' width={150} animation='wave' />
//                   ) : (
//                     capt
//                   )}
//                 </h3>
//                 <ul>
//                   {layout_loading
//                     ? [1, 2].map((n) => {
//                         return (
//                           <li>
//                             <i>
//                               <WhatsApp />
//                             </i>
//                             <Skeleton
//                               variant='rect'
//                               width={150}
//                               animation='wave'
//                             />
//                           </li>
//                         );
//                       })
//                     : wa.map((p) => {
//                         return (
//                           <li>
//                             <a
//                               target='__blank'
//                               href={`https://wa.me/62${p
//                                 .replace(/-/g, "")
//                                 .slice(1, p.length)}`}>
//                               <i>
//                                 <WhatsApp />
//                               </i>
//                               {p}
//                             </a>
//                           </li>
//                         );
//                       })}
//                   <li>
//                     <i>
//                       <Room />
//                     </i>
//                     {layout_loading ? (
//                       <Skeleton variant='rect' width={150} animation='wave' />
//                     ) : (
//                       jalan
//                     )}
//                     <br />
//                     {layout_loading ? (
//                       <Skeleton variant='rect' width={150} animation='wave' />
//                     ) : (
//                       kota_kab
//                     )}
//                     ,
//                     <br />
//                     {layout_loading ? (
//                       <Skeleton variant='rect' width={50} animation='wave' />
//                     ) : (
//                       provinsi
//                     )}{" "}
//                     {layout_loading ? (
//                       <Skeleton variant='rect' width={50} animation='wave' />
//                     ) : (
//                       kode_pos
//                     )}
//                   </li>
//                 </ul>
//                 <a target='__blank' href={act}>
//                   <Fab variant='extended' color='primary'>
//                     {layout_loading ? (
//                       <Skeleton variant='rect' width={150} animation='wave' />
//                     ) : (
//                       title
//                     )}
//                   </Fab>
//                 </a>
//               </div>
//               <br />
//               <div className='col-md-6 col-lg-2 page-more-info'></div>
//               <div className='col-md-6 col-lg-3 page-more-info'></div>
//               <br />
//               <div className='col-md-6 col-lg-4 open-hours'>
//                 <div className='footer-title'>
//                   <h4>
//                     {layout_loading ? (
//                       <Skeleton variant='rect' width={150} animation='wave' />
//                     ) : (
//                       title_jam_pelayanan
//                     )}
//                   </h4>
//                   <ul className='footer-social'>
//                     <li>
//                       <a href={facebook} target='__blank'>
//                         <i>
//                           <Facebook />
//                         </i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href={instagram} target='__blank'>
//                         <i>
//                           <Instagram />
//                         </i>
//                       </a>
//                     </li>
//                     <li>
//                       <a href={email} target='__blank'>
//                         <i>
//                           <Email />
//                         </i>
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//                 <table className='table'>
//                   <tbody>
//                     {layout_loading
//                       ? [1, 2, 3].map((n) => {
//                           return (
//                             <tr>
//                               <td>
//                                 <i>
//                                   <QueryBuilder />
//                                 </i>
//                                 <Skeleton
//                                   variant='rect'
//                                   width={150}
//                                   animation='wave'
//                                 />
//                               </td>
//                               <td>
//                                 {" "}
//                                 <Skeleton
//                                   variant='rect'
//                                   width={150}
//                                   animation='wave'
//                                 />
//                               </td>
//                             </tr>
//                           );
//                         })
//                       : waktu.map(({ hari, jam }) => {
//                           return (
//                             <tr>
//                               <td>
//                                 <i>
//                                   <QueryBuilder />
//                                 </i>
//                                 {hari}
//                               </td>
//                               <td>{jam}</td>
//                             </tr>
//                           );
//                         })}
//                   </tbody>
//                 </table>
//                 <hr />
//                 <div className='footer-logo'>
//                   <h4>
//                     {layout_loading ? (
//                       <Skeleton variant='rect' width={150} animation='wave' />
//                     ) : (
//                       "Metode Pembayaran"
//                     )}
//                   </h4>
//                   <br />
//                   <table>
//                     <tbody>
//                       <tr>
//                         {layout_loading
//                           ? [1, 2, 3, 4, 5, 6].map((n) => {
//                               return (
//                                 <td>
//                                   <Skeleton
//                                     variant='rect'
//                                     width={50}
//                                     animation='wave'
//                                   />
//                                 </td>
//                               );
//                             })
//                           : metode_pembayaran.map(({ img, alt }) => {
//                               return (
//                                 <td>
//                                   <LazyLoadImage
//                                     effect='blur'
//                                     src={process.env.PUBLIC_URL + img}
//                                     alt={alt}
//                                   />
//                                 </td>
//                               );
//                             })}
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <hr />
//           <div className='footer-bottom'>
//             <div className='row'>
//               <div className='col-sm-4'></div>
//               <div className='col-sm-8'>
//                 <p>
//                   {layout_loading ? (
//                     <Skeleton variant='rect' width={200} animation='wave' />
//                   ) : (
//                     footer_bottom
//                   )}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import { useSelector } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";
import QueryBuilder from "@material-ui/icons/QueryBuilder";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#002839",
    position: "relative",
    bottom: 0,
    height: "auto",
    color: "#fff",
    fontFamily: "Montserrat, sans-serif",
  },
  wrapperImage: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
  },
  image: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginTop: -50,
    border: "4px solid #002839",
    backgroundColor: "#002839",
  },
  serviceCapt: {
    marginTop: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    width: "70%",
    margin: "0 auto",
  },
  content: {
    marginTop: 40,
    display: "flex",
    flexWrap: "wrap",
    alignContent: "start",
    padding: "0px 10px",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "space-around",
    },
  },
  kontak: {
    display: "flex",
    textDecoration: "none",
    color: "#fff",
    "&:visited": {
      color: "#fff",
      textDecoration: "none",
    },
    "&:active": {
      color: "#fff",
      textDecoration: "none",
    },
    "&:hover": {
      color: "#fff",
      textDecoration: "none",
    },
    "&:link": {
      color: "#fff",
      textDecoration: "none",
    },
  },
  innerContent: {
    width: "50%",
    [theme.breakpoints.up("lg")]: {
      width: "auto",
    },
    "&:nth-last-child(1)": {
      width: "auto",
      margin: "0 auto",
      [theme.breakpoints.up("lg")]: {
        margin: "0px",
      },
    },
  },
}));
const Footer = () => {
  const classes = useStyles();
  const { layout_loading } = useSelector((state) => state.loading);
  const {
    wa,
    alamat: { jalan, kota_kab, provinsi, kode_pos },
  } = useSelector((state) => state.layout.footer.about);
  const { waktu } = useSelector((state) => state.layout.footer.jam_pelayanan);
  return (
    <div className={classes.root}>
      <div className={classes.wrapperImage}>
        <img src='/assets/mwlogo2.png' className={classes.image} />
      </div>
      <div className={classes.serviceCapt}>
        <Typography
          variant='h5'
          align='center'
          style={{
            fontWeight: "bold",
          }}>
          Makersware Service Workshop
        </Typography>
      </div>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          <Typography
            variant='title'
            style={{
              borderBottom: "2px solid #fff",
            }}>
            Kontak
          </Typography>
          <div style={{ marginTop: 20 }}>
            {layout_loading
              ? [1, 2].map((n) => {
                  return (
                    <li
                      style={{
                        listStyle: "none",
                        marginBottom: 10,
                      }}>
                      <Skeleton variant='rect' width={150} animation='wave' />
                    </li>
                  );
                })
              : wa.map((p) => {
                  return (
                    <a
                      target='__blank'
                      href={`https://wa.me/62${p
                        .replace(/-/g, "")
                        .slice(1, p.length)}`}
                      className={classes.kontak}>
                      <div
                        style={{
                          marginRight: 20,
                        }}>
                        <PhoneIcon />
                      </div>
                      <Typography
                        variant='title'
                        style={{ fontWeight: "bold" }}>
                        {p}
                      </Typography>
                    </a>
                  );
                })}
          </div>
        </div>
        <div className={classes.innerContent}>
          <Typography
            variant='title'
            style={{
              borderBottom: "2px solid #fff",
              fontWeight: 300,
            }}>
            Lokasi
          </Typography>
          <div
            style={{
              marginTop: 20,
            }}>
            <a className={classes.kontak}>
              {layout_loading ? (
                <Skeleton variant='rect' width={150} animation='wave' />
              ) : (
                <>
                  <div
                    style={{
                      marginRight: 20,
                    }}>
                    <RoomIcon />
                  </div>
                  <Typography variant='title'>
                    {jalan} {kota_kab}, {provinsi} {kode_pos}
                  </Typography>
                </>
              )}
            </a>
          </div>
        </div>
        <div className={classes.innerContent}>
          <Typography
            variant='title'
            style={{
              borderBottom: "2px solid #fff",
              fontWeight: 300,
            }}>
            Jam Pelayanan
          </Typography>
          <div
            style={{
              marginTop: 20,
            }}>
            {layout_loading ? (
              <Skeleton variant='rect' width={150} animation='wave' />
            ) : (
              waktu.map(({ hari, jam }) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <div
                      style={{
                        marginRight: 20,
                      }}>
                      <QueryBuilder />
                    </div>
                    <Typography
                      style={{
                        marginRight: 20,
                      }}>
                      {hari}
                    </Typography>
                    <Typography
                      align='right'
                      style={{
                        fontWeight: "bold",
                      }}>
                      {jam}
                    </Typography>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 25,
        }}>
        <img
          src='/assets/mwlogo.png'
          style={{
            filter: "invert(100%)",
            Width: "auto",
            height: "50px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#000",
          marginTop: 50,
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant='body1'>
          Copyright@ 2020 Makersware Website
        </Typography>
      </div>
    </div>
  );
};
export default Footer;
