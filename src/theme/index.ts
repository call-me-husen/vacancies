import { extendBaseTheme, extendTheme } from "@chakra-ui/react";

const theme = {
  styles: {
    global: {
      body: {
        color: "black",
        lineHeight: "tall",
        bg: "blackAlpha.100",
      },
      nav: {
        bg: "white",
        zIndex: 10,
      },
    },
  },
};

export default extendTheme(theme);
