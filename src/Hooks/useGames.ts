import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface game {
  id: number;
  name: string;
}

export interface fetchedGames {
  count: number;
  results: game[];
}

export const useGames = () => {
  const [Games, setGames] = useState<game[]>([]);

  const [err, setErr] = useState<string>();
  useEffect(() => {
    const abortController = new AbortController();

    apiClient
      .get<fetchedGames>("/games", { signal: abortController.signal })
      .then((response) => {
        console.log(response.data);
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          // The request was aborted, no need to handle it as an error
          console.log("cancelled");
          return;
        } else {
          console.error("error ...");
          setErr(error.message);
        }
      });

    return () => abortController.abort();
  }, []);
  return { Games, err };
};
