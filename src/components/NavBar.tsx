import { HStack, Image, Spacer, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

import React from "react";

const navBar = () => {
  return (
    <HStack>
      <Image
        borderRadius="full"
        boxSize={"60px"} // Set the width to 100px
        // Set the height to 50px
        src={logo}
        alt="logo"
      />
      <Spacer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default navBar;
