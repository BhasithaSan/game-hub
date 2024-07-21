import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";


const colorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace={"nowrap"} color="grey">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default colorModeSwitch;
