import { Movie } from "../types";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard(props: MovieCardProps) {
  const { movie } = props;
  const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className={styles.movieCard}>
      <img src={imgUrl} height={300} width={200} />
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
    </div>
  );
}
