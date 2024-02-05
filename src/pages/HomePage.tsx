import { useTrendingMoviesQuery } from "../api-hooks/movies";
import { MovieCard } from "../components/MovieCard";

export function HomePage() {
  const trendingMoviesQuery = useTrendingMoviesQuery({ lang: "fr-FR" });

  if (trendingMoviesQuery.isLoading) {
    return <p>Chargement en cours</p>;
  }

  const { data: movies } = trendingMoviesQuery;
  if (trendingMoviesQuery.isError || !movies) {
    return (
      <div>
        <p>Erreur au chargement</p>
        <button type="button" onClick={() => trendingMoviesQuery.refetch()}>
          Recharger
        </button>
      </div>
    );
  }

  return (
    <>
      <h1>CineApp</h1>
      <p>Mon cinéma de campagne</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 10,
        }}
      >
        {movies.results.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </>
  );
}
