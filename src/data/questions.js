import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import iphone from "../assets/iphone.svg";
import android from "../assets/android.svg";
import camera from "../assets/camera.svg";
import gps from "../assets/gps.svg";
import upload from "../assets/upload.svg";
import users from "../assets/users.svg";
import biometrics from "../assets/biometrics.svg";
import bell from "../assets/bell.svg";
import info from "../assets/info.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import globe from "../assets/globe.svg";

const questions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    subtitle: "Select one",
    options: [
      {
        id: 1,
        title: "Custom Software",
        icon: software,
        iconAlt: "software",
        cost: 100,
        select: false,
      },
      {
        id: 2,
        title: "iOS/Android",
        icon: mobile,
        iconAlt: "mobile",
        cost: 100,
        select: false,
      },
      {
        id: 3,
        title: "Website",
        icon: website,
        iconAlt: "Website",
        cost: 100,
        select: false,
      },
    ],
    multiple: false,
  },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        icon: website,
        iconAlt: "computer outline",
        cost: 100,
        select: false,
      },
      {
        id: 2,
        title: "iOS Application",
        icon: iphone,
        iconAlt: "outline of iphone",
        cost: 100,
        select: false,
      },
      {
        id: 3,
        title: "Android Application",
        icon: android,
        iconAlt: "outlines of android phone",
        cost: 100,
        select: false,
      },
    ],
    multiple: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        icon: camera,
        iconAlt: "camera outline",
        cost: 25,
        select: false,
      },
      {
        id: 2,
        title: "GPS",
        icon: gps,
        iconAlt: "gps pin",
        cost: 25,
        select: false,
      },
      {
        id: 3,
        title: "File Transfer",
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        cost: 25,
        select: false,
      },
    ],
    multiple: true,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        cost: 25,
        select: false,
      },
      {
        id: 2,
        title: "Biometrics",
        icon: biometrics,
        iconAlt: "fingerprint",
        cost: 25,
        select: false,
      },
      {
        id: 3,
        title: "Push Notifications",
        icon: bell,
        iconAlt: "outline of a bell",
        cost: 25,
        select: false,
      },
    ],
    multiple: true,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        icon: info,
        iconAlt: "'i' inside a circle",
        cost: 25,
        select: false,
      },
      {
        id: 2,
        title: "Medium Complexity",
        icon: customized,
        iconAlt: "two toggle switches",
        cost: 50,
        select: false,
      },
      {
        id: 3,
        title: "High Complexity",
        icon: data,
        iconAlt: "outline of line graph",
        cost: 100,
        select: false,
      },
    ],
    multiple: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        icon: person,
        iconAlt: "person outline",
        cost: 1,
        select: false,
      },
      {
        id: 2,
        title: "10-100",
        icon: persons,
        iconAlt: "outline of two people",
        cost: 1.25,
        select: false,
      },
      {
        id: 3,
        title: "100+",
        icon: people,
        iconAlt: "outline of three people",
        cost: 1.5,
        select: false,
      },
    ],
    multiple: false,
  },
  {
    id: 7,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        icon: info,
        iconAlt: "person outline",
        cost: 100,
        select: false,
      },
      {
        id: 2,
        title: "Interactive",
        icon: customized,
        iconAlt: "outline of two people",
        cost: 200,
        select: false,
      },
      {
        id: 3,
        title: "E-Commerce",
        icon: globe,
        iconAlt: "outline of three people",
        cost: 250,
        select: false,
      },
    ],
    multiple: false,
  },
];
export default questions;
