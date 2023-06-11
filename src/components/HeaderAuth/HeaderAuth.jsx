import { List, Item, Slash } from "./headerAuth.styled";

const HeaderAuth = ({ screenWidth }) => {
  return (
    <List>
      <Item>Sign In</Item>
      {screenWidth > 420 && <Slash>/</Slash>}
      <Item>Sign Up</Item>
    </List>
  );
};

export default HeaderAuth;
