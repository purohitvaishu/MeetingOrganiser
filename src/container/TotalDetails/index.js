import React from "react";
import { Grid, Typography, CardContent } from "@material-ui/core";
import useStyles from "./index.style";

const TotalDetails = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <CardContent style={{ padding: 0, marginTop: 20 }}>
        <Typography className={classes.cardTitle}>Overall Details</Typography>
        <div style={{ display: "flex" }}>
          <Grid item md={4} xs={12}>
            <div className={classes.grid}>
              <Typography className={classes.contentText}>Buildings</Typography>
              <Typography className={classes.incrementStyle}>5</Typography>
            </div>
          </Grid>
          <br />
          <Grid item md={4} xs={12} style={{ paddingLeft: 32 }}>
            <div className={`${classes.grid}`}>
              <Typography className={classes.contentText}>Rooms</Typography>
              <Typography className={classes.incrementStyle}>72</Typography>
            </div>
          </Grid>
          <br />
          <Grid item md={4} xs={12} style={{ paddingLeft: 32 }}>
            <div className={classes.grid}>
              <Typography className={classes.contentText}>Meetings</Typography>
              <Typography className={classes.incrementStyle}>0</Typography>
            </div>
          </Grid>
        </div>
      </CardContent>
    </Grid>
  );
};

export default TotalDetails;
