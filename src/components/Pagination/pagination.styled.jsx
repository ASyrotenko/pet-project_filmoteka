import styled from "styled-components";
import { ArrowLeftIcon } from "shared/utils/icons";

const PaginationContainer = styled.div`
  padding: 20px 0 40px;
`;

const PaginationList = styled.ul`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 420px;
`;

const PaginationButton = styled.button`
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.textPrimary};
  display: flex;
  border: none;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  line-height: 1.33;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transition.duration}
    ${({ theme }) => theme.transition.timingFunction};

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAccent};
    color: ${({ theme }) => theme.colors.textWhite};
  }
  &.dots:hover {
    background-color: ${({ theme }) => theme.colors.buttonBackground};
    color: ${({ theme }) => theme.colors.textPrimary};
    cursor: default;
  }

  &.selected {
    background-color: ${({ theme }) => theme.colors.backgroundAccent};
    color: ${({ theme }) => theme.colors.textWhite};
  }
  &.disabled {
    pointer-events: none;
    background-color: transparent;
  }
`;
const ArrowLeft = styled(ArrowLeftIcon)`
  stroke: currentColor;
`;

const ArrowRight = styled(ArrowLeftIcon)`
  transform: rotate(180deg);
  stroke: currentColor;
`;

export {
  PaginationList,
  PaginationContainer,
  PaginationButton,
  ArrowLeft,
  ArrowRight,
};
