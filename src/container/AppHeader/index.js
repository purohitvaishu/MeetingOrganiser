import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Logo from "../../assets/logo.png";
import useStyles from "./index.style";

const AppHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Container style={{ padding: 0 }}>
        <Grid className={classes.grid}>
          <img src={Logo} className={classes.logo} alt="logo" width={35} />
          <Typography className={classes.addressText}>
            Smart Meeting Organiser
          </Typography>
        </Grid>
      </Container>
    </div>
  );
};

export default AppHeader;
