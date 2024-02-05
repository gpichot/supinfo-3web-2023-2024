import { MovieDetails } from "../types";
import styles from "./MovieCard.module.css";

interface MovieCardProps {
  movie: MovieDetails;
}

export function MovieCard(props: MovieCardProps) {
  const { movie } = props;
  return (
    <div className={styles.movieCard}>
      <p>{movie.title}</p>
      <p>{movie.description}</p>
      <p>Casting : {movie.casting}</p>
    </div>
  );
}
