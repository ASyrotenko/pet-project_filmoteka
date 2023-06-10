import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;

  padding: 0 ${({ theme }) => theme.breakpoints.mobile.padding};

  @media screen and (max-width: 767px) {
    min-width: ${({ theme }) => theme.breakpoints.mobile.width};
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet.width}) {
    width: ${({ theme }) => theme.breakpoints.tablet.width};
    padding: 0 ${({ theme }) => theme.breakpoints.tablet.padding};
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop.width}) {
    width: ${({ theme }) => theme.breakpoints.desktop.width};
  }

  outline: 1px solid tomato;
`;

export { Wrapper };
