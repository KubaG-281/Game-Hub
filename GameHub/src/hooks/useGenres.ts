import { useState, useEffect } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface FetchGameResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGameResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setIsLoading(false);
        setGenres(res.data.results);
      })
      .catch((e) => {
        setIsLoading(false);
        if (e instanceof CanceledError) return;
        setErrors(e.message);
      });

    return controller.abort();
  }, []);
  return { errors, genres, isLoading };
};

export default useGenres;
