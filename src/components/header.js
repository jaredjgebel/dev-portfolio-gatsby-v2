import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'
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

const FlexCol = styled(Col)`
  display: flex;
  flex-direction: ${props => (props.direction === 'row' ? 'row' : 'column')};
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
            <Title to="/">Jared Gebel</Title>
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
          <Col style={{ width: 'auto' }}>
            <NavLink name="About" href="/" />
            <NavLink name="Projects" href="/" />
            <NavLink name="Contact" href="/" />
          </Col>
        </Row>
      </FlexCol>
    </HeaderRow>
  </Container>
)

export default Header
