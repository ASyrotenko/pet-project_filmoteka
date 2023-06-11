import { Btn } from "./headerButton.styled";

const HeaderButton = ({ children }) => {
  return <Btn type="button">{children}</Btn>;
};

export default HeaderButton;
