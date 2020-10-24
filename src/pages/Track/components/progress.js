import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
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
  secondaryTail: {
    backgroundColor: theme.palette.primary.main,
  },
}));
export default function Progress({ status, active }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Timeline align='alternate'>
        {status.map((item, index) => {
          return (
            <TimelineItem key={item}>
              <TimelineOppositeContent>
                <Typography color='textSecondary'>
                  <small>{item.created_diff}</small>
                </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={index === 0 ? "primary" : "grey"} />
                <TimelineConnector
                  className={index === 0 ? classes.secondaryTail : ""}
                />
              </TimelineSeparator>
              <TimelineContent>
                <Typography>
                  <strong>{item.nama_status}</strong>
                </Typography>
                <div>{item.deskripsi_status}</div>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </Timeline>
    </div>
  );
}
