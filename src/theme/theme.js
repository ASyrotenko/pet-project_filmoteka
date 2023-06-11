export const theme = {
  breakpoints: {
    mobile: { width: 320, padding: 20 },
    burgerMenu: { width: 420 },
    logoText: { width: 580 },
    tablet: { width: 768, padding: 32 },
    desktop: { width: 1280, padding: 32 },
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
    headerInputBorder: "#FFFFFF",
    headerButtonBorder: "#FFFFFF",
    buttonBackground: "transparent",
    buttonActiveBorder: "#FF6B01",
    buttonActiveBackground: "#FF6B01",
  },
  boxShadows: {
    buttonActive: "0px 8px 43px rgba(255, 107, 1, 0.6)",
    main: "3px 8px 14px rgba(136, 198, 253, 0.19)",
    secondary: "7px 13px 14px rgba(116, 177, 232, 0.24)",
  },
  transition: {
    duration: "250ms",
    timingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};
