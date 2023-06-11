import styled from "styled-components";

const List = styled.ul`
  display: flex;

  align-items: center;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.burgerMenu.width}px) {
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.burgerMenu.width + 1}px) {
    margin-left: 40px;
  }
`;
const Item = styled.li`
  padding: 10px 0;
  cursor: pointer;
  line-height: 1.17;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.headerText};
  transition: color ${({ theme }) => theme.transition.duration}
    ${({ theme }) => theme.transition.timingFunction};

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.headerTextHover};
    }

  @media screen and (min-width: ${({ theme }) =>
    theme.breakpoints.burgerMenu.width + 1}px) {
    padding: 4px 0;
  }

  @media screen and (min-width: ${({ theme }) =>
    theme.breakpoints.tablet.width}px) {
    padding: 10px 0;
  }
`;

// &:not(:last-child) {
//   margin-right: 40px;
// }

// &:nth-last-child(3) {
//   margin-right: 0px;
// }

const Slash = styled.span`
  margin: 0 3px;
  color: ${({ theme }) => theme.colors.headerText};
`;

export { List, Item, Slash };
