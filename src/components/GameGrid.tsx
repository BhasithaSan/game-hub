import { useEffect, useState } from "react";
import apiClient from "../services/api-client.ts";
import { useEditable } from "@chakra-ui/react";
import { formToJSON } from "axios";
//import { fetchedGames, game } from "../Hooks/useGames.ts";
import { useGames, game } from "../Hooks/useGames.ts";
import { Text } from "@chakra-ui/react";

export const GameGrid = () => {
  //const [games, setGames] = useState<game[]>([]);
  const { Games, err } = useGames();

  return (
    <div>
      {err && <Text>{err}</Text>}
      {Games.map((game: game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </div>
  );
};
