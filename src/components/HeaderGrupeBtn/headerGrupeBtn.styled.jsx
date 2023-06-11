import styled from "styled-components";
import HeaderButton from "../HeaderButton/HeaderButton";

const Wrap = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet.width}px) {
    gap: 32px;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop.width}px) {
    gap: 16px;
  }
`;
const Btn = styled(HeaderButton)`
  width: 130px;
`;

export { Wrap, Btn };
