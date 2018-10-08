import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Container, Row, Column } from 'react-rasta'
import NavLink from '../components/NavLink'

const Title = styled.h6`
  margin: 0 auto;
  padding: 0.75rem 0rem;
`

const HeaderBackground = styled.div`
  background-color: #17242d;
`

const LinkSpacing = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Header = ({ siteTitle }) => (
    <HeaderBackground>
      <Container fluid="true">
        <Row>
            <Column size={{ xs: 12, sm: 7 }}>
              <Title>
                <Link
                    to="/"
                    style={{
                      color: 'whitesmoke',
                      textDecoration: 'none',
                    }}
                  >
                    {siteTitle}
                  </Link>
              </Title>
            </Column>

            <Column size={{ xs: 12, sm: 5 }} justifyContent={{ xs: "center", sm: "flex-end"}}>
                <LinkSpacing>
                  <NavLink
                    name="About"
                    href="/"
                  />
                  <NavLink
                      name="Projects"
                      href="/"
                    />
                  <NavLink
                    name="Contact"
                    href="/"
                  />
                </LinkSpacing>
            </Column>

          </Row>
        </Container>
      </HeaderBackground>
)

export default Header
