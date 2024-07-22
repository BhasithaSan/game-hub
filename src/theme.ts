// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
 
 
  colors: {
    // Define your custom colors here
  },
});

export default customTheme;
