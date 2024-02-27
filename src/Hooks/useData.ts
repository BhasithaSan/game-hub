import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface platform {
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

export interface fetchedData<T> {
  count: number;
  results: T[];
}

export const useData = <T>(endPoint: string) => {
  const [Data, setData] = useState<T[]>();

  const [err, setErr] = useState<string>();

  const [isLoading, setLoading] = useState<boolean>();
  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    apiClient
      .get<fetchedData<T>>(endPoint, { signal: abortController.signal })
      .then((response) => {
        setData(response.data.results);
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
  return { Data, err, isLoading };
};
