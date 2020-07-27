import React, { Suspense } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import {
  Hidden,
  Grid,
  CircularProgress,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardActionArea,
  Typography,
  TextField,
  Button,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";

const informations = [
  {
    id: 1,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 2,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 3,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 4,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 5,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 6,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 7,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 8,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },

  {
    id: 9,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 10,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 11,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 12,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 13,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 14,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
  {
    id: 15,
    media: "/assets/mbanner3.jpg",
    headline: "Cara Transfer",
    content:
      "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except antarctica",
    slug: "create-slug",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  image: {
    display: "block",
    marginTop: "5px",
    marginRight: "auto",
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
}));
const Information = ({ carousel, mcarousel }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = await fetch(
        "https://country.register.gov.uk/records.json?page-size=5000"
      );
      const countries = await response.json();
      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <div>
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
            alert("submit");
          }}
          autoComplete='off'>
          <Autocomplete
            id='outlined-basic'
            style={{
              boxSizing: "content-box",
            }}
            onChange={(event, newValue) => setInputValue(newValue.name)}
            className={classes.button}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            getOptionSelected={(option, value) => {
              return option.name === value.name;
            }}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                label='Cari Informasimu Disini'
                variant='outlined'
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color='inherit' size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
          <br />
          <Button
            variant='contained'
            color='primary'
            onClick={() => alert(inputValue)}
            className={classes.button}>
            CARI
          </Button>
        </form>
        <hr />
        <Grid container spacing={4} justify='center'>
          {informations.map((p) => {
            return (
              <Grid item key={p.id}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={p.media}
                      title='Contemplative Reptile'
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h5' component='h2'>
                        {p.headline}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'>
                        {`${p.content.slice(0, 100)}...`}
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
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Information;
