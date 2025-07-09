// theme.ts
import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";


const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
 
styles: {
    global: (props : StyleFunctionProps) => ({
      body: {
        color: props.colorMode === "dark" ? "gray.100" : "gray.800",
        bg: props.colorMode === "dark" ? "gray.900" : "white",
      },
    }),
  },
   components: {
    Heading: {
      baseStyle: (props: StyleFunctionProps) => ({
        color: props.colorMode === "dark" ? "gray.100" : "gray.800",
      }),
    },
  },
});

export default customTheme;
