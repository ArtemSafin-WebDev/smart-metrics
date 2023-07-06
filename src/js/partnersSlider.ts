import Swiper from "swiper";
import "swiper/css";
import { SwiperOptions } from "swiper/types";

export default function partnersSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-partners-slider")
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
        sliderInstance = new Swiper(container, options);
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
