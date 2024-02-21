import React from "react";
import { game } from "../Hooks/useGames";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
} from "@chakra-ui/react";

interface props {
  oneGame: game;
}

const GameCard = ({ oneGame }: props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={oneGame.background_image}></Image>
        <CardBody>
          <Heading fontSize={"1xl"}>{oneGame.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
