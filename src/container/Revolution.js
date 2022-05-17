import React, { useEffect, useRef } from "react";
import {
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import vision from "../assets/vision.svg";
import Lottie from "lottie-web";
import Estimate from "../components/Home/Estimate";
import technologyAnimation from "../animations/technologyAnimation/data.json";
import consultation from "../assets/consultationIcon.svg";
import mockup from "../assets/mockupIcon.svg";
import review from "../assets/reviewIcon.svg";
import design from "../assets/designIcon.svg";
import build from "../assets/buildIcon.svg";
import launch from "../assets/launchIcon.svg";
import maintainIcon from "../assets/maintainIcon.svg";
import iterateIcon from "../assets/iterateIcon.svg";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "3rem",
    padding: "1rem 7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
  },
  img: {
    width: "60%",
    height: "60%",
  },
  secondImg: {
    width: "40%",
    height: "40%",
  },
  launchImg: {
    width: "15%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  right: {
    marginLeft: "auto",
  },
  center: {
    textAlign: "center",
    marginTop: "2rem",
  },
  animation: {
    width: "70%",
    height: "70%",
  },
  marginContainer: {
    marginTop: "10rem",
  },
  consultation: {
    background: "#b3b3b3",
    height: "100vh",
  },
  colorWhite: {
    color: "#fff",
  },
  itemContainer: {
    paddingTop: "2rem",
    height: "50%",
  },
  imgContainer: {
    alignSelf: "flex-end",
    margin: "0 auto",
    textAlign: "center",
  },
  mockup: {
    padding: "1rem 7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
    background: "#FF7373",
    height: "100vh",
  },
  review: {
    background: "#39B54A",
    height: "100vh",
    padding: "1rem 7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
  },
  design: {
    background: "#A67C52",
    height: "100vh",
    padding: "1rem 7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
  },
  build: {
    background: "#FBB03B",
    height: "100vh",
    padding: "1rem 7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
  },
  launch: {
    background: "#C1272D",
    height: "100vh",
    padding: "1rem 7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
  },
  maintainIcon: {
    background: "#8E45CE",
    height: "100vh",
    padding: "1rem 7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
  },
  iterateIcon: {
    background: "#29ABE2",
    height: "100vh",
    padding: "1rem 7rem",
    [theme.breakpoints.down("md")]: {
      padding: "2rem 5rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2rem",
    },
  },
}));

const Revolution = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const animationContainer = useRef();
  useEffect(() => {
    Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: technologyAnimation,
    });
  }, []);

  return (
    <Grid container direction="column">
      {/******************************************** section ********************************************/}
      <Grid item container className={classes.marginTop}>
        <Grid item>
          <Typography variant="h3" color="primary" gutterBottom>
            The Revolution
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item md={6} className={classes.center}>
            <img src={vision} alt="vison" className={classes.img} />
          </Grid>
          <Grid
            item
            container
            md={6}
            className={classes.right}
            justifyContent={matches ? null : "flex-end"}
          >
            <Grid item>
              <Typography variant="h4" color="primary">
                Vision
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                paragraph
              >
                The rise of computers, and subsequently the Internet, has
                completely altered every aspect of human life. This has
                increased our comfort, broadened our connections, and reshaped
                how we view the world.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                paragraph
              >
                What once was confined to huge rooms and teams of engineers now
                resides in every single one of our hands. Harnessing this
                unlimited potential by using it to solve problems and better
                lives is at the heart of everything we do.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                paragraph
              >
                We want to help businesses capitalize on the latest and greatest
                technology. The best way to predict the future is to be the one
                building it, and we want to help guide the world into this next
                chapter of technological expansion, exploration, and innovation.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                paragraph
              >
                By holding ourselves to rigorous standards and pristine quality,
                we can ensure you have the absolute best tools necessary to
                thrive in this new frontier.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                align="justify"
                paragraph
              >
                We see a future where every individual has personalized software
                custom tailored to their lifestyle, culture, and interests,
                helping them overcome life’s obstacles. Each project is a step
                towards that goal.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        className={`${classes.marginContainer} ${classes.marginTop}`}
      >
        <Grid item container md={6}>
          <Grid item>
            <Typography variant="h4" color="primary" gutterBottom>
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              In 2013, Facebook invented a new way of building websites. This
              new system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! This was a huge leap forward.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              This technology is now being used by companies like AirBnB,
              Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it were even
              rebuilt using React.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              Developers have since built on top of these systems by automating
              project setup and deployment, allowing creators to focus as much
              as possible on their work itself.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              align="justify"
              paragraph
            >
              This puts personalization in your pocket — faster, better, and
              more affordable than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={4} xs={6} className={matches ? null : classes.right}>
          <div ref={animationContainer} />
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid
        item
        container
        justifyContent="center"
        className={classes.marginContainer}
      >
        <Grid item>
          <Typography variant="h3" color="primary">
            Process
          </Typography>
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid
        item
        container
        className={` ${classes.marginTop} ${classes.consultation}`}
      >
        <Grid item container className={classes.itemContainer} md={4}>
          <Grid item container>
            <Grid item>
              <Typography variant="h6" gutterBottom>
                Consultation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Our process begins the moment you realize you need a piece of
                technology for your business. Whether you already have an idea
                for where to start and what to do, or if you just know you want
                to step things up, our initial consultation will help you
                examine your business holistically to find the best solutions.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Detailed notes will be taken on your requirements and
                constraints, while taking care to identify other potential areas
                for consideration.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Cutting-edge advancements in machine learning like object
                detection and natural language processing allow computers to do
                things previously unimaginable, and our expertise and intuition
                will help usher you into this new future of possibilities.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} className={classes.imgContainer}>
          <img src={consultation} alt="consultation" className={classes.img} />
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid item container className={`${classes.mockup}`}>
        <Grid item container className={classes.itemContainer} md={4}>
          <Grid item container>
            <Grid item>
              <Typography variant="h6" gutterBottom>
                Mockup
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                After we settle on the best path forward and decide on a
                solution to pursue, details like the cost and timeline will be
                finalized.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Then it’s time for us to start on your minimum viable product.
                That’s just a fancy term for a mockup, which doesn’t include
                colors, images, or any other polished design elements, but
                captures the essential layout structure and functionality.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                This helps us understand and refine the solution itself before
                getting distracted by specifics and looks.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} className={classes.imgContainer}>
          <img src={mockup} alt="mockup" className={classes.img} />
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid item container className={`${classes.review}`}>
        <Grid item container className={classes.itemContainer} md={4}>
          <Grid item container>
            <Grid item>
              <Typography variant="h6" gutterBottom>
                Review
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Before moving any farther we come back to you with our progress.
                This gives you the freedom to discuss any changes you may want
                or any ideas you may have come up with before any heavy lifting
                has been done.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                We give you an interactive demonstration of the mockups,
                thoroughly explaining the thought process that went into each
                screen and every anticipated feature.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Once you’re completely satisfied with the vision for our
                solution we get down to the nitty gritty, fine-details of
                design.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} className={classes.imgContainer}>
          <img src={review} alt="review" className={classes.secondImg} />
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid item container className={`${classes.design}`}>
        <Grid item container className={classes.itemContainer} md={4}>
          <Grid item container>
            <Grid item>
              <Typography variant="h6" gutterBottom>
                Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Using the mockups and notes taken during the consultation as
                guides, we will start ironing out what the final product will
                look like. This also involves using any brand material like
                fonts, colors, and logos to extend the experience you’re already
                familiar with.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                No aspect is superfluous, and care will be taken with every
                decision.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} className={classes.imgContainer}>
          <img src={design} alt="design" className={classes.img} />
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid item container className={`${classes.review}`}>
        <Grid item container className={classes.itemContainer} md={4}>
          <Grid item container>
            <Grid item>
              <Typography variant="h6" gutterBottom>
                Review
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                A second round of review is essential to our goal of creating
                exactly what you want, exactly how you want it.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                This time we’ll be going over the finalized designs in another
                fully interactive demonstration. Again this gives you an
                opportunity to tweak things and make sure we get everything
                right the first time.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} className={classes.imgContainer}>
          <img src={review} alt="review" className={classes.secondImg} />
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid
        item
        container
        className={classes.build}
        style={{ height: "120vh" }}
      >
        <Grid item container className={classes.itemContainer} md={4}>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h6" gutterBottom>
                Build
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Here’s where we get down to business.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Engineering begins after your approval on the final designs. We
                start by scaffolding out the project on a high level,
                prioritizing some areas over others.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Each area is then developed in order of importance until ready
                to be connected to the next piece.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Typically the backend, behind the scenes operations are
                completed first. Once all the services are in place we can then
                create the front end, user side of things.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Finishing the application doesn’t mean we’re done though,
                because we use extensive testing to guarantee compatibility with
                all intended devices.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Only after our rigorous examinations will we accept a product as
                finished, then pushing it through the production pipeline. This
                produces an optimized, compressed, consumer version of the code
                and assets ready for deployment.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} className={classes.imgContainer}>
          <img src={build} alt="build" className={classes.img} />
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid
        item
        container
        className={classes.launch}
        style={{ height: "120vh" }}
      >
        <Grid item container className={classes.itemContainer} md={4}>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h6" gutterBottom>
                Launch
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                The moment we’ve all been waiting for.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                When construction comes to a close you’re the first one to know.
                We’ll give our final demonstration to show off your shiny new
                software in the wild so you know exactly how it will look to
                your users.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                When you say the word, we press the button and launch your
                project out to the public. We’re there to ensure everything goes
                to plan so you can start reaping the rewards of your
                technological investment immediately.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} className={classes.imgContainer}>
          <img src={launch} alt="launch" className={classes.launchImg} />
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid
        item
        container
        className={classes.maintainIcon}
        style={{ height: "120vh" }}
      >
        <Grid item container className={classes.itemContainer} md={4}>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h6" gutterBottom>
                Maintain
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Our work doesn’t end there.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                After a successful launch we keep in close contact to listen to
                feedback and hear how the project is being received.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                From there on out we make sure your application is kept up to
                date and taking advantage of the best features and practices
                available. When new developments arise or new techniques are
                discovered in future projects, we will implement those
                advancements in your project as part of our routine maintenance.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} className={classes.imgContainer}>
          <img
            src={maintainIcon}
            alt="maintainIcon"
            className={classes.secondImg}
          />
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Grid item container className={classes.iterateIcon}>
        <Grid item container className={classes.itemContainer} md={4}>
          <Grid item container direction="column">
            <Grid item>
              <Typography variant="h6" gutterBottom>
                Iterate
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                The cycle repeats whenever you come up with a new idea for
                extending your current project, or come up with a brand new
                system entirely.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                By planning for future features and changes we can build and
                evolve your application over time. As new use cases and customer
                needs develop we can respond with continuous integration of new
                content.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                align="justify"
                className={classes.colorWhite}
                paragraph
              >
                Our iterative process will keep you current and competitive,
                allowing you to quickly implement changes instead of waiting
                months for a single update.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} className={classes.imgContainer}>
          <img src={iterateIcon} alt="iterateIcon" className={classes.img} />
        </Grid>
      </Grid>
      {/******************************************** section ********************************************/}
      <Estimate setValue={props.setValue} setMenuIndex={props.setMenuIndex} />
    </Grid>
  );
};

export default Revolution;
