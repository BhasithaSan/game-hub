import  {  useState } from "react";
import { Box, Flex,  Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { GameGrid } from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./Hooks/useGenre";


import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/useData";

import "./App.css";
import GameHead from "./components/GameHead";
import SortSelector from "./components/SortSelector";
export interface GameQuery {
  genre: Genre |null ;
  platform: Platform | null;
  search: string | null;
  sortOrder:string

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

      
      <Box  paddingLeft={5}>
          <GameHead gameQuery={gameQuery} />
          <Flex marginTop={2} >
              <Box marginRight={5}>
                  <PlatformSelector
                    onSelectPlatform={(platform) =>
                      setGameQuery({ ...gameQuery, platform })
                    }
                    selectedPlatform={gameQuery.platform}
                  />
              </Box>
              
              <SortSelector onSelectSortOrder={(sortOrder)=>setGameQuery({...gameQuery,sortOrder})} selectedItem={gameQuery.sortOrder}/>
            </Flex>

      </Box>
        
       
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
