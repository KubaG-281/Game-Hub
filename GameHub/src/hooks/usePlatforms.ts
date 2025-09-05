import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/apiClient";
import type  Platform  from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')


export const usePlatforms = () => {


  const fetchPlatforms = () => apiClient.getAll()
  return useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: ms('1d'),
    initialData: platforms
  })
}