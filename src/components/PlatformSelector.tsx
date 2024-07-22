import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
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

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />} >
        {selectedPlatform ? selectedPlatform?.name : "Platform"}
      </MenuButton>
      <MenuList >
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
