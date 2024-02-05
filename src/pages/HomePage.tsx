import { MovieCard } from "../components/MovieCard";

const movies = [
  {
    title: "Top Gun",
    description: "Film sur les avions",
    casting: ["Tom Cruise"],
  },
  {
    title: "Top Gun II",
    description: "(encore) un film sur les avions",
    casting: ["Tom Cruise (Toujours)"],
  },
  {
    title: "Top Gun III",
    description: "ENCORE UN Film sur les avions",
    casting: ["Tom Cruise (et oui encore...)"],
  },
];

export function HomePage() {
  return (
    <>
      <h1>CineApp</h1>
      <p>Mon cinéma de campagne</p>
      {movies.map((movie) => (
        <MovieCard key={movie.title} movie={movie} />
      ))}
    </>
  );
}