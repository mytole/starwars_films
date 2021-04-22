import { Swiper } from "swiper/react";
import "swiper/swiper.scss";
import { useMoviesSlider } from "./MoviesSlider.logic";

const MoviesSlider = () => {
  const { slides } = useMoviesSlider();

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={
        window.innerWidth < 400 ? 1.5 : window.innerWidth < 1080 ? 3 : 5
      }

    >
      {slides}
    </Swiper>
  );
};

export default MoviesSlider;
