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
  contactUs();
  solutionsArchive();
  tariffsPage();
  documentation();
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});