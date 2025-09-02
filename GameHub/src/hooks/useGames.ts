import { useQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import { type Genre } from "./useGenres";
import type { Platform } from "./usePlatforms";
import APIClient from "../services/apiClient";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
} 

const apiClient = new APIClient<Game>('/games')

const useGames = (gameQuery: GameQuery) => {
  const fetchGames = () => 
    apiClient.getAll({params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.text,
      },})
  
  

  return useQuery({
    queryKey: ['games', gameQuery],
    queryFn: fetchGames,
    staleTime: 5 * 1000,
  })
}


export default useGames;
