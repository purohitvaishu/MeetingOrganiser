/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import { format } from "date-fns";
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  makeStyles,
  withStyles,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Stepper,
  Step,
  StepButton,
  StepContent,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box
} from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import TimePicker from "react-time-picker";

const useStyles = makeStyles(theme => ({
  titleContainer: {
    paddingBottom: "0px"
  },
  title: {
    color: theme.text,
    fontSize: "20px",
    lineHeight: "28px"
  },
  subTitle: {
    color: theme.secondaryText,
    fontSize: "14px"
  },
  plText: {
    color: theme.text,
    fontSize: "14px"
  },
  divider: {
    margin: "10px 0px",
    border: theme.borderAlt
  },
  buttonContainer: {
    margin: "24px 20px",
    marginTop: "2px",
    padding: "0px"
  },
  maxButton: {
    flex: "auto",
    fontSize: "14px",
    fontFamily: theme.typography.fontFamily,
    border: theme.borderAlt,
    borderRadius: "0px",
    color: theme.text,
    textTransform: "none"
  },
  activeButton: {
    backgroundColor: theme.maxButton.color,
    color: theme.maxButton.activeColor
  },
  paper: {
    background: "transparent",
    color: "white",
    padding: "14px 0"
  },
  menuItem: {
    backgroundColor: `${theme.inputColor} !important`,
    color: theme.text,
    paddingLeft: "10px !important",
    paddingRight: "10px !important",
    fontSize: 14,
    "&.placeholder": {
      backgroundColor: `${theme.inputColor} !important`,
      "&:hover": {
        backgroundColor: `${theme.inputColor} !important`
      }
    },
    "&:hover": {
      color: theme.grid.color,
      backgroundColor: theme.inputColor,
      borderBottom: "none !important"
    },
    "&.MuiListItem-root.Mui-disabled": {
      backgroundColor: theme.inputColor,
      color: theme.secondaryText,
      opacity: 1
    },
    "&.MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover": {
      backgroundColor: theme.inputColor
    },
    "&:before, &:after, &:hover, &:focus": {
      borderBottom: "none"
    }
  },
  select: {
    color: theme.text,
    fontWeight: 300,
    border: "1px solid #4A4D5F",
    padding: "0px 12px",
    "&:before, &:after, &:hover, &:focus": {
      borderBottom: "none"
    }
  },
  pick: {
    "&.MuiInputBase-root": {
      "&.MuiInputBase-input": {
        color: "white !important"
      }
    },
    "&.MuiInput-underline:after": {
      borderBottom: "2px solid #68dbda"
    }
  },
  heading: {
    color: "white"
  },
  subhead: {
    color: "lightgrey"
  },
  flexDiv: {
    display: "flex"
  },
  name: {
    color: "#68dbda",
    paddingLeft: 8
  }
}));

const CustomDialog = withStyles({
  paper: {
    backgroundColor: "#2C2D3D"
  }
})(Dialog);

// eslint-disable-next-line react/prop-types
const PopupDialog = ({
  open,
  handleClose,
  building,
  data,
  freeRoom,
  meet,
  handleValues
}) => {
  const classes = useStyles();
  const [stepIndex, setStepIndex] = useState(0);
  const [appointmentDateSelected, setAppointmentDateSelected] = useState(null);
  const [appointmentSlot, setAppointmentSlot] = useState(null);
  const [appointmentEndSlot, setAppointmentEndSlot] = useState(null);
  const [next, setNext] = useState(0);
  const [value, setValue] = useState();
  const [floor, setFloor] = useState();
  const [room, setRoom] = useState();

  const handleChange = event => {
    const value = event.target.value.split("_");
    setValue(event.target.value);
    setFloor(value[0]);
    setRoom(value[1]);
  };

  const handleSaveClick = () => {
    setNext(2);
  };

  const handleConfirm = () => {
    const found = meet ? meet.some(el => el.name === building) : 0;
    let newStore;
    if (found) {
      newStore = meet.map(data =>
        data.name === building
          ? {
              name: building,
              freeRooms: data.freeRooms - 1,
              totalMeetings: data.totalMeetings + 1,
              meetingList: [
                ...data.meetingList,
                {
                  roomName: room,
                  floor,
                  startTime: appointmentSlot,
                  endTime: appointmentEndSlot,
                  date: appointmentDateSelected
                }
              ]
            }
          : data
      );
    } else if (!meet) {
      newStore = [
        {
          name: building,
          freeRooms: freeRoom - 1,
          totalMeetings: 1,
          meetingList: [
            {
              roomName: room,
              floor,
              startTime: appointmentSlot,
              endTime: appointmentEndSlot,
              date: appointmentDateSelected
            }
          ]
        }
      ];
    } else
      newStore = [
        ...meet,
        {
          name: building,
          freeRooms: freeRoom - 1,
          totalMeetings: 1,
          meetingList: [
            {
              roomName: room,
              floor,
              startTime: appointmentSlot,
              endTime: appointmentEndSlot,
              date: appointmentDateSelected
            }
          ]
        }
      ];
    localStorage.setItem("Scheduler", JSON.stringify(newStore));
    setAppointmentDateSelected(null);
    setAppointmentSlot(null);
    setAppointmentEndSlot(null);
    setNext(0);
    setValue("female");
    setStepIndex(0);
    handleClose();
    handleValues(newStore);
  };

  const closeEvent = () => {
    setAppointmentDateSelected(null);
    setAppointmentSlot(null);
    setAppointmentEndSlot(null);
    setNext(0);
    setValue("female");
    setStepIndex(0);
    handleClose();
  };

  const handleNextStep = () => {
    return stepIndex < 3 ? setStepIndex(stepIndex + 1) : null;
  };

  const handleSetAppointmentDate = date => {
    if (date) {
      handleNextStep();
      setAppointmentDateSelected(date);
    }
  };

  const handleTimeSlot = time => {
    if (time) {
      setAppointmentSlot(time);
    }
  };

  const handleEndTimeSlot = time => {
    if (time) {
      handleNextStep();
      setAppointmentEndSlot(time);
    }
  };

  const handleNextClick = () => {
    setNext(1);
  };

  const renderEndSlot = () => {
    return (
      <TimePicker
        margin="normal"
        id="time-picker-end"
        placeholder="Select a time"
        disabled={!appointmentSlot}
        minTime={appointmentSlot}
        value={appointmentEndSlot}
        onChange={handleEndTimeSlot}
        className={classes.pick}
        InputProps={{ readOnly: true }}
        disableClock
        clearIcon={null}
      />
    );
  };

  return (
    <CustomDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DialogContentText id="alert-dialog-description">
            {next === 0 ? (
              <Stepper
                activeStep={stepIndex}
                linear={false}
                orientation="vertical"
                className={classes.paper}
              >
                <Step>
                  <StepButton
                    onClick={() => setStepIndex(0)}
                    className={classes.step}
                  >
                    Choose an available day to book a room
                  </StepButton>
                  <StepContent>
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      format="MM/dd/yyyy"
                      placeholder="Select a date"
                      minDate={new Date()}
                      value={appointmentDateSelected}
                      onChange={handleSetAppointmentDate}
                      className={classes.pick}
                      InputProps={{ readOnly: true }}
                    />
                  </StepContent>
                </Step>
                <Step disabled={!appointmentDateSelected}>
                  <StepButton
                    onClick={() => setStepIndex(1)}
                    className={classes.step}
                  >
                    Choose an available time slot
                  </StepButton>
                  <StepContent>
                    <Typography>Start Time:</Typography>
                    <TimePicker
                      margin="normal"
                      id="time-picker"
                      placeholder="Select a time"
                      value={appointmentSlot}
                      onChange={handleTimeSlot}
                      className={classes.pick}
                      InputProps={{ readOnly: true }}
                      disableClock
                      clearIcon={null}
                    />
                    <br />
                    <Typography>End Time:</Typography>
                    {renderEndSlot()}
                  </StepContent>
                </Step>
              </Stepper>
            ) : next === 1 ? (
              <>
                <Typography className={classes.heading}>
                  Please Select One of the Free Rooms
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="floor"
                    name="floor"
                    value={value}
                    onChange={handleChange}
                  >
                    {data.length &&
                      data.map(value =>
                        value.rooms.map(room => {
                          return (
                            <FormControlLabel
                              value={`${value.name}_${room}`}
                              control={<Radio />}
                              label={`${value.name}, ${room}`}
                            />
                          );
                        })
                      )}
                  </RadioGroup>
                </FormControl>
              </>
            ) : (
              <>
                <Typography className={classes.heading}>
                  Confirm your Meeting
                </Typography>
                <br />
                <Box className={classes.flexDiv}>
                  <Typography className={classes.subhead}>Building:</Typography>
                  <Typography className={classes.name}>{building}</Typography>
                </Box>
                <Box className={classes.flexDiv}>
                  <Typography className={classes.subhead}>Floor: </Typography>
                  <Typography className={classes.name}>{floor}</Typography>
                </Box>
                <Box className={classes.flexDiv}>
                  <Typography className={classes.subhead}>Room:</Typography>
                  <Typography className={classes.name}>{room}</Typography>
                </Box>
                <Box className={classes.flexDiv}>
                  <Typography className={classes.subhead}>Meeting:</Typography>
                  <Typography className={classes.name}>
                    {format(appointmentDateSelected, "MMM dd, yyyy")} at{" "}
                    {appointmentSlot} to {appointmentEndSlot}
                  </Typography>
                </Box>
              </>
            )}
          </DialogContentText>
        </MuiPickersUtilsProvider>
      </DialogContent>
      <DialogActions className={classes.buttonContainer}>
        <Button
          className={classes.maxButton}
          onClick={closeEvent}
          color="primary"
        >
          Cancel
        </Button>
        <Button
          className={`${classes.maxButton} ${classes.activeButton}`}
          onClick={
            next === 0
              ? handleNextClick
              : next === 1
              ? handleSaveClick
              : handleConfirm
          }
          disabled={!appointmentEndSlot}
          color="primary"
          autoFocus
        >
          {next === 0 ? "Next" : next === 1 ? "Schedule" : "Confirm"}
        </Button>
      </DialogActions>
    </CustomDialog>
  );
};

export default PopupDialog;
