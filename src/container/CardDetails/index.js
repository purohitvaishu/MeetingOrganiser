/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Grid, Typography, CardContent, Button } from "@material-ui/core";
import useStyles from "./index.style";
import PopupDialog from "../../component/Popup";

const CardDetails = ({ name, totalRooms }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Grid item xs={12}>
      <div className={classes.headerContainer}>
        <div style={{ display: "flex" }}>
          <Grid item xs={10}>
            <Typography className={classes.cardTitle}>Details</Typography>
          </Grid>
          <Grid item xs={2} style={{ textAlign: "end" }}>
            <Button
              variant="contained"
              className={classes.buttonDiv}
              onClick={handleClick}
            >
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
                Building
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "end" }}>
              <Typography className={classes.typography}>{name}</Typography>
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
              <Typography className={classes.typography}>
                {totalRooms}
              </Typography>
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
      <PopupDialog
        open={open}
        handleClose={() => setOpen(false)}
        building={name}
      />
    </Grid>
  );
};

export default CardDetails;
