import { useQuery } from "@tanstack/react-query";
import apiClient, { type FetchResponse } from "../services/apiClient";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenres = () => {
  const fetchGenres = () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data)

  return useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: {count: genres.length, results: genres}
  })
}

export default useGenres;
