import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { game, fetchedGames } from "./useGames";

interface Genre {
  id: number;
  name: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const [err, setErr] = useState<string>();

  const [isLoading, setLoading] = useState<boolean>();
  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", { signal: abortController.signal })
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.name === "AbortError") {
          console.log("cancelled");
        } else {
          console.log("error:", error.message);
          setErr(error.message);
        }
      });

    return () => abortController.abort();
  }, []);
  return { genres, err, isLoading };
};
export default useGenres;
