import { Platform, useData } from "./useData";
import { Genre } from "./useGenre";

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
interface prop {
  selectedGenre?: Genre | null;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const { Data, err, isLoading } = useData<game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

  return { Data, err, isLoading };
};

export default useGames;
