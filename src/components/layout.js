import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import Header from './header'
import { injectLayoutBaseCSS } from 'styled-bootstrap-grid'

injectLayoutBaseCSS()
// import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Software Developer Portfolio for Jared Gebel',
            },
            {
              name: 'keywords',
              content: 'software, development, full-stack, javascript',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Container
          fluid={true}
          style={{ paddingLeft: '0px', paddingRight: '0px' }}
        >
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
