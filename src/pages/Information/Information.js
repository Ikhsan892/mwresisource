import React, { Suspense, lazy, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import {
  Hidden,
  Grid,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardActionArea,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Container,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getBlogData, getCategoryData } from "../../actions";
const Pagination = lazy(() => import("./components/Pagination"));
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
  image: {
    display: "block",
    marginTop: "5px",
    marginRight: "auto",
    borderRadius: "20px 20px",
    marginLeft: "auto",
    width: "400px",
    height: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "200px",
      height: "200px",
    },
  },
  h2: {
    textAlign: "center",
  },
  button: {
    display: "block",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    marginBottom: "10px",
    [theme.breakpoints.up("sm")]: {
      width: "30%",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
const Information = ({ carousel, mcarousel }) => {
  const classes = useStyles();
  const { blog_loading, category_loading } = useSelector(
    (state) => state.loading
  );
  const { data, status, message } = useSelector((state) => state.blog);
  const { category_lists } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState("");
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selected, setSelected] = React.useState("");
  const [postPerPage, setPostPerPage] = React.useState(6);
  const handleCurrentPage = (value) => setCurrentStep(value - 1);
  useEffect(() => {
    dispatch(getBlogData());
    dispatch(getCategoryData());
  }, []);
  const extractContent = (s) => {
    var span = document.createElement("span");
    span.innerHTML = s;
    return span.textContent || span.innerText;
  };
  const handleChange = (event) => {
    dispatch(getBlogData("null", event.target.value));
    setSelected(event.target.value);
  };
  const postsArray = (data) => {
    const offsetawal = currentStep * postPerPage;
    const offsetakhir = currentStep * postPerPage + postPerPage;
    return data.slice(offsetawal, offsetakhir);
  };
  return (
    <div>
      <Helmet>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Cari Informasi Disini' />
        <title>Makersware Service Center - Cari Informasi Disini</title>
      </Helmet>
      <Hidden smUp>
        <Suspense fallback={<div>Loading...</div>}>{mcarousel}</Suspense>
      </Hidden>
      <Container>
        <Hidden xsDown>
          <Suspense fallback={<div>Loading...</div>}>{carousel}</Suspense>
        </Hidden>
        <LazyLoadImage
          src='/assets/informasi.svg'
          alt='Invoice'
          className={classes.image}
        />
        <Hidden smDown>
          <h2 className={classes.h2}>Butuh Informasi Disini</h2>
        </Hidden>
        <Hidden mdUp>
          <h4 className={classes.h2}>Butuh Informasi Disini</h4>
        </Hidden>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(getBlogData(inputValue, "null"));
          }}
          autoComplete='off'>
          <TextField
            id='outlined-basic'
            style={{ boxSizing: "content-box" }}
            placeholder='Cari Informasi disini'
            onChange={(e) => setInputValue(e.target.value)}
            variant='outlined'
            fullWidth
          />
          <br />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            className={classes.button}>
            CARI
          </Button>
        </form>
        <hr />
        <Grid
          container
          justify='space-between'
          style={{
            marginBottom: 10,
          }}>
          <Grid item>
            {blog_loading ? (
              <Skeleton variant='rect' width={150} />
            ) : status === 200 ? (
              <Typography
                variant='subtitle2'
                gutterbottom
                style={{ marginBottom: "20px" }}>
                Menampilkan : {postPerPage} dari {data.length} artikel
              </Typography>
            ) : (
              ""
            )}
          </Grid>
          <Grid
            item
            style={{
              boxSizing: "content-box",
            }}>
            {category_loading ? (
              <Skeleton variant='rect' width={100} />
            ) : (
              <FormControl className={classes.formControl}>
                <InputLabel id='category'>Category</InputLabel>
                <Select
                  labelId='category'
                  id='category'
                  value={selected}
                  onChange={handleChange}>
                  <MenuItem value='null'>Semua</MenuItem>
                  {category_lists.data.map((i) => {
                    return <MenuItem value={i}>{i}</MenuItem>;
                  })}
                </Select>
              </FormControl>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          spacing={4}
          justify='center'
          style={{ marginBottom: "20px" }}>
          {blog_loading
            ? [1, 2, 3, 4, 5, 6].map(() => {
                return (
                  <Grid item>
                    <Skeleton variant='rect' width={345} height={350} />
                  </Grid>
                );
              })
            : status === 200
            ? postsArray(data).map((p) => {
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
        <Grid container justify='center'>
          <Suspense fallback={<div>Loading..</div>}>
            {blog_loading ? (
              <React.Fragment>
                <Skeleton variant='circle' height={30} width={30} />
                <Skeleton variant='circle' height={30} width={30} />
                <Skeleton variant='circle' height={30} width={30} />
                <Skeleton variant='circle' height={30} width={30} />
              </React.Fragment>
            ) : status === 200 ? (
              <Pagination
                postPerPage={postPerPage}
                totalPost={data.length}
                paginate={handleCurrentPage}
              />
            ) : (
              message
            )}
          </Suspense>
        </Grid>
      </Container>
    </div>
  );
};

export default Information;
