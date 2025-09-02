import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/apiClient";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => {
  const fetchGenres = () => apiClient.getAll()

  return useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: genres.length, results: genres}
  })
}

export default useGenres;
