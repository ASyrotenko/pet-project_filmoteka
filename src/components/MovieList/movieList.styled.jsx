import { Link } from "react-router-dom";

import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0;

  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet.width}px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }
`;

const Item = styled.li`
  display: flex;
  flex-basis: calc((100% - 32px) / 2);
`;

const LinTo = styled(Link)`
  margin: 0 auto;
`;

const Poster = styled.img`
  border-radius: 5px;
  @media screen and (min-width: ${({ theme }) =>
      theme.breakpoints.posterMobile.width}px) and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet.width - 1}px) {
    width: 440px;
  }
`;

const Title = styled.p`
  margin-top: 10px;
  line-height: 1.33;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Splash = styled.span`
  display: inline;
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.textAccent};
`;
const Year = styled.p`
  display: inline;
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.textAccent};
`;

const Vote = styled.p`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  line-height: 0;
  width: 36px;
  height: 16px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.textWhite};
  background-color: ${({ theme }) => theme.colors.backgroundAccent};
`;

export { List, Item, LinTo, Poster, Title, Splash, Year, Vote };
