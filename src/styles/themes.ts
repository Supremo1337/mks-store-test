type ColorTheme = {
  black: string;
  gray: {
    gray_900: string;
    gray_800: string;
    gray_600: string;
    gray_700: string;
  };
  white: {
    white_200: string;
    white_100: string;
  };
  yellow: string;
  blue: string;
  purple: string;
};

type FontTheme = {
  montserrat: {
    boldText: string;
    semiboldText: string;
    normalText: string;
    lightText: string;
  };
};

type Theme = {
  colors: ColorTheme;
  fonts: FontTheme;
};

export const theme: Theme = {
  colors: {
    gray: {
      gray_900: "#2C2C2C",
      gray_800: "#373737",
      gray_700: "#EEEEEE",
      gray_600: "#BFBFBF",
    },
    white: {
      white_200: "#F9F9F9",
      white_100: "#FFFFFF",
    },
    black: "#000000",
    blue: "#0F52BA",
    yellow: "#fff000",
    purple: "#a455e0",
  },
  fonts: {
    montserrat: {
      boldText: "700 28px 'Montserrat'",
      semiboldText: "600 40px 'Montserrat'",
      normalText: "400 16px 'Montserrat'",
      lightText: "300 20px 'Montserrat'",
    },
  },
};
