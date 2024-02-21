import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";

//import { fetchedGames, game } from "../Hooks/useGames.ts";
import { useGames, game } from "../Hooks/useGames.ts";
import { Text } from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import { SimpleGrid } from "@chakra-ui/react";

export const GameGrid = () => {
  //const [games, setGames] = useState<game[]>([]);
  const { Games, err } = useGames();

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      gap={6}
      spacing={10}
      padding={10}
    >
      {err && <Text>{err}</Text>}
      {Games.map((game: game) => (
        <GameCard key={game.id} oneGame={game}></GameCard>
      ))}
    </SimpleGrid>
  );
};
