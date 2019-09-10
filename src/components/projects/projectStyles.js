import styled from "styled-components";

export const PortHeader = styled.div`
  text-align: left;
  font-size: 2rem;
`;

const container = {
  boxShadow: "0px 0px 5px 3px rgba(221, 221, 221, 0.58)",
  display: "inline-block",
  overflow: "hidden",
  position: "relative",
  width: 500
};

const card = {
  display: "inline-block",
  height: 570,
  overflowY: "auto"
};

const img = {
  margin: "0 auto",
  width: 1000
};

const name = {
  fontSize: 16,
  marginTop: 20,
  textAlign: "center",
  width: 500
};

export const styles = {
  card: card,
  container: container,
  img: img,
  name: name
};
