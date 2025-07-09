
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

  Button,
  useColorModeValue,
 
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import MenuColors from "../Colors/menuColors";

interface props {
  onSelectSortOrder:(sortOrder:string)=>void
  selectedItem:string
}


const SortSelector = ({onSelectSortOrder,selectedItem}:props) => {
  const sortOrder=[
    {value:"",label:"Relevance"},
    {value:"-added",label:"Date added"},
    {value:"name",label:"Name"},
    {value:"-released",label:"Release date"},
    {value:"-metacritic",label:"popularity"},
    {value:"-rating",label:"Average rating"},
    
    

  ]

  const menuBg = useColorModeValue(MenuColors.menuBg.light, MenuColors.menuBg.dark);
  const menuColor = useColorModeValue(MenuColors.menuColor.light, MenuColors.menuColor.dark );
  const hoverBg = useColorModeValue(MenuColors.hoverBg.light, MenuColors.hoverBg.dark);


  const currentSortOrder = sortOrder.find(order => order.value===selectedItem)
 

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        order by : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList >
        {sortOrder.map(order =><MenuItem 
                                  onClick={()=>onSelectSortOrder(order.value)}
                                  key={order.value} 
                                  value={order.value}
                                  bg={menuBg} color={menuColor}
                                  _hover={{ bg: hoverBg }}>
                                    {order.label}
                                 
                                 </MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
