
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

  Button,
  useColorMode,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

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

  const currentSortOrder = sortOrder.find(order => order.value===selectedItem)
  const { colorMode, toggleColorMode } = useColorMode();
  
  const color = { light: "gray.800", dark: "white" };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />} color={color[colorMode]}>
        order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList color={color[colorMode]}>
        {sortOrder.map(order =><MenuItem onClick={()=>onSelectSortOrder(order.value)}key={order.value} value={order.value}>{order.label}</MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
