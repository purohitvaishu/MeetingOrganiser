import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  headerContainer: {
    justifyContent: "space-between"
  },
  cardTitle: {
    color: theme.text,
    fontSize: "16px",
    fontFamily: "GTWalsheimMedium"
  },
  cardContent: {
    padding: "8px 0px 24px",
    fontSize: "14px"
  },
  dotted: {
    display: "flex",
    background: theme.dropdown.fadedBackgroundColor,
    borderBottom: theme.border,
    position: "relative",
    padding: "10px 20px",
    "&:last-child": {
      borderBottom: "none",
      padding: "9px 20px 10px"
    },
    "& .MuiTypography-root": {
      fontSize: "14px",
      fontFamily: "GTWalsheimLight"
    }
  },
  typography: {
    color: theme.text,
    fontSize: "14px",
    fontWeight: 300
  },
  greyTypography: {
    color: theme.secondaryText
  },
  buttonDiv: {
    textAlign: "center",
    background: "#68DBDA",
    color: "black",
    fontWeight: 500,
    fontSize: "12px",
    "&:hover": {
      background: "#68DBDA",
      opacity: 0.5
    }
  }
}));

export default useStyles;
