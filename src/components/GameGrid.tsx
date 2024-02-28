import useGames, { game } from "../Hooks/useGames.ts";
import { Text } from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import { Platform, useData } from "../Hooks/useData.ts";
import { Genre } from "../Hooks/useGenre.ts";

interface GameGridProps {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

export const GameGrid = ({
  selectedGenre,
  selectedPlatform,
}: GameGridProps) => {
  //const [games, setGames] = useState<game[]>([]);

  const { Data, err, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletonArray = [];
  if (isLoading) {
    for (let i = 0; i < 10; i++) {
      skeletonArray.push(<GameCardSkeleton key={i} />);
    }
  }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      gap={6}
      spacing={10}
      padding={10}
    >
      {err && <Text>{err}</Text>}
      {isLoading && skeletonArray}
      {Data?.map((game: game) => (
        <GameCard key={game.id} oneGame={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};
