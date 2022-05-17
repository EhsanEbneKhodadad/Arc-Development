import React from "react";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Hidden,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import check from "../../assets/check.svg";
import send from "../../assets/send.svg";

const useStyles = makeStyles((theme) => ({
  mainColor: {
    color: theme.palette.primary.main,
    alignSelf: "center",
  },
  width: {
    width: "100%",
    margin: "0.4rem",
  },
  message: {
    margin: "1rem 0",
    border: `2px solid ${theme.palette.primary.main}`,
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
  btn: {
    color: "#fff",
    width: 200,
    height: 40,
    fontSize: "14px",
    borderRadius: "50px",
    alignSelf: "center",
  },
  sMargin: {
    margin: "0 10px",
  },
  btnContainer: {
    marginTop: "4rem",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
    },
  },
  margin: {
    margin: "2rem 0 0 4rem",
    [theme.breakpoints.down("sm")]: {
      margin: "2rem 0 0 0",
    },
  },
  price: {
    color: theme.palette.secondary.main,
    fontSize: "1.5rem",
    fontFamily: "Pacifico",
    marginLeft: 10,
  },
  lineHeight: {
    lineHeight: "1rem",
  },
}));

function EstimateDialog(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth
      fullScreen={matchesXs ? true : false}
      maxWidth="md"
    >
      <DialogTitle id="form-dialog-title" className={classes.mainColor}>
        Confirm Message
      </DialogTitle>
      <DialogContent>
        <Grid container direction={matchesMd ? "column" : "row"}>
          <Grid item container direction="column" sm>
            <Grid item className={classes.width}>
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
            <Grid item className={classes.width}>
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
            <Grid item className={classes.width}>
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
            <Grid item className={classes.width}>
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
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                className={classes.lineHeight}
              >
                We can create this custom digital solution for an estimated
                <span className={classes.price}>$ {props.totalPrice}</span>
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                className={classes.lineHeight}
              >
                Fill out your name, number, and email, place your request, and
                we’ll get back to you with details moving forward and a final
                price.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            sm
            className={classes.margin}
            justifyContent="space-around"
          >
            <Hidden xsDown>
              {props.requestInfo.map((item, index) => {
                return item.length > 0 ? (
                  <Grid item container key={index}>
                    <Grid item style={{ marginRight: "0.5rem" }}>
                      <img src={check} alt="check" />
                    </Grid>
                    <Grid item>
                      <span>{item.join(", ")}</span>
                    </Grid>
                  </Grid>
                ) : null;
              })}
            </Hidden>
            <Grid
              item
              container
              className={classes.btnContainer}
              justifyContent="space-around"
            >
              <Button
                variant="text"
                color="primary"
                onClick={props.handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.btn}
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
                onClick={props.sendRequest}
              >
                {props.loading ? (
                  <CircularProgress className={classes.color} size={30} />
                ) : (
                  <div>
                    Place Request
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
}

export default EstimateDialog;
