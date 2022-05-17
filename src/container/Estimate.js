import React, { useEffect, useRef, useState } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Lottie from "lottie-web";
import _ from "lodash";
import swal from "sweetalert";
import emailjs from "@emailjs/browser";
import estimateAnimation from "../animations/estimateAnimation/data.json";
import data from "../data/questions";
import EstimateDialog from "../components/Dialog/EstimateDialog";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
    },
  },
  marginTop: {
    marginTop: "3rem",
    padding: "1rem 0 0 7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem",
    },
  },
  secondMarginTop: {
    marginTop: "3rem",
    padding: "1rem 5rem 0 2rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: "2rem",
    },
  },
  title: {
    fontFamily: "Raleway",
  },
  itemTitle: {
    fontFamily: "Raleway",
    fontSize: "1rem",
  },
  img: {
    width: "120px",
    height: "120px",
    [theme.breakpoints.down("md")]: {
      width: "100px",
      height: "100px",
    },
  },
  btn: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  margin: {
    margin: "1rem",
  },
  center: {
    margin: "auto",
  },
  itemMargin: {
    marginTop: "5rem",
  },
}));

const Estimate = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smMatches = useMediaQuery(theme.breakpoints.down("sm"));
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [questions, setQuestions] = useState(_.cloneDeep(data));
  const [question, setQuestion] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // for dialog
  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [messageHelper, setMessageHelper] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [requestInfo, setRequestInfo] = useState([]);
  const phoneReg = new RegExp("^(\\+98|0)?9\\d{9}$");

  const animationContainer = useRef();
  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: estimateAnimation,
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const prev = () => {
    if (question > 0) {
      setQuestion(question - 1);
    }
  };

  const next = () => {
    if (question < 6) {
      setQuestion(question + 1);
    }
  };

  const select = (id, itemId) => {
    const index = questions.findIndex((item) => item.id === id);
    const items = _.cloneDeep(questions);
    const indexItem = items[index].options.findIndex(
      (item) => item.id === itemId
    );

    //remove
    if (!items[index].multiple) {
      items[index].options.forEach((item) => {
        if (item !== items[index].options[indexItem]) {
          item.select = false;
        }
      });
    }
    items[index].options[indexItem].select =
      !items[index].options[indexItem].select;
    setQuestions(items);
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

  const sendRequest = () => {
    let message = "";
    requestInfo.forEach((item) =>
      item.forEach((data) => (message += data + " "))
    );
    setLoading(true);
    emailjs
      .send(
        "service_ii3uwtc",
        "template_ye4ih9d",
        {
          from_name: name,
          request: message,
          price: totalPrice,
        },
        "ZelHyStE66mscPhvF"
      )
      .then((res) => {
        swal("Good job!", "Your message has been sent.", "success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setQuestions(_.cloneDeep(data));
      })
      .catch((err) => {
        swal("Error", "", "error");
      })
      .finally(() => {
        setLoading(false);
        setOpen(false);
      });
  };
  const requestData = () => {
    const data = questions.map((item) => {
      return item.options.map((options) => {
        return options.select ? options.title : null;
      });
    });
    for (let index = 0; index < data.length; index++) {
      let i = 0;
      while (i < data[index].length) {
        if (data[index][i] == null) {
          data[index].splice(i, 1);
        } else {
          i++;
        }
      }
    }
    setRequestInfo(data);
  };

  const calcPrice = () => {
    let price = 0;
    let coefficient = 1;
    questions.forEach((item) => {
      item.options.forEach((data) => {
        if (item.id !== 6) {
          if (data.select) {
            price += data.cost;
          }
        } else {
          if (data.select) {
            coefficient = data.cost;
          }
        }
      });
    });
    price *= coefficient;
    setTotalPrice(price);
  };

  const calcItems = () => {
    let items = false;
    questions.forEach((item) =>
      item.options.forEach((data) => (data.select ? (items = true) : null))
    );

    return items;
  };

  return (
    <Grid container>
      <Grid
        item
        container
        direction="column"
        md={5}
        sm={10}
        className={`${classes.marginTop} ${classes.container}`}
      >
        <Grid item>
          <Typography variant="h3" color="primary">
            Estimate
          </Typography>
        </Grid>
        <Grid item container className={classes.center}>
          <div ref={animationContainer} />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        md={7}
        className={classes.secondMarginTop}
        alignItems={smMatches ? "flex-start" : "center"}
      >
        <Grid item>
          <Typography
            variant="h5"
            color="primary"
            className={classes.title}
            paragraph
          >
            {questions[question].title}
          </Typography>
          <Typography
            variant="caption"
            color="textSecondary"
            className={classes.title}
            paragraph
            align="center"
          >
            {questions[question].subtitle}
          </Typography>
        </Grid>

        <Grid item container className={classes.itemMargin} alignItems="center">
          {questions[question].options.map((item) => (
            <Grid
              item
              container
              sm
              key={item.id}
              component={Button}
              onClick={() => select(questions[question].id, item.id)}
              style={{
                borderRadius: 0,
                background: item.select
                  ? theme.palette.secondary.main
                  : "inherit",
                height: "200px",
              }}
            >
              <Grid
                item
                container
                direction="column"
                sm
                alignItems="center"
                className={matches ? classes.margin : undefined}
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    color="primary"
                    className={classes.itemTitle}
                    gutterBottom
                    align="center"
                  >
                    {item.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <img
                    src={item.icon}
                    alt={item.iconAlt}
                    className={classes.img}
                  />
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>

        <Grid
          item
          container
          justifyContent="space-around"
          className={classes.itemMargin}
        >
          <IconButton onClick={prev} disabled={question === 0 ? true : false}>
            <ArrowBackIcon color={question === 0 ? undefined : "primary"} />
          </IconButton>
          <IconButton onClick={next} disabled={question === 6 ? true : false}>
            <ArrowForwardIcon color={question === 6 ? undefined : "primary"} />
          </IconButton>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{ margin: "2rem 0" }}
        >
          <Button
            className={classes.btn}
            onClick={() => {
              handleClickOpen();
              calcPrice();
              requestData();
              calcItems();
            }}
            disabled={calcItems() ? false : true}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <EstimateDialog
        open={open}
        handleClose={handleClose}
        name={name}
        phone={phone}
        email={email}
        message={message}
        nameHelper={nameHelper}
        emailHelper={emailHelper}
        phoneHelper={phoneHelper}
        messageHelper={messageHelper}
        validation={validation}
        totalPrice={totalPrice}
        sendRequest={sendRequest}
        loading={loading}
        setLoading={setLoading}
        requestInfo={requestInfo}
      >
        <Grid item container>
          <Grid item>
            <Typography variant="body1" paragraph>
              We can create this custom digital solution for an estimated{" "}
              <span className={classes.price}>${totalPrice}</span>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" paragraph>
              Fill out your name, number, and email, place your request, and
              we’ll get back to you with details moving forward and a final
              price.
            </Typography>
          </Grid>
        </Grid>
      </EstimateDialog>
    </Grid>
  );
};

export default Estimate;
