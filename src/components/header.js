import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import { FlexCol } from './styles/flex'
import NavLink from '../components/NavLink'

const HeaderRow = styled(Row)`
  min-height: 2rem;
  background-color: #17242d;
`

const Title = styled(Link)`
  color: whitesmoke;
  text-decoration: none;
  height: 100%;
  :hover {
    color: whitesmoke;
  }
`

const Header = () => (
  <Container fluid={true}>
    <HeaderRow>
      <FlexCol col={12} sm={7} direction="row">
        <Row
          justifyContent="center"
          smJustifyContent="start"
          alignItems="center"
          style={{ width: '100%' }}
        >
          <Col style={{ width: 'auto' }}>
            <Title to="/" style={{ paddingLeft: '20px' }}>
              Jared Gebel
            </Title>
          </Col>
        </Row>
      </FlexCol>

      <FlexCol col={12} sm={5} direction="row">
        <Row
          justifyContent="center"
          smJustifyContent="end"
          alignItems="center"
          style={{ width: '100%' }}
        >
          <Col style={{ width: 'auto', paddingRight: '0px' }}>
            <NavLink name="Blog" href="/blog/" />
            <NavLink name="About" href="#about" />
            <NavLink name="Projects" href="#projects" />
            <NavLink name="Contact" href="#contact" />
          </Col>
        </Row>
      </FlexCol>
    </HeaderRow>
  </Container>
)

export default Header
