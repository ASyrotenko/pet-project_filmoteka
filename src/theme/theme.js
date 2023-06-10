export const theme = {
  breakpoints: {
    mobile: { width: "321px", padding: "20px" },
    burgerMenu: { width: "420px" },
    tablet: { width: "768px", padding: "32px" },
    desktop: { width: "1280px", padding: "32px" },
  },
  space: [
    0, //0
    2, //1
    4, //2
    8, //3
    16, //4
    32, //5
    64, //6
  ],
  fonts: {
    main: {
      regular: "Roboto-Regular", //400
      medium: "Roboto-Medium", //500
    },
  },
  fontSizes: [
    "12px", // 0
    "14px", // 1
    "16px", // 2
    "20px", // 3
    "24px", // 4
    "28px", // 5
    "32px", // 6
    "48px", // 7
    "68px", // 8
  ],
  colors: {
    headerText: "#FFFFFF",
    headerTextHover: "#FF001B",
    headerBackground: "#0000008F",
    headerBurgerMenuBackground: "#202124",
    yellow: "#FFC107",
    white: "#FDF7F2",
    grey: "#888888",
    black: "#111111",
    blue: "#54ADFF",
    lightBlue: "#CCE4FB",
    green: "#00C3AD",
    red: "#F43F5E",
    gradientBlue: "linear-gradient(290.46deg, #419EF1 0%, #9BD0FF 107.89%)",
  },
  boxShadows: {
    main: "3px 8px 14px rgba(136, 198, 253, 0.19)",
    secondary: "7px 13px 14px rgba(116, 177, 232, 0.24)",
  },
  transition: {
    duration: "250ms",
    timingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};
