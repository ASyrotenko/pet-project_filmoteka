export const theme = {
  breakpoints: {
    mobile: { width: 320, padding: 20 },
    tablet: { width: 768, padding: 32 },
    desktop: { width: 1280, padding: 32 },
    burgerMenu: { width: 420 },
    logoText: { width: 580 },
    posterMobile: { width: 480 },
  },

  fonts: {
    main: {
      regular: "Roboto-Regular", //400
      medium: "Roboto-Medium", //500
    },
  },
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
    textPrimary: "#000000",
    textSecondary: "#8C8C8C",
    textWhite: "#FFFFFF",
    textAccent: "#FF6B08",
    backgroundAccent: "#FF6B08",
    loadingColor: "#FF6B08",
    loadingSecondaryColor: "#FF6B0870",
  },
  boxShadows: {
    buttonActive: "0px 8px 43px rgba(255, 107, 1, 0.6)",
  },
  transition: {
    duration: "250ms",
    timingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
};
