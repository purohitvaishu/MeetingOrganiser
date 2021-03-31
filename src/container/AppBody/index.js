import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Select,
  MenuItem
} from "@material-ui/core";
import useStyles from "./index.style";
import CardDetails from "../CardDetails";
import TotalDetails from "../TotalDetails";

const AppBody = () => {
  const classes = useStyles();
  const [select, setSelect] = useState(0);

  const handleSelectChange = event => {
    setSelect(event.target.value);
  };

  const renderHeading = () => {
    return (
      <div className={classes.flexDiv}>
        <Grid item md={6}>
          <Typography className={classes.heading} variant="h5">
            Meetings
          </Typography>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.addressBox}>
            <Select
              className={`${classes.select} select`}
              value={select}
              onChange={event => handleSelectChange(event)}
            >
              <MenuItem value="0" className={classes.menuItem}>
                Building 1
              </MenuItem>
              <MenuItem value="1" className={classes.menuItem}>
                Building 2
              </MenuItem>
              <MenuItem value="2" className={classes.menuItem}>
                Building 3
              </MenuItem>
            </Select>
          </Paper>
        </Grid>
      </div>
    );
  };

  return (
    <Container className={`${classes.content} content`}>
      {renderHeading()}
      <br />
      <Grid container spacing={4}>
        <CardDetails />
      </Grid>
      <Grid container spacing={4}>
        <TotalDetails />
      </Grid>
    </Container>
  );
};

export default AppBody;
