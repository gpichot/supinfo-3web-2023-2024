import React from "react";
import { Movie } from "../types";
import styles from "./MovieCard.module.css";
import { Link } from "react-router-dom";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard(props: MovieCardProps) {
  const { movie } = props;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const [likes, setLikes] = React.useState(0);

  const handleClickLike: React.MouseEventHandler<HTMLElement> = (event) => {
    event.stopPropagation();
    setLikes(likes + 1);
  };

  return (
    <div className={styles.movieCard}>
      <img src={imgUrl} height={300} width={200} />
      <div>
        <button type="button" onClick={handleClickLike}>
          {likes}
        </button>
      </div>
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
      <Link to={`/movie/${movie.id}`}>Voir détail</Link>
    </div>
  );
}
