import Swiper from "swiper";
import "swiper/css";
import { SwiperOptions } from "swiper/types";

export default function homeNewsSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-home-news-slider")
  );

  const mql = window.matchMedia("(max-width: 640px)");

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");
    let sliderInstance: Swiper | null = null;
    const options: SwiperOptions = {
      slidesPerView: "auto",
      speed: 600,
    };

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        if (container) {
          sliderInstance = new Swiper(container, options);
        }
      } else {
        if (sliderInstance) {
          sliderInstance.destroy();
          sliderInstance = null;
        }
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
