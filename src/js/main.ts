import "virtual:svg-icons-register";
import "../scss/style.scss";
import stagesSlider from "./stagesSlider";
import fixedHeader from "./fixedHeader";
import homeNewsSlider from "./homeNews";
import partnersSlider from "./partnersSlider";
import menu from "./menu";
import fancybox from "./fancybox";
import tabs from "./tabs";
import forms from "./forms";
import intro from "./intro";
import solutions from "./solutions";
import security from "./security";
import advantages from "./advantages";
import about from "./about";
import tasks from "./tasks";
import integration from "./intergration";
import numbers from "./numbers";
import partners from "./partners";
import awards from "./awards";
import news from "./news";
import contactUs from "./contactUs";
import solutionsArchive from "./solutionsArchive";
import tariffsPage from "./tariffsPage";
import documentation from "./documentation";
import newsArchive from "./newsArchive";
import cases from "./cases";
import contacts from "./contacts";
import modal from "./modal";
import accordions from "./accordions";
import gallery from "./gallery";
import demo from "./demo";
import otherCases from "./other-cases";
import solutionHeader from "./solution-header";
import abilities from "./abilities";
import dates from "./dates";
import faq from "./faq";
import consulation from "./consultation";
import ourTeam from "./ourTeam";
import certificates from "./certificates";
import aboutHeader from "./about-header";
import aboutCompany from "./about-company";
import history from "./history";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello world");
  fixedHeader();
  stagesSlider();
  homeNewsSlider();
  partnersSlider();
  menu();
  fancybox();
  tabs();
  forms();
  intro();
  solutions();
  security();
  advantages();
  about();
  tasks();
  integration();
  numbers();
  partners();
  awards();
  news();
  solutionsArchive();
  tariffsPage();
  documentation();
  newsArchive();
  cases();
  contacts();
  modal();
  accordions();
  gallery();
  demo();
  otherCases();
  solutionHeader();
  abilities();
  dates();
  faq();
  consulation();
  ourTeam();
  certificates();
  aboutHeader();
  aboutCompany();
  history();
  contactUs();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");

  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 500);
});

//@ts-ignore
window.refresh = () => {
  ScrollTrigger.refresh();
};
