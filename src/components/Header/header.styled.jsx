import styled from "styled-components";
import { Link } from "react-router-dom";
import homePageBackgroundMobile from "../../images/header/header-background-home-page-mobile.jpg";
import homePageBackgroundTablet from "../../images/header/header-background-home-page-tablet.jpg";
import homePageBackgroundDesktop from "../../images/header/header-background-home-page-desktop.jpg";
import libraryPageBackgroundMobile from "../../images/header/header-background-library-page-mobile.jpg";
import libraryPageBackgroundTablet from "../../images/header/header-background-library-page-tablet.jpg";
import libraryPageBackgroundDesktop from "../../images/header/header-background-library-page-desktop.jpg";
import { Logo } from "../../shared/utils/icons";

const HeaderStyles = styled.header`
  padding-top: 40px;
  padding-bottom: 92px;
  height: 230px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  background-image: url(${(props) =>
    props.pathname === "/library"
      ? libraryPageBackgroundMobile
      : homePageBackgroundMobile});
  background-repeat: no-repeat;
  background-position: 50% bottom;
  background-size: cover;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile.width}) {
    background-image: url(${(props) =>
      props.pathname === "/library"
        ? libraryPageBackgroundTablet
        : homePageBackgroundMobile});
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet.width}) {
    padding-top: 33px;
    padding-bottom: 88px;
    height: 216px;
    background-image: url(${(props) =>
      props.pathname === "/library"
        ? libraryPageBackgroundDesktop
        : homePageBackgroundTablet});
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop.width}) {
    padding-top: 45px;
    padding-bottom: 80px;
    background-image: url(${(props) =>
      props.pathname === "/library"
        ? libraryPageBackgroundDesktop
        : homePageBackgroundDesktop});
  }
`;

const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogoLink = styled(Link)`
  display: flex;
  color: ${({ theme }) => theme.colors.headerText};
  align-items: center;
  transition: color ${({ theme }) => theme.transition.duration}
    ${({ theme }) => theme.transition.timingFunction};

  &:hover {
    color: ${({ theme }) => theme.colors.headerTextHover};
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet.width}) {
    font-size: 30px;
    line-height: 1.17;
  }
`;

const HeaderLogoIcon = styled(Logo)`
  z-index: 50;
  stroke: currentColor;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet.width}) {
    margin-right: 8px;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop.width}) {
    margin-right: 10px;
  }
`;

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.burgerMenu.width}) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.headerBurgerMenuBackground};
    transform: translateY(-100%);
    visibility: hidden;
    opacity: 0;
    transition: all ${({ theme }) => theme.transition.duration}
      ${({ theme }) => theme.transition.timingFunction};

    ${({ isOpen }) =>
      isOpen && "visibility: visible; opacity: 1; transform: translateY(0)"}
  }
`;

export { HeaderStyles, HeaderWrap, HeaderLogoLink, HeaderLogoIcon, HeaderMenu };
