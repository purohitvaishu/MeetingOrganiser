import React from "react";
import { ThemeProvider } from "@material-ui/core";
import dotenv from "dotenv";
import { darkTheme } from "../Theme";
import App from "./App";

dotenv.config();

// eslint-disable-next-line react/prefer-stateless-function
class ThemeSelector extends React.Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    );
  }
}

export default ThemeSelector;
