import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import { type Genre } from "./useGenres";
import type { Platform } from "./usePlatforms";
import apiClient, { type FetchResponse } from "../services/apiClient";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
} 

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () => 
    apiClient.get<FetchResponse<Game>>('/games', {params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.text,
      },}).then(res => res.data)
  

  return useQuery({
    queryKey: ['games', gameQuery],
    queryFn: fetchGames,
    staleTime: 5 * 1000,
  })
}


export default useGames;
