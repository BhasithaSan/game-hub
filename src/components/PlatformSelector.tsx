import { Button, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../Hooks/usePlatform";
import { Platform } from "../Hooks/useData";
//import { Platform } from "../Hooks/useGames";

interface prop {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: prop) => {
  const { Data,err } = usePlatform();
  if (err){
    return null;
  }
  const { colorMode } = useColorMode();
  
  const color = { light: "gray.800", dark: "white" };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />} color={color[colorMode]}>
        {selectedPlatform ? selectedPlatform?.name : "Platform"}
      </MenuButton>
      <MenuList color={color[colorMode]}>
        {Data?.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
            color={"white"}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
