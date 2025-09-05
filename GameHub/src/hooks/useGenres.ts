import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/apiClient";
import ms from 'ms';
import type { Genre } from "../entities/Genre";


const apiClient = new APIClient<Genre>('/genres')

const useGenres = () => {
  const fetchGenres = () => apiClient.getAll()

  return useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: ms('1d'), 
    initialData: genres
  })
}

export default useGenres;
