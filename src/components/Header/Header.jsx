import { useLocation } from "react-router-dom";
import { useState } from "react";

import { theme } from "../../theme/theme";

import useWindowSize from "../../hooks/useWindowSize";
import Container from "../Container/Container";
import BurgerButton from "../BurgerButton/BurgerButton";
import HeaderNav from "../HeaderNav/HeaderNav";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderGrupeBtn from "../HeaderGrupeBtn/HeaderGrupeBtn";
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

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <HeaderStyles pathname={pathname}>
      <Container>
        <HeaderWrap>
          <HeaderLogoLink to="/" onClick={() => setIsOpen(false)}>
            <HeaderLogoIcon />
            {screenWidth >= theme.breakpoints.logoText.width && "Filmoteka"}
          </HeaderLogoLink>
          {screenWidth <= theme.breakpoints.burgerMenu.width && (
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
          )}
          <HeaderMenu isOpen={isOpen}>
            <HeaderNav setIsOpen={setIsOpen} />
            <HeaderAuth screenWidth={screenWidth} />
          </HeaderMenu>
        </HeaderWrap>
        {pathname === "/library" ? (
          <HeaderGrupeBtn />
        ) : (
          <HeaderSearch onSubmit={onSubmit} />
        )}
      </Container>
    </HeaderStyles>
  );
};

export default Header;
