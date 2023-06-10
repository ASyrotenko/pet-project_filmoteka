import { useLocation } from "react-router-dom";
import { useState } from "react";

import useWindowSize from "../../hooks/useWindowSize";
// import HeaderWrap from "../HeaderWrap/HeaderWrap";
import Container from "../Container/Container";
import BurgerButton from "../BurgerButton/BurgerButton";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import {
  HeaderStyles,
  HeaderWrap,
  HeaderLogoIcon,
  HeaderLogoLink,
  HeaderMenu,
} from "./header.styled";

const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth] = useWindowSize();

  return (
    <HeaderStyles pathname={pathname}>
      <Container>
        <HeaderWrap>
          <HeaderLogoLink to="/" onClick={() => setIsOpen(false)}>
            <HeaderLogoIcon />
            {screenWidth >= 768 && "Filmoteka"}
          </HeaderLogoLink>
          {screenWidth <= 420 && (
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
          <HeaderMenu isOpen={isOpen}>
            <HeaderNav setIsOpen={setIsOpen} />
            <HeaderAuth screenWidth={screenWidth} />
          </HeaderMenu>
        </HeaderWrap>
      </Container>
    </HeaderStyles>
  );
};

export default Header;
