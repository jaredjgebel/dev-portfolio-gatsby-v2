import React from "react";
import styled from "styled-components/macro";
import * as c from "./styles/index";

const Container = styled.div`
  color: whitesmoke;
  background: ${c.default.forest};
  background: linear-gradient(
    to top,
    #0d2620,
    #12382e,
    #184b3d,
    #1e5f4c,
    #26735b
  );
  background: -webkit-linear-gradient(
    to top,
    #0d2620,
    #12382e,
    #184b3d,
    #1e5f4c,
    #26735b
  );
  height: 100vh;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40%;

  & p {
    margin-bottom: 2px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  @media (min-width: 768px) {
    font-size: 64px;
  }

  @media (min-width: 1184px) {
    font-size: 84px;
  }
`;

const Subtitle = styled.h2`
  margin-top: -0.3rem;
  font-size: 24px;
  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 1184px) {
    margin-top: 1rem;
    font-size: 48px;
  }
`;

const Hero = ({ title, subtitle }) => (
  <Container>
    <Top>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Top>

    <Bottom>
      <p>HTML, CSS, React, Redux, Gatsby</p>
      <p>Node, Express, Postgres (SQL), MongoDB (NoSQL)</p>
      <p>Github, Visual Studio Code, Command Line, Chrome Dev Tools</p>
    </Bottom>
  </Container>
);

export default Hero;
