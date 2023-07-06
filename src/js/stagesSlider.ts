import Swiper from "swiper";
import "swiper/css";
import { SwiperOptions } from "swiper/types";

export default function stagesSlider() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".js-stages-slider")
  );

  elements.forEach((element) => {
    const container = element.querySelector<HTMLElement>(".swiper");

    const options: SwiperOptions = {
      slidesPerView: "auto",
      speed: 600,
    };

    new Swiper(container, options);
  });
}
