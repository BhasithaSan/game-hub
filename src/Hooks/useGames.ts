import { GameQuery } from "../App";
import { Platform, useData } from "./useData";
import { Genre } from "./useGenre";

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
// interface prop {
//   gameQuery: GameQuery;
// }

const useGames = (gameQuery: GameQuery) => {
  const { Data, err, isLoading } = useData<game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

  return { Data, err, isLoading };
};

export default useGames;
