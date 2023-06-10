import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav``;

const List = styled.ul`
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.burgerMenu.width}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
const Item = styled.li`
  line-height: 1.17;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.headerText};
  transition: color ${({ theme }) => theme.transition.duration}
    ${({ theme }) => theme.transition.timingFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.headerTextHover};
  }
`;

// &:not(:last-child) {
//     margin-right: 40px;
//   }

//   &:nth-last-child(3) {
//     margin-right: 0px;
//   }

const LinkNav = styled(NavLink)`
  padding: 4px 0;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet.width}) {
    padding: 10px 0;
  }

  &.active {
    position: relative;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.headerTextHover};
    transform: scaleX(0);
    transition: transform ${({ theme }) => theme.transition.duration}
      ${({ theme }) => theme.transition.timingFunction};
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

const Slash = styled.span`
  margin: 0 3px;
  color: ${({ theme }) => theme.colors.headerText};
`;

export { Nav, List, Item, LinkNav, Slash };
