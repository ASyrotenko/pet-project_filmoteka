import { Oval } from "react-loader-spinner";
import { theme } from "theme/theme";

const Loader = () => (
  <Oval
    height={80}
    width={80}
    color={theme.colors.loadingColor}
    wrapperStyle={{
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      "align-items": "center",
      "justify-content": "center",
      width: "100%",
      height: "100%",
    }}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor={theme.colors.loadingSecondaryColor}
    strokeWidth={2}
    strokeWidthSecondary={6}
  />
);

export default Loader;
