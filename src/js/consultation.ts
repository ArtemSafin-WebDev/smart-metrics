import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";
import Validator from "./classes/Validator";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

export default function consulation() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".consultation")
  );
  elements.forEach((element) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: ANIMATION_START,
      },
    });
    tl.fromTo(
      element,
      {
        autoAlpha: 0,
        y: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: "power1.out",
      }
    );

    const form = element.querySelector<HTMLFormElement>("form");
    if (!form) return;
    const controller = new AbortController();

    const validator = new Validator(form);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      validator.validate();
      if (!validator.valid) return;
      const formData = new FormData(form);

      axios
        .post(form.action, formData, {
          signal: controller.signal,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "mail_sent") {
            console.log("Successs");
            form.classList.add("submitted");

            setTimeout(() => {
              form.classList.remove("submitted");
            }, 1000);
          } else {
            throw new Error("Mail has not been sent");
          }
        })
        .catch(() => {
          console.log("Errorrr");
        })
        .finally(() => {
          form.reset();
        });
    });
  });
}
