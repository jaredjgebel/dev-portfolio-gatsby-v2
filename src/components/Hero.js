import React from "react";
import styled from "styled-components";
import * as c from "./styles/index";

const HeroContainer = styled.div`
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
  height: 30rem;
`;

const HeroTitle = styled.div`
  display: flex;
  height: 40%;
  justify-content: center;
  align-items: flex-end;
`;

const HeroSubtitle = styled.div`
  display: flex;
  height: 60%;
  justify-content: center;
  align-items: flex-start;
`;

const Hero = ({ title, subtitle }) => (
  <HeroContainer>
    <HeroTitle>
      <h1 style={{ fontSize: "60px", marginBottom: "10px" }}>{title}</h1>
    </HeroTitle>

    <HeroSubtitle>
      <h4 style={{ marginTop: "1rem" }}>{subtitle}</h4>
    </HeroSubtitle>
  </HeroContainer>
);

export default Hero;
