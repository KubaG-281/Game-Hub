import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import APIClient from "../services/apiClient";

interface GameDetailsResponse {
  name: string;
  description_raw: string;
}

const GameDetailPage = () => {
  const param = useParams();
  const apiClient = new APIClient<GameDetailsResponse>(`/games/${param.slug}`);

  const { data } = useQuery({
    queryKey: ["games", param.slug],
    queryFn: () => apiClient.getGameDetails(),
  });

  return (
    <>
      <h1>{data?.name}</h1>
      <div>{data?.description_raw}</div>
    </>
  );
};

export default GameDetailPage;
