import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Membongkar HP', 'Penggantian Lcd', 'Ganti Konektor', 'Pemasangan Lcd'].reverse();
}
function getcontent(){
  return ['Membuka dalaman hp dengan hati hati', 'Menggan Lcd membutuhkan waktu 4 jam','ganti konektor mantap','masang lcd dan di lem '].reverse()
}

export default function Progress() {
  const classes = useStyles();
  const [activeStep] = React.useState(0);
  const steps = getSteps();

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel optional={<Typography variant="caption">2 jam yang lalu</Typography>}>{label}</StepLabel>
            <StepContent>
              {getcontent()[index]}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
