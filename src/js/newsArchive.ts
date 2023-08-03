import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_DELAY, ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function newsArchive() {
  const newsArchive = document.querySelector(".news-archive");
  if (!newsArchive) return;

  const heading = newsArchive.querySelector(".news-archive__heading");
  const links = newsArchive.querySelector(".news-archive__links-list");
  const nav = newsArchive.querySelector(".news-archive__nav");
  const listItems = Array.from(
    newsArchive.querySelectorAll(".news-archive__list-item")
  );
  const btn = newsArchive.querySelector(".news-archive__load-more");
  const tl = gsap.timeline({
    delay: ANIMATION_DELAY,
    scrollTrigger: {
      trigger: newsArchive,
      start: ANIMATION_START,
    },
  });

  tl.fromTo(
    heading,
    {
      autoAlpha: 0,
      y: 60,
    },
    { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" }
  )
    .fromTo(
      links,
      {
        autoAlpha: 0,
        y: 60,
      },
      { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
      "<+=0.5"
    )
    .fromTo(
      nav,
      {
        autoAlpha: 0,
        y: 60,
      },
      { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
      "<+=0.5"
    )
    .fromTo(
      listItems,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.2,
        y: 0,
        ease: "power1.out",
      },
      ">-=0.5"
    )
    .fromTo(
      btn,
      {
        autoAlpha: 0,
        y: 60,
      },
      { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
      ">-=0.5"
    );
}
