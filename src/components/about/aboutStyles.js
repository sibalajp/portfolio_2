import styled from "styled-components";

export const AboutMeHead = styled.div`
  font-size: 2rem;
  text-align: left;
`;

export const Content = styled.div`
  box-shadow: 0px 1px 2px 1px rgba(221, 221, 221, 0.58);
  color: "#525866";
  display: inline-block;
  font-size: 16px;
  height: 370px;
  overflow: hidden;
  padding: 20px;
  position: relative;
  text-align: left;
  width: 500px;

  @media only screen and (max-width: 1172px) {
    margin-bottom: 50px;
    margin-right: 0 !important;
  }
`;
