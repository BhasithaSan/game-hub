import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const colorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace={"nowrap"} color="white">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default colorModeSwitch;
