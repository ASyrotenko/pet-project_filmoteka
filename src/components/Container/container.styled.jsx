import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;

  padding: 0 ${({ theme }) => theme.breakpoints.mobile.padding}px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet.width - 1}px) {
    min-width: ${({ theme }) => theme.breakpoints.mobile.width}px;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet.width}px) {
    width: ${({ theme }) => theme.breakpoints.tablet.width}px;
    padding: 0 ${({ theme }) => theme.breakpoints.tablet.padding}px;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop.width}px) {
    width: ${({ theme }) => theme.breakpoints.desktop.width}px;
  }

  outline: 1px solid tomato;
`;

export { Wrapper };
