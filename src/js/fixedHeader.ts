import { debounce } from "lodash";

export default function fixedHeader() {
  const checkHeader = () => {
    if (window.scrollY > 0) {
      document.body.classList.add("fixed-header");
    } else {
      document.body.classList.remove("fixed-header");
    }
  };

  checkHeader();
  window.addEventListener("scroll", () => {
    checkHeader();
  });

  window.addEventListener("resize", debounce(checkHeader, 300));
}
