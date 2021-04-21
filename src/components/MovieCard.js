import styles from "./MovieCard.style.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useMovieCard } from "./MovieCard.logic";

//should take title and description and use logic to fetch image
const MovieCard = ({ title, description, id }) => {
  const { imgUrl, liked, handleOnLike } = useMovieCard(title, id);

  return (
    <div style={styles.container}>
      <img src={imgUrl} style={styles.img} />
      <div style={styles.textWrapper}>
        <div style={styles.title}>Title: {title}</div>
        <div style={styles.description}>Description: {description}</div>
      </div>

      <FontAwesomeIcon
        style={
          liked ? { ...styles.likeIcon, ...styles.liked } : styles.likeIcon
        }
        icon={faHeart}
        onClick={() => handleOnLike(id)}
      />
    </div>
  );
};

export default MovieCard;
