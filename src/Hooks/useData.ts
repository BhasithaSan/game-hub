import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: Platform[];
}

export interface fetchedData<T> {
  count: number;
  results: T[];
}

export const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [Data, setData] = useState<T[]>();

  const [err, setErr] = useState<string>();

  const [isLoading, setLoading] = useState<boolean>();
  useEffect(
    () => {
      const abortController = new AbortController();
      setLoading(true);
      apiClient
        .get<fetchedData<T>>(endPoint, {
          signal: abortController.signal,
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          console.log(response.data.results);
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
    },
    deps ? [...deps] : []
  );
  return { Data, err, isLoading };
};
