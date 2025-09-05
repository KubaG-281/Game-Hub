import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/apiClient';
import type { Game } from './useGames';

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) => 
    useQuery({
      queryKey: ["games", slug],
      queryFn: () => apiClient.getGameDetails(slug),
  });

  


export default useGame