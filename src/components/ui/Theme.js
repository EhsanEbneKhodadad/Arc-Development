import { createTheme } from "@material-ui/core";
const blue = "#0B72B9";
const orange = "#FFBA60";

const theme = createTheme({
  palette: {
    common: {
      blue: blue,
      orange: orange,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: orange,
    },
  },
  typography: {
    tab: {
      textTransform: "none",
      fontFamily: "Raleway",
      fontSize: "1rem",
    },
    estimate: {
      color: "#fff",
      fontFamily: "Pacifico",
      textTransform: "none",
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: blue,
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `2px solid ${blue}`,
        },
        "&:hover:not($focused):not($error):before": {
          borderBottom: `2px solid ${blue}`,
        },
      },
    },
    MuiDialog:{
      paper:{
        width:'50%'
      }
    }
  },
});
export default theme;
