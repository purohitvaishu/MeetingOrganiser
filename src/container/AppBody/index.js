import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  Select,
  MenuItem
} from "@material-ui/core";
import { connect } from "react-redux";
import { createAction } from "@reduxjs/toolkit";
import useStyles from "./index.style";
import CardDetails from "../CardDetails";
import TotalDetails from "../TotalDetails";
import MockDetails from "../../lib/mockData.json";

const buildingInfo = createAction("BUILDING_INFO");

// eslint-disable-next-line react/prop-types
const AppBody = ({ buildingInfo, name }) => {
  const classes = useStyles();
  const [select, setSelect] = useState(1);

  const handleSelectChange = event => {
    setSelect(event.target.value);
    const data = MockDetails.filter(v => v.id === event.target.value);
    buildingInfo(data[0]);
  };

  useEffect(() => {
    if (!name) {
      const data = MockDetails.filter(v => v.id === 5);
      buildingInfo(data[0]);
    }
  }, [name]);

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
              {MockDetails.map(data => (
                <MenuItem value={data.id} className={classes.menuItem}>
                  {data.name}
                </MenuItem>
              ))}
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

export default connect(null, { buildingInfo })(AppBody);
