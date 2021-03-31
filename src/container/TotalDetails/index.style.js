import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardTitle: {
    color: theme.text,
    fontSize: "16px",
    fontFamily: "GTWalsheimMedium"
  },
  contentText: {
    color: "#7C7C7D",
    fontSize: "14px"
  },
  incrementStyle: {
    color: "white",
    fontSize: "14px"
  },
  grid: {
    background: theme.dropdown.fadedBackgroundColor,
    display: "flex",
    justifyContent: "space-between",
    padding: "9px 20px 10px",
    marginTop: 16
  }
}));

export default useStyles;
