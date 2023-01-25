import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;