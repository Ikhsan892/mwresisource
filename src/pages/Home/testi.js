import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardActionArea,
  Typography,
  MobileStepper,
  Button,
  Avatar,
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import SwipeableViews from 'react-swipeable-views';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    avatar : 'I',
    rating : 4.5,
    namapelanggan : 'Fatihul Ikhsan',
    komentar : 'Gk nyesel gw service disini soalnya banyak banget giveaway nya dari MW beeuuh makasih banyak dah',
    barang : 'Iphone 11 Pro',
  },
  {
    avatar : 'A',
    rating : 5.0,
    namapelanggan : 'Alfin',
    komentar : 'Gk nyesel gw service disini soalnya banyak banget giveaway nya dari MW beeuuh makasih banyak dah',
    barang : 'Iphone 11 ',
  },
  {
    avatar : 'I',
    rating : 4.5,
    namapelanggan : 'Intan',
    komentar : 'Gk nyesel gw service disini soalnya banyak banget giveaway nya dari MW beeuuh makasih banyak dah',
    barang : 'Oppo f5',
  },
  {
    avatar : 'J',
    rating : 5.0,
    namapelanggan : 'Jennie',
    komentar : 'Gk nyesel gw service disini soalnya banyak banget giveaway nya dari MW beeuuh makasih banyak dah',
    barang : 'Iphone 10 XS',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop : '40px',
    maxWidth : '345px',
    marginBottom : '50px',
  },
  card : {
    paddingTop : '40px',
    maxWidth : '345px',
    marginBottom : '50px',
  },
  center : {
    textAlign : 'center'
  },
  avatar : {
    marginBottom: '-40px',
    width: '100px',
    height: '100px',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  // header: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   height: 50,
  //   paddingLeft: theme.spacing(4),
  //   backgroundColor: theme.palette.background.default,
  // },
  // img: {
  //   display: 'block',
  //   width: 'auto',
  //   height : '350px',
  //   margin: '0 auto',
  //   overflow: 'hidden',
  // },
}));

function Testi() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.avatar}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div>
                  <Avatar className={classes.avatar}>{step.avatar}</Avatar>
                  <Card className={classes.card}>
                     <CardActionArea>
                       <CardContent>
                         <Typography gutterBottom variant="h5" component="h2" className={classes.center}>
                           {step.namapelanggan}
                         </Typography>
                         <div className={classes.center}>
                            <Rating name="half-rating-read" defaultValue={step.rating} precision={0.5} readOnly />
                         </div>
                         <Typography variant="body2" color="textSecondary" component="p">
                           {step.komentar}
                         </Typography>
                       </CardContent>
                     </CardActionArea>
                     <CardActions>
                        <em>- {step.barang}</em>
                     </CardActions>
                   </Card>
                </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>

            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}

          </Button>
        }
      />
    </div>
  );
}

export default Testi;
