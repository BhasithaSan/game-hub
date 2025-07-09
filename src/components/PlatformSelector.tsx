import { Button, Menu, MenuButton, MenuItem, MenuList, useColorModeValue } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import usePlatform from "../Hooks/usePlatform";
import { Platform } from "../Hooks/useData";
import MenuColors from "../Colors/menuColors";



interface prop {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: prop) => {
  const { Data,err } = usePlatform();
  if (err){
    return null;
  }

  const menuBg = useColorModeValue(MenuColors.menuBg.light, MenuColors.menuBg.dark);
  const menuColor = useColorModeValue(MenuColors.menuColor.light, MenuColors.menuColor.dark );
  const hoverBg = useColorModeValue(MenuColors.hoverBg.light, MenuColors.hoverBg.dark);

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
           bg={menuBg} color={menuColor}
            _hover={{ bg: hoverBg }}
          >
            
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
