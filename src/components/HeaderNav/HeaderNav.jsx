import { Nav, List, Item, LinkNav } from "./headerNav.styled";

const HeaderNav = ({ setIsOpen }) => {
  return (
    <Nav>
      <List>
        <Item>
          <LinkNav to="/" onClick={() => setIsOpen(false)}>
            Home
          </LinkNav>
        </Item>
        <Item>
          <LinkNav to="/library" onClick={() => setIsOpen(false)}>
            My Library
          </LinkNav>
        </Item>
      </List>
    </Nav>
  );
};

export default HeaderNav;
