import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography
} from '@material-ui/core';

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
function getDates(){
  return ['20 Maret 2020', '20 Maret 2020', '21 Maret 2020', '21 Maret 2020'].reverse();
}
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
            <StepLabel optional={<Typography variant="caption">{getDates()[index]} - <span>(2 jam yang lalu)</span></Typography>}>{label}</StepLabel>
            <StepContent>
              {getcontent()[index]}
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
