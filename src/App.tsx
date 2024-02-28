import React, { useEffect, useState } from "react";
import { HStack, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./Hooks/useGenre";
import Order from "./components/Order";

import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/useData";

import "./App.css";
export interface GameQuery {
  genre: Genre;
  platform: Platform;
  search: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="5" pr="5" area="nav">
        <NavBar
          onSearch={(search: string) => setGameQuery({ ...gameQuery, search })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area="aside" paddingX={5}>
          <GenreList
            selectGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>

      <GridItem pl="2" area="main">
        <HStack spacing={5} paddingLeft={10}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <Order />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
