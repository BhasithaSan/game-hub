import { Heading,Text } from "@chakra-ui/react";

import { GameQuery } from "../App";

interface prop {
  gameQuery: GameQuery;
}

const GameHead = ({ gameQuery }: prop) => {
  const head = `${gameQuery.platform?.name || " "} ${
    gameQuery.genre?.name || " "
  } Games`;
  return (
    <Heading as="h1"  fontSize="5xl" >
      <Text>{head}</Text>
    </Heading>
  );
};

export default GameHead;
