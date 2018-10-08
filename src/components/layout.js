import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Row, Column } from 'react-rasta'

import Header from './header'
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
          fullscreen="true"
          style={{padding: '0rem 0rem',}}
        >
          <Row >
            <Column>
              <Container 
                fluid="true"
                style={{padding: '0rem 0rem',}}
              >
                <Row>
                  <Column>
                    <Header siteTitle={data.site.siteMetadata.title} />
                  </Column>
                </Row>
              </Container>
            </Column>
          </Row>
          <Row>
            <Column>
              {children}
            </Column>
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
