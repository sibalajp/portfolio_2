import styled from "styled-components";

export const MainContainer = styled.div`
  text-align: center;
  position: relative;
  height: 100vh;
`;

export const PortfolioContainer = styled.div``;

export const PortHeader = styled.div`
  display: grid;
  grid-template-columns: auto 40% 2% 40% auto;
  grid-template-areas: ". port-header . . .";
  font-size: 2rem;
`;

export const PortBody = styled.div`
  display: grid;
  grid-template-columns: auto 40% 2% 40% auto;
  grid-template-areas: ". project-1 . project-2 .";
`;
