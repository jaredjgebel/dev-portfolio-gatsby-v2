import React from 'react'
import styled from 'styled-components'

const HeroContainer = styled.div`
  color: whitesmoke;
  background: #16222a;
  background: -webkit-linear-gradient(to right, #3a6073, #16222a);
  background: linear-gradient(to right, #3a6073, #16222a);
  height: 24rem;
`

const HeroTitle = styled.div`
  display: flex;
  height: 40%;
  justify-content: center;
  align-items: flex-end;
`

const HeroSubtitle = styled.div`
  display: flex;
  height: 60%;
  justify-content: center;
  align-items: flex-start;
`

const Hero = ({ title, subtitle }) => (
  <HeroContainer>
    <HeroTitle>
      <h1 style={{ fontSize: '60px', marginBottom: '10px' }}>{title}</h1>
    </HeroTitle>

    <HeroSubtitle>
      <h4>{subtitle}</h4>
    </HeroSubtitle>
  </HeroContainer>
)

export default Hero
