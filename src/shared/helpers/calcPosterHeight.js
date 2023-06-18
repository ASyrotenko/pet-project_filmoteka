import { theme } from "theme/theme";

const calcPosterHeight = (viewportWidth) => {
  if (viewportWidth === theme.breakpoints.mobile.width) {
    return 420;
  } else if (
    viewportWidth > theme.breakpoints.mobile.width &&
    viewportWidth < theme.breakpoints.tablet.width
  ) {
    return "auto";
  } else if (
    viewportWidth >= theme.breakpoints.tablet.width &&
    viewportWidth < theme.breakpoints.desktop.width
  ) {
    return 455;
  } else {
    return 574;
  }
};

export default calcPosterHeight;
