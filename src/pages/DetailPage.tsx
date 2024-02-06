import { useParams } from "react-router-dom";
import { useDetailMovieQuery } from "../api-hooks/movies";
import CommentForm from "../components/CommentForm";

export default function DetailPage() {
  const { id } = useParams();

  const movieQuery = useDetailMovieQuery(Number(id));

  if (movieQuery.isLoading) {
    return <p>Loading...</p>;
  }

  const movie = movieQuery.data;
  if (movieQuery.isError || !movie) {
    return <p>Erreur lors du chargement</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        height={200}
      />
      <CommentForm />
    </div>
  );
}
