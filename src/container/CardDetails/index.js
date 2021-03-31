import React from "react";
import { Grid, Typography, CardContent, Button } from "@material-ui/core";
import useStyles from "./index.style";

const CardDetails = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.headerContainer}>
        <div style={{ display: "flex" }}>
          <Grid item xs={10}>
            <Typography className={classes.cardTitle}>Details</Typography>
          </Grid>
          <Grid item xs={2} style={{ textAlign: "end" }}>
            <Button variant="contained" className={classes.buttonDiv}>
              Add a Meeting
            </Button>
          </Grid>
        </div>
        <CardContent className={classes.cardContent}>
          <Grid className={classes.dotted}>
            <Grid item xs={6}>
              <Typography
                className={`${classes.typography} ${classes.greyTypography}`}
              >
                Building Name
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "end" }}>
              <Typography className={classes.typography}>Building 1</Typography>
            </Grid>
          </Grid>
          <Grid className={classes.dotted}>
            <Grid item xs={6}>
              <Typography
                className={`${classes.typography} ${classes.greyTypography}`}
              >
                Total Rooms
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "end" }}>
              <Typography className={classes.typography}>20</Typography>
            </Grid>
          </Grid>
          <Grid className={classes.dotted}>
            <Grid item xs={6}>
              <Typography
                className={`${classes.typography} ${classes.greyTypography}`}
              >
                Free Rooms
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "end" }}>
              <Typography className={classes.typography}>5</Typography>
            </Grid>
          </Grid>
          <Grid className={classes.dotted}>
            <Grid item xs={6}>
              <Typography
                className={`${classes.typography} ${classes.greyTypography}`}
              >
                Meetings
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "end" }}>
              <Typography className={classes.typography}>100</Typography>
            </Grid>
          </Grid>
          <Grid className={classes.dotted}>
            <Grid item xs={6}>
              <Typography
                className={`${classes.typography} ${classes.greyTypography}`}
              >
                Meeting Going on
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "end" }}>
              <Typography className={classes.typography}>10</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </div>
    </Grid>
  );
};

export default CardDetails;
