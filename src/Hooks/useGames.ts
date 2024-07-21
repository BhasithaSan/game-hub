import { GameQuery } from "../App";
import {  useData } from "./useData";


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
  metacritic:number;
  raring_top:number;
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
        ordering:gameQuery.sortOrder
      },
    },
    [gameQuery]
  );

  return { Data, err, isLoading };
};

export default useGames;
