import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface platform {
  // [x: string]: any;
  id: number;
  name: string;
  slug: string;
}

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: platform[];
}

export interface fetchedGames {
  count: number;
  results: game[];
}

export const useGames = () => {
  const [Games, setGames] = useState<game[]>([]);

  const [err, setErr] = useState<string>();

  const [isLoading, setLoading] = useState<boolean>();
  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    apiClient
      .get<fetchedGames>("/games", { signal: abortController.signal })
      .then((response) => {
        setGames(response.data.results);
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
  return { Games, err, isLoading };
};
