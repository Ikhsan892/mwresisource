import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import SvgIcon from '@material-ui/core/SvgIcon';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};
const ColorlibConnector2 = withStyles({
  active: {
    '& $line': {
      display : 'none'
    },
  },
  completed: {
    '& $line': {
      display : 'none'
    },
  },
  line: {
    display : 'none'
  },
})(StepConnector);

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundColor:
        '#2196f3',
    },
  },
  completed: {
    '& $line': {
      backgroundColor:
        '#2196f3',
    },
  },
  line: {
    height: 3,
    border: 0,
    width : 'calc(100% - 15%)',
    margin: '0 auto',
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor:
      '#2196f3',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundColor:
      '#2196f3',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SvgIcon>
          <svg x="0px" y="0px" width="24px"
             height="24px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
          <g id="Black">
            <g>
              <polygon fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="
                6.48,12.52 6,15.5 4.02,15.98 0.5,19.5 0.5,23.5 4.5,23.5 8.02,19.98 8.5,18 11.48,17.52 		"/>

                <line fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="8.98" y1="15.02" x2="18" y2="6"/>
              <polygon fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="18,6 22,5
                23.5,2 22,0.5 19,2 		"/>
              <polyline fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="11.5,9.5
                8,6 7.5,2.5 5.5,0.5 2.5,0.5 4.5,2.5 4.5,4.5 2.5,4.5 0.5,2.5 0.5,5.5 2,7.5 6,8 9.5,11.5 		"/>
              <polyline fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="
                14.5,12.5 18,16 21.5,16.5 23.5,18.5 23.5,21.5 21.5,19.5 19.5,19.5 19.5,21.5 21.5,23.5 18.5,23.5 16.5,22 16,18 12.5,14.5 		"/>

                <line fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="6" y1="15.5" x2="8.5" y2="18"/>
            </g>
          </g>
          <g id="Frames-24px">
            <rect fill="none" width="24" height="24"/>
          </g>
          </svg>
       </SvgIcon>,
    2: <SvgIcon>
          <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 128 128"><defs>
          </defs><title>n</title><polygon className="cls-1" fill="#fff" points="126.723 72.005 112.747 47.304 64 54.118 15.253 47.304 1.277 72.005 50.677 78.407 64 57.592 77.323 78.407 126.723 72.005"/><polygon className="cls-1" fill="#fff" points="14.963 78.635 14.578 118.298 61.136 124.797 61.136 69.905 53.233 83.594 14.963 78.635"/><polygon className="cls-1" points="74.769 83.594 66.798 69.781 66.798 124.808 113.424 118.298 113.039 78.635 74.769 83.594"/><polygon className="cls-2" points="78.443 25.269 70.193 25.269 68.6 3.192 59.4 3.192 57.807 25.269 49.557 25.269 64 44.765 78.443 25.269"/></svg>
       </SvgIcon>,
    3: <SvgIcon>
    <svg id="Icons" x="0px" y="0px" viewBox="0 0 32 32" enableBackground="new 0 0 32 32">
        <polyline className="st1" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" points="2,8 19,8 19,23 13,23 "/>
        <circle className="st1"  fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" cx="24" cy="23" r="2"/>
        <circle className="st1"  fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10"cx="8" cy="23" r="2"/>
        <polyline className="st1" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" points="19,23 19,12 25,12 29,17 29,23 26,23 "/>
        <line className="st1" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" x1="4" y1="12" x2="13" y2="12"/>
        <line className="st1" fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round" strokeMiterlimit="10" x1="2" y1="16" x2="11" y2="16"/>
    </svg>
       </SvgIcon>,
    4 : <Check/>
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom : '50px'
  },
  step1 :{
    marginBottom : '-35px'
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Diservice', 'Dipacking', 'Dikirim', 'Diterima'];
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep] = React.useState(1);
  const steps = getSteps();
  return (
    <div className={classes.root}>
      <div className={classes.step1}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className={classes.step2}>
        <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector2 />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
}
