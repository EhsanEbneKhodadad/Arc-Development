import React from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import send from "../../assets/send.svg";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "70%",
  },
  inputmargin: {
    margin: "1rem 0",
  },
  textfieldClass: {
    "& .MuiInput-input": {
      "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
      },
    },
  },
  message: {
    margin: "1rem 0",
    border: `2px solid ${theme.palette.primary.main}`,
  },
  width: {
    width: "70%",
  },
  mainColor: {
    color: theme.palette.primary.main,
    alignSelf: "center",
  },
  green: {
    color: "green",
  },
  err: {
    color: theme.palette.error.main,
    "&:hover": {
      background: "transparent",
    },
  },
  btn: {
    color: "#fff",
    width: 150,
    height: 40,
    fontSize: "14px",
    borderRadius: "50px",
    alignSelf: "center",
  },
  color: {
    color: "#fff",
  },
  sMargin: {
    margin: "0 10px",
  },
  itemWidth: {
    width: "70%",
    margin: "0.4rem",
  },
}));

const DialogComponent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      fullScreen={matches ? true : false}
    >
      <DialogTitle id="form-dialog-title" className={classes.mainColor}>
        Confirm Message
      </DialogTitle>
      <DialogContent>
        <Grid container direction="column" alignItems="center">
          <Grid item className={classes.itemWidth}>
            <TextField
              fullWidth
              required
              id="name"
              label="Name"
              className={classes.inputmargin}
              value={props.name}
              onChange={props.validation}
              error={props.nameHelper.length > 0 ? true : false}
              helperText={props.nameHelper}
              inputProps={{
                autoComplete: "off",
              }}
            />
          </Grid>
          <Grid item className={classes.itemWidth}>
            <TextField
              fullWidth
              required
              id="phone"
              label="Phone Number"
              type="number"
              className={`${classes.inputmargin} ${classes.textfieldClass}`}
              value={props.phone}
              onChange={props.validation}
              error={props.phoneHelper.length > 0 ? true : false}
              helperText={props.phoneHelper}
              inputProps={{
                autoComplete: "off",
              }}
            />
          </Grid>
          <Grid item className={classes.itemWidth}>
            <TextField
              fullWidth
              required
              id="email"
              label="Email"
              type="email"
              className={classes.inputmargin}
              value={props.email}
              onChange={props.validation}
              error={props.emailHelper.length > 0 ? true : false}
              helperText={props.emailHelper}
            />
          </Grid>
          <Grid item className={classes.itemWidth}>
            <TextField
              fullWidth
              required
              id="message"
              label="Message"
              InputProps={{ disableUnderline: true }}
              multiline
              rows={4}
              className={classes.message}
              value={props.message}
              onChange={props.validation}
              error={props.messageHelper.length > 0 ? true : false}
              helperText={props.messageHelper}
            />
          </Grid>
          <Grid item className={classes.itemWidth}>
            <Typography
              variant="body1"
              align="center"
              className={classes.green}
            >
              Are you sure?
            </Typography>
          </Grid>
          <Grid
            item
            container
            className={classes.itemWidth}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Button onClick={props.handleClose} className={classes.err}>
                No
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  props.nameHelper.length > 0 ||
                  props.phoneHelper.length > 0 ||
                  props.emailHelper.length > 0 ||
                  props.messageHelper.length > 0 ||
                  props.name.length === 0 ||
                  props.phone.length === 0 ||
                  props.email.length === 0 ||
                  props.message.length === 0
                }
                variant="contained"
                color="primary"
                className={classes.btn}
                onClick={props.sendEmail}
              >
                {props.loading ? (
                  <CircularProgress className={classes.color} size={30} />
                ) : (
                  <div>
                    Yes{" "}
                    <img src={send} alt="send" className={classes.sMargin} />
                  </div>
                )}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
