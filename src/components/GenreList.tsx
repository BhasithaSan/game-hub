import {
  List,
  ListItem,
  Image,
  HStack,
  Text,

  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenre";

import getCroppedUrl from "../services/getCroppedUrl";

interface prop {
  selectGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: prop) => {
  const { Data, isLoading,err } = useGenres();

  if(err) return null;

  if(isLoading) return <Spinner color="white" />


  return (
    <>
        <Heading fontSize="2xl" marginBottom={3} >Genres</Heading>
        
        <List>
          
          
          
          {Data?.map((genre) => (
            <ListItem key={genre.id} paddingY="5px" fontSize="large">
              <HStack>
                <Image
                  src={getCroppedUrl(genre.image_background)}
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                />

                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  // fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                  onClick={() => onSelectGenre(genre)}
                  fontSize="md"
                  variant="link"
                  
                  
                >
                    <Text fontSize="lg">{genre.name}</Text> 
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List>
    </>
  );
};

export default GenreList;
