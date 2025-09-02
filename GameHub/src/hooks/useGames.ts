import { useInfiniteQuery } from "@tanstack/react-query";
import type { GameQuery } from "../App";
import { type Genre } from "./useGenres";
import type { Platform } from "./usePlatforms";
import APIClient from "../services/apiClient";
import ms from "ms";

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
  const fetchGames = ({pageParam = 1}) => 
    apiClient.getAll({params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.text,
        page: pageParam
      },})
  
  

  return useInfiniteQuery({
    queryKey: ['games', gameQuery],
    queryFn: fetchGames,
    staleTime: ms('1d'),
    getNextPageParam: (lastPage, allPages) => {
     return lastPage.next ?  allPages.length + 1: undefined;
    },
    initialPageParam: 1
  })
}


export default useGames;
