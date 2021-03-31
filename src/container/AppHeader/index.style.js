import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  logo: {
    marginTop: 8
  },
  grid: {
    display: "flex",
    padding: "6px 0",
    alignItems: "center"
  },
  header: {
    backgroundColor: theme.inputColor,
    position: "relative",
    zIndex: 999,
    padding: 0
  },
  addressText: {
    padding: "5px 0",
    color: "white"
  }
}));

export default useStyles;
