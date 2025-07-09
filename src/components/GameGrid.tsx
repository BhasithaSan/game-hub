import useGames, { game } from "../Hooks/useGames.ts";
import {  Heading,Flex } from "@chakra-ui/react";
import GameCard from "./GameCard.tsx";
import { SimpleGrid } from "@chakra-ui/react";
import GameCardSkeleton from "./GameCardSkeleton.tsx";

import { GameQuery } from "../App.tsx";
import GameCardContainer from "./GameCardContainer.tsx";

interface GameGridProps {
  gameQuery: GameQuery;
}

export const GameGrid = ({ gameQuery }: GameGridProps) => {
  //const [games, setGames] = useState<game[]>([]);

  const { Data, err, isLoading } = useGames(gameQuery);

  console.log("Data", Data);
  console.log("err", err);
  const skeletonArray = [];
  if (isLoading) {
    for (let i = 0; i < 10; i++) {
      skeletonArray.push(i);
    }
  }
  if(err){
    return(  
     <Flex justify="center" align="center" h="80vh">
        <Heading>Error Occured while fetching</Heading>
      </Flex>
    )
  }
if(Data?.length  === 0 && !isLoading){
     return (
      <Flex justify="center" align="center" h="80vh">
        <Heading>No Games Available...</Heading>
      </Flex>
     );
    }

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      gap={6}
      spacing={10}
      padding={10}
      
    >
  
      {isLoading && skeletonArray.map((skeleton)=> (
        <GameCardContainer key={skeleton}> 
            <GameCardSkeleton />
        </GameCardContainer>)
      )}
      {Data?.map((game: game) => (
        <GameCardContainer key={game.id}>
          <GameCard  oneGame={game}></GameCard>
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};
