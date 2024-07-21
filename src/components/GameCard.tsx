
import { game } from "../Hooks/useGames";
import PlatFormIcon from "./PlatFormIcon";

import { Card, CardBody, Image, Heading, HStack } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import getCroppedUrl from "../services/getCroppedUrl";


interface props {
  oneGame: game;
}

const GameCard = ({ oneGame }: props) => {
  
  return (
    <>
      <Card >
        <Image src={getCroppedUrl(oneGame.background_image)}></Image>
        <CardBody>
          
          
          <HStack justifyContent={"space-between"}paddingY={4}>
              <PlatFormIcon platforms={oneGame.parent_platforms}></PlatFormIcon>
              <CriticScore criticScore={oneGame.metacritic}/>
          </HStack>

          <Heading fontSize={"2xl"}>{oneGame.name}</Heading>
          
         
          
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
