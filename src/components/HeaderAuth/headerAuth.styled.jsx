import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
`;
const Item = styled.li`
  cursor: pointer;
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
