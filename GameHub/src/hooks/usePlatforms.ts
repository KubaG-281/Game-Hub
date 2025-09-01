import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, {type FetchResponse} from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () => {
  const fetchPlatforms = () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data)
  return useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: platforms.length, results: platforms}
  })
}