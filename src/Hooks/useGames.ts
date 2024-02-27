import { useData } from "./useData";

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

const useGames = () => {
  const { Data, err, isLoading } = useData<game>("/games");

  return { Data, err, isLoading };
};

export default useGames;
