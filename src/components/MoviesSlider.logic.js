import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";

export const useMoviesSlider = () => {
  const [movies, setMovies] = useState([]);
  const [slides, setSlides] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      const data = await response.json();
      const movies = data.results;
      setMovies(movies);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {

    if (movies.length > 0) {
      const slidesToDisplay = movies.map((movie) => (
        <SwiperSlide key={movie.episode_id}>
          <MovieCard
            id={movie.episode_id}
            title={movie.title}
            description={movie.opening_crawl}
          />
        </SwiperSlide>
      ));
      setSlides(slidesToDisplay);
    }
  }, [movies]);

  return {
    movies,
    slides,
    setSlides,
    setMovies,
  };
};
