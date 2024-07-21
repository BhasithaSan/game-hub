import { Heading } from "@chakra-ui/react";

import { GameQuery } from "../App";

interface prop {
  gameQuery: GameQuery;
}

const GameHead = ({ gameQuery }: prop) => {
  const head = `${gameQuery.platform?.name || " "} ${
    gameQuery.genre?.name || " "
  } Games`;
  return (
    <Heading as="h1" color="gray.500" fontSize="5xl" >
      {head}
    </Heading>
  );
};

export default GameHead;
