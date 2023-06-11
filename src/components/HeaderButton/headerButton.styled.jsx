import styled from "styled-components";

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.headerButtonBorder};

  color: ${({ theme }) => theme.colors.headerText};
  line-height: 1.33;
  text-transform: uppercase;

  width: 130px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.buttonBackground};

  transition: all ${({ theme }) => theme.transition.duration}
    ${({ theme }) => theme.transition.timingFunction};

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonActiveBackground};
    border-color: ${({ theme }) => theme.colors.buttonActiveBorder};
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet.width}px) {
    width: 152px;
  }

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop.width}px) {
    height: 42px;
    width: 148px;
  }
`;

export { Btn };
