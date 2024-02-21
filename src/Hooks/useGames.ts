import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface platform {
  [x: string]: any;
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
          console.log("cancelled");
        } else {
          console.log("error:", error.message);
          setErr(error.message);
        }
      });

    return () => abortController.abort();
  }, []);
  return { Games, err };
};
