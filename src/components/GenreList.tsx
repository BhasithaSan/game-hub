import {
  List,
  ListItem,
  Image,
  HStack,
  Text,
  Spacer,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenre";

interface prop {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: prop) => {
  const { Data, isLoading } = useGenres();
  return (
    <List>
      {isLoading && <Spinner marginTop={"90px"} marginLeft={"50px"} />}
      {Data?.map((genre) => (
        <ListItem key={genre.id} paddingY="3px" fontSize="large">
          <HStack>
            <Image
              src={genre.image_background}
              boxSize="32px"
              borderRadius={8}
            />

            <Button
              whiteSpace="normal"
              textAlign="left"
              // fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="md"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
