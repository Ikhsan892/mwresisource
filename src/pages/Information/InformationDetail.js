import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import Interwave from "interweave";
import { UrlMatcher, HashtagMatcher } from "interweave-autolink";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TwitterIcon from "@material-ui/icons/Twitter";
import Skeleton from "@material-ui/lab/Skeleton";
import FacebookIcon from "@material-ui/icons/Facebook";
import Fab from "@material-ui/core/Fab";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { getBlogDetailsData } from "../../actions";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 345,
    minHeight: 350,
    maxHeight: 350,
  },
  media: {
    height: 140,
  },
  content: {
    paddingTop: "100px",
  },
  imageHeader: {
    width: "auto",
    height: "400px",
    objectFit: "contain",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
  },
}));
const InformationDetail = () => {
  const classes = useStyles();
  const { data, status, message } = useSelector((state) => state.blogDetails);
  const { blogDetails_loading } = useSelector((state) => state.loading);
  let { slug } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogDetailsData(slug));
  }, [slug]);
  const extractContent = (s) => {
    var span = document.createElement("span");
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };
  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };
  return (
    <div className={classes.content}>
      <div>
        {blogDetails_loading ? (
          <Helmet>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
            <meta name='description' content='Loading...' />
            <title>Loading...</title>
          </Helmet>
        ) : status === 200 ? (
          <Helmet>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
            <meta name='description' content={`${data.title}`} />
            <title>{data.title}</title>
          </Helmet>
        ) : (
          <Helmet>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
            <meta name='description' content={`${message}`} />
            <title>{message}</title>
          </Helmet>
        )}
      </div>
      <Container maxWidth='md'>
        <Typography variant='h3' gutterbottom>
          {blogDetails_loading ? (
            <Skeleton variant='rect' />
          ) : status === 200 ? (
            data.title
          ) : (
            message
          )}
        </Typography>
        <small>
          {blogDetails_loading ? (
            <Skeleton variant='rect' width={200} style={{ margin: 10 }} />
          ) : status === 200 ? (
            `${data.tanggal} | ${data.category}`
          ) : (
            ""
          )}
        </small>
        {blogDetails_loading ? (
          <Skeleton variant='rect' width='100%'>
            <div style={{ paddingTop: "400px" }} />
          </Skeleton>
        ) : status === 200 ? (
          <img src={data.image_heading} className={classes.imageHeader} />
        ) : (
          <img src='/assets/error.svg' className={classes.imageHeader} />
        )}
        {blogDetails_loading ? (
          range(0, 50).map((i) => {
            return (
              <Skeleton
                variant='text'
                width={`${Math.floor(Math.random() * 30) + 70}%`}
                style={{ marginTop: 5 }}
              />
            );
          })
        ) : status === 200 ? (
          <Interwave
            content={data.body}
            hashtagUrl={(hashtag) =>
              `https://www.instagram.com/explore/tags/${hashtag}`
            }
            matchers={[new UrlMatcher("url"), new HashtagMatcher("hashtag")]}
          />
        ) : (
          ""
        )}
        <Grid
          container
          justify='center'
          style={{
            marginTop: 50,
            marginBottom: 30,
          }}>
          <Grid item xs={6}>
            <Typography variant='subtitle2' align='center' gutterbottom>
              {blogDetails_loading ? (
                <Skeleton variant='rect' />
              ) : status === 200 ? (
                "Kalo blog ini bermanfaat, Bagiin link nya ke sosmed kamu ya"
              ) : (
                ""
              )}
            </Typography>
          </Grid>
          <Grid
            container
            spacing={3}
            justify='center'
            alignItems='center'
            style={{
              marginBottom: 50,
              marginTop: 20,
            }}>
            <Grid item>
              {blogDetails_loading ? (
                <Skeleton variant='circle'>
                  <Fab />
                </Skeleton>
              ) : status === 200 ? (
                <a
                  href={`https://api.whatsapp.com/send?text=${data.title} https://makerswaredemo.web.app/details/${slug}`}
                  target='blank'>
                  <Fab
                    aria-label='whatsapp'
                    style={{
                      backgroundColor: "green",
                      color: "white",
                    }}>
                    <WhatsAppIcon color='inherit' />
                  </Fab>
                </a>
              ) : (
                ""
              )}
            </Grid>
            <Grid item>
              {blogDetails_loading ? (
                <Skeleton variant='circle'>
                  <Fab />
                </Skeleton>
              ) : status === 200 ? (
                <a
                  href={`https://twitter.com/share?url=https://google.com&text=${data.title}`}
                  target='blank'>
                  <Fab
                    aria-label='twitter'
                    color='primary'
                    style={{
                      color: "white",
                    }}>
                    <TwitterIcon color='inherit' />
                  </Fab>
                </a>
              ) : (
                ""
              )}
            </Grid>
            <Grid item>
              {blogDetails_loading ? (
                <Skeleton variant='circle'>
                  <Fab />
                </Skeleton>
              ) : status === 200 ? (
                <a
                  href={`https://www.facebook.com/sharer.php?u=https://makerswaredemo.web.app/details/${data.title}`}
                  target='blank'>
                  <Fab
                    aria-label='fb'
                    color='primary'
                    style={{
                      backgroundColor: "#3b5998",
                      color: "white",
                    }}>
                    <FacebookIcon color='inherit' />
                  </Fab>
                </a>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          justify='center'
          alignItems='center'
          style={{
            marginBottom: 50,
          }}>
          <Typography
            align='center'
            variant='overline'
            style={{
              paddingLeft: 20,
              marginBottom: 20,
            }}>
            {blogDetails_loading ? (
              <Skeleton variant='rect' width={150} />
            ) : status === 200 ? (
              "Konten yang berkaitan buat kamu"
            ) : (
              ""
            )}
          </Typography>
        </Grid>
        <Grid
          container
          spacing={3}
          alignItems='center'
          direction='row'
          style={{
            overflowX: "auto",
            flexWrap: "nowrap",
          }}>
          {blogDetails_loading
            ? [0, 1, 2].map(() => {
                return (
                  <Grid item>
                    <Skeleton variant='rect' width={345} height={350} />
                  </Grid>
                );
              })
            : status === 200
            ? data.recommended.map((p) => {
                return (
                  <Grid item key={p.id}>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={p.image_heading}
                          title='Contemplative Reptile'
                        />
                        <CardContent>
                          <Typography
                            gutterBottom
                            variant='h5'
                            component='h2'
                            noWrap='true'>
                            {p.title}
                          </Typography>
                          <Typography gutterBottom variant='overline'>
                            {p.category}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'>
                            {extractContent(p.preview)}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          size='small'
                          color='primary'
                          component={Link}
                          to={`/details/${p.slug}`}>
                          Baca Lengkap
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })
            : ""}
        </Grid>
        {/* 
       
        
        
         
        
        <Grid
          container
          spacing={3}
          alignItems='center'
          direction='row'
          style={{
            overflowX: "auto",
            flexWrap: "nowrap",
          }}>
          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='/assets/mbanner1.jpg'
                  title='Ini Caption'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Ini judul yang panjang ya
                  </Typography>
                  <Typography gutterBottom variant='overline'>
                    tutorial
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    {`${"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica".slice(
                      0,
                      100
                    )}...`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                  component={Link}
                  to={`/details/slug-2`}>
                  Baca Lengkap
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='/assets/mbanner1.jpg'
                  title='Ini Caption'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Ini judul yang panjang ya
                  </Typography>
                  <Typography gutterBottom variant='overline'>
                    tutorial
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    {`${"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica".slice(
                      0,
                      100
                    )}...`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                  component={Link}
                  to={`/details/slug-2`}>
                  Baca Lengkap
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='/assets/mbanner1.jpg'
                  title='Ini Caption'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Ini judul yang panjang ya
                  </Typography>
                  <Typography gutterBottom variant='overline'>
                    tutorial
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    {`${"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica".slice(
                      0,
                      100
                    )}...`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                  component={Link}
                  to={`/details/slug-2`}>
                  Baca Lengkap
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='/assets/mbanner1.jpg'
                  title='Ini Caption'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Ini judul yang panjang ya
                  </Typography>
                  <Typography gutterBottom variant='overline'>
                    tutorial
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    {`${"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica".slice(
                      0,
                      100
                    )}...`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                  component={Link}
                  to={`/details/slug-2`}>
                  Baca Lengkap
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='/assets/mbanner1.jpg'
                  title='Ini Caption'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    Ini judul yang panjang ya
                  </Typography>
                  <Typography gutterBottom variant='overline'>
                    tutorial
                  </Typography>
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'>
                    {`${"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica".slice(
                      0,
                      100
                    )}...`}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size='small'
                  color='primary'
                  component={Link}
                  to={`/details/slug-2`}>
                  Baca Lengkap
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid> */}
      </Container>
    </div>
  );
};

export default InformationDetail;
