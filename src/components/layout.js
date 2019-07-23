import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Container, Row, Col, BaseCSS } from "styled-bootstrap-grid";
import Header from "./header";
import Footer from "../components/Footer";

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
        <BaseCSS />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: "Web Developer Portfolio for Jared Gebel"
            },
            {
              name: "keywords",
              content: "web, software, development, javascript, developer"
            }
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Container
          fluid
          style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            position: "relative",
            overflowY: "hidden"
          }}
        >
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>{children}</Col>
          </Row>
          <div
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              paddingLeft: "0px",
              paddingRight: "0px"
            }}
          >
            <Footer />
          </div>
        </Container>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
