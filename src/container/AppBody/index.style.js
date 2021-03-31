import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  content: {
    position: "relative",
    zIndex: 10,
    gridGap: "50px",
    marginBottom: "2%",
    padding: 0
  },
  flexDiv: {
    display: "flex",
    margin: "64px 0 24px"
  },
  heading: {
    color: "white",
    fontWeight: "bold"
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
    "&:before, &:after, &:hover, &:focus": {
      borderBottom: "none"
    }
  },
  addressBox: {
    border: "1px solid #4A4D5F",
    boxSizing: "border-box",
    background: "transparent",
    width: "110px",
    float: "right",
    textAlign: "center",
    color: "white",
    "& .MuiFormControl-root": {
      "& .MuiInput-underline:before": {
        borderBottom: "none"
      },
      "& .MuiInput-underline:after": {
        borderBottom: "none"
      },
      "& .MuiInput-underline:focus": {
        borderBottom: "none"
      },
      "& .MuiInput-underline:hover": {
        borderBottom: "none"
      }
    }
  }
}));

export default useStyles;
