import { useQuery } from "@tanstack/react-query";
import { TrendingApiResponse } from "../types";

const baseUrl = "https://api.themoviedb.org/3";

const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export function useTrendingMoviesQuery({ lang }: { lang: "fr-FR" | "en-US" }) {
  return useQuery({
    queryKey: ["trending-movies", { lang }],
    queryFn: async () => {
      const response = await fetch(
        `${baseUrl}/trending/movie/day?language=${lang}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const movies = await response.json();
      return movies as TrendingApiResponse;
    },
  });
}
