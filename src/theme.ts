// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("white", "gray.800")(props),
        color: mode("gray.800", "whiteAlpha.900")(props),
      },
    }),
  },
  components: {
    Input: {
      baseStyle: (props: any) => ({
        field: {
          color: mode("black", "white")(props),
         
        },
      }),
    },
    // Add other components here
  },
  colors: {
    // Define your custom colors here
  },
});

export default customTheme;
