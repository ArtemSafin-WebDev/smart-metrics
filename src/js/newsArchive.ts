import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_DELAY, ANIMATION_START } from "./constants";
import axios from "axios";

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

  if (sessionStorage.getItem("newsArchiveShown") !== "1") {
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

  sessionStorage.setItem("newsArchiveShown", "1");

  (function () {
    const links = Array.from(
      document.querySelectorAll<HTMLLinkElement>(".news-archive__nav-link")
    );

    const list = document.querySelector<HTMLUListElement>(
      ".news-archive__list"
    );
    const controller = new AbortController();
    const loadMore = document.querySelector<HTMLLinkElement>(
      ".news-archive__load-more"
    );

    let pageNumber: number = 1;

    async function loadData(url: string, replace: boolean = false) {
      let params: {
        page_number: number | string;
        article?: number | string;
      } = {
        page_number: pageNumber,
      };

      if (url.includes("?article")) {
        params = {
          ...params,
          article: 1,
        };
      }
      try {
        const response = await axios.get(url, {
          signal: controller.signal,
          params: params,
        });

        console.log("Page number", pageNumber);

        const data = response.data;

        const parser = new DOMParser();
        const nextPageHtml = parser.parseFromString(data, "text/html");
        const nextResults = Array.from(
          nextPageHtml.querySelectorAll<HTMLLIElement>(
            ".news-archive__list-item"
          )
        );
        const nextLoadBtn = nextPageHtml.querySelector<HTMLLinkElement>(
          ".news-archive__load-more:not(.hidden)"
        );

        if (loadMore) {
          if (!nextLoadBtn) {
            loadMore.classList.add("hidden");
          } else {
            loadMore.classList.remove("hidden");
          }
        }

        if (!list) return;
        const currentListItems = list?.querySelectorAll<HTMLLIElement>(
          ".news-archive__list-item"
        );

        window.history.replaceState({}, "", url);

        const tl = gsap.timeline();

        if (replace) {
          tl.to(Array.from(currentListItems), {
            autoAlpha: 0,
            duration: 0.2,
          });
        }

        tl.add(() => {
          if (replace) {
            list.innerHTML = "";
          }

          list.append(...nextResults);
        })
          .fromTo(
            nextResults,
            {
              autoAlpha: 0,
              y: 30,
            },
            {
              autoAlpha: 1,
              duration: 0.4,
              y: 0,
              ease: "power1.out",
            }
          )
          .add(() => {
            ScrollTrigger.refresh();
          });
      } catch (err) {
        console.error(err);
        return;
      }
    }

    links.forEach((link) =>
      link.addEventListener("click", async (event) => {
        event.preventDefault();
        const href = link.href;
        pageNumber = 1;
        loadData(href, true)
          .then(() => {
            links.forEach((link) => link.classList.remove("active"));
            link.classList.add("active");
          })
          .catch((err) => console.error(err));
      })
    );

    if (loadMore) {
      loadMore.addEventListener("click", (event) => {
        event.preventDefault();
        const pathname = window.location.pathname + window.location.search;
        pageNumber++;
        loadData(pathname, false);
      });
    }
  })();
}
