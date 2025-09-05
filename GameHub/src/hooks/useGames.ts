import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services/apiClient";
import useGameQueryStore from "../store";
import type { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games')

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)

  const fetchGames = ({pageParam = 1}) => 
    apiClient.getAll({params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
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
