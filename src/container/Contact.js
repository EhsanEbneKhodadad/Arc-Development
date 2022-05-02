import React, { useState } from "react";
import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Estimate from "../components/Home/Estimate";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import send from "../assets/send.svg";
import DialogComponent from "../components/Dialog/Dialog";

const useStyles = makeStyles((theme) => ({
  line: {
    lineHeight: "1rem",
  },
  sMargin: {
    margin: "0 10px",
  },
  form: {
    width: "70%",
  },
  inputmargin: {
    margin: "1rem 0",
  },
  btn: {
    color: "#fff",
    width: 150,
    height: 40,
    fontSize: "14px",
    borderRadius: "50px",
    alignSelf: "center",
    marginTop: "2rem",
  },
  contactContainer: {
    height: "90%",
    margin: "2rem 0",
    [theme.breakpoints.down("sm")]: {
      order: "1",
    },
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
  a: {
    textDecoration: "none",
    color: "inherit",
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [messageHelper, setMessageHelper] = useState("");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const phoneReg = new RegExp("^(\\+98|0)?9\\d{9}$");

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validation = (event) => {
    switch (event.target.id) {
      case "name":
        setName(event.target.value);
        if (event.target.value.length < 3) {
          setNameHelper("Please Enter Valid Name");
        } else {
          setNameHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        if (!phoneReg.test(event.target.value)) {
          setPhoneHelper("Please Enter Valid Phone");
        } else {
          setPhoneHelper("");
        }
        break;
      case "email":
        setEmail(event.target.value);
        if (
          !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
            event.target.value
          )
        ) {
          setEmailHelper("Please Enter Valid Email");
        } else {
          setEmailHelper("");
        }
        break;
      case "message":
        setMessage(event.target.value);
        if (event.target.value.length < 5) {
          setMessageHelper("Please Enter Valid Name");
        } else {
          setMessageHelper("");
        }
        break;

      default:
        break;
    }
  };

  return (
    <Grid container direction={matches ? "column" : "row"}>
      <Grid
        item
        container
        md={4}
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        className={classes.contactContainer}
      >
        <Grid item>
          <Typography variant="h6" color="primary" className={classes.line}>
            Contact Us
          </Typography>
          <Typography variant="body1" color="primary">
            We’re waiting.
          </Typography>
        </Grid>
        <Grid item container direction="column" alignItems="center">
          <Grid
            item
            container
            justifyContent="center"
            className={classes.inputmargin}
          >
            <img src={phoneIcon} alt="phone" />
            <Typography
              variant="subtitle2"
              color="primary"
              className={classes.sMargin}
            >
              <a href="tel:55555555555" className={classes.a}>
                (555) 5555-5555
              </a>
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            className={classes.inputmargin}
          >
            <img src={emailIcon} alt="email" />
            <Typography
              variant="subtitle2"
              color="primary"
              className={classes.sMargin}
            >
              <a href="mailto:zach@gmail.com" className={classes.a}>
                zach@gmail.com
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          className={classes.form}
        >
          <Grid container direction="column">
            <TextField
              required
              id="name"
              label="Name"
              className={classes.inputmargin}
              value={name}
              onChange={validation}
              error={nameHelper.length > 0 ? true : false}
              helperText={nameHelper}
            />
            <TextField
              required
              id="phone"
              label="Phone Number"
              type="number"
              className={`${classes.inputmargin} ${classes.textfieldClass}`}
              value={phone}
              onChange={validation}
              error={phoneHelper.length > 0 ? true : false}
              helperText={phoneHelper}
            />
            <TextField
              required
              id="email"
              label="Email"
              type="email"
              className={classes.inputmargin}
              value={email}
              onChange={validation}
              error={emailHelper.length > 0 ? true : false}
              helperText={emailHelper}
            />
            <TextField
              required
              id="message"
              label="Message"
              InputProps={{ disableUnderline: true }}
              multiline
              rows={4}
              className={classes.message}
              value={message}
              onChange={validation}
              error={messageHelper.length > 0 ? true : false}
              helperText={messageHelper}
            />
            <Button
              disabled={
                nameHelper.length > 0 ||
                phoneHelper.length > 0 ||
                emailHelper.length > 0 ||
                messageHelper.length > 0 ||
                name.length === 0 ||
                phone.length === 0 ||
                email.length === 0 ||
                message.length === 0
              }
              variant="contained"
              color="secondary"
              className={classes.btn}
              onClick={handleClickOpen}
            >
              Send <img src={send} alt="send" className={classes.sMargin} />
            </Button>
          </Grid>
        </Grid>
        <DialogComponent
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          message={message}
          setMessage={setMessage}
          open={open}
          handleClose={handleClose}
          nameHelper={nameHelper}
          emailHelper={emailHelper}
          phoneHelper={phoneHelper}
          messageHelper={messageHelper}
          validation={validation}
          setValue={props.setValue}
        />
      </Grid>
      <Grid item md={8}>
        <Estimate setValue={props.setValue} setMenuIndex={props.setMenuIndex} />
      </Grid>
    </Grid>
  );
};

export default Contact;
