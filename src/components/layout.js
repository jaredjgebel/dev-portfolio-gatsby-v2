import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
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
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="../images/favicon/apple-touch-icon.png"
          />
          >
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="../images/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="../images/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="../images/favicon/site.webmanifest" />
        </Helmet>
        <Container
          fluid
          className="container"
          style={{ overflowX: "hidden", padding: "0px" }}
        >
          <Row nogutter>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row nogutter>
            <Col>{children}</Col>
          </Row>
          <Row nogutter>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
