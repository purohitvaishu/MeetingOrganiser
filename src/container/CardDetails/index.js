/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Grid, Typography, CardContent, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { createAction } from "@reduxjs/toolkit";
import useStyles from "./index.style";
import PopupDialog from "../../component/Popup";

const localValues = createAction("LOCAL_STORAGE");

const CardDetails = ({ name, totalRooms, floors, meet, localValues }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [freeRoom, setFreeRoom] = useState(0);
  const [meetings, setMeetings] = useState(0);
  const [data, setData] = useState([]);

  const handleClick = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (!meet) {
      setData(floors);
      setFreeRoom(totalRooms);
    } else {
      const filter = meet.filter(e => e.name === name);
      // console.log("floores:======", filter);
      // const names = filter.length
      //   ? filter[0].meetingList.map(d =>
      //       floors.rooms.filter(e => e !== d.roomName && )
      //     )
      //   : [];
      // console.log("filter:===", names);
      if (filter.length) {
        setFreeRoom(filter[0].freeRooms);
        setMeetings(filter[0].totalMeetings);
        setData(filter[0].meetingList);
      } else {
        setData(floors);
        setFreeRoom(totalRooms);
      }
    }
  }, [meet, name]);

  const handleValues = data => {
    localValues(data);
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
              <Typography className={classes.typography}>{freeRoom}</Typography>
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
              <Typography className={classes.typography}>{meetings}</Typography>
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
              <Typography className={classes.typography}>0</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </div>
      <PopupDialog
        open={open}
        handleClose={() => setOpen(false)}
        building={name}
        data={data}
        freeRoom={freeRoom}
        meet={meet}
        handleValues={handleValues}
      />
    </Grid>
  );
};

const mapStateToProps = state => ({
  name: state.Info.building.name,
  totalRooms: state.Info.building.rooms,
  floors: state.Info.building.floors,
  meet: state.Info.meetings
});

export default connect(mapStateToProps, { localValues })(CardDetails);
