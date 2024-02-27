import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { game, fetchedGames } from "./useGames";
import { useData } from "./useData";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const { Data, err, isLoading } = useData<Genre>("/genres");

  return { Data, err, isLoading };
};
export default useGenres;
