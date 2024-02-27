import {
  List,
  ListItem,
  Image,
  HStack,
  Text,
  Spacer,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../Hooks/useGenre";

const GenreList = () => {
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

            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
