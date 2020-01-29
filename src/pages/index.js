import React from "react";
import { Row, Col, ScreenClassProvider } from "react-grid-system";
import { Grommet } from "grommet";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => (
  <ScreenClassProvider>
    <Grommet plain>
      <Layout>
        <Row>
          <Col>
            <Hero title="Jared Gebel" subtitle="Web Developer, JavaScript" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Profile />
          </Col>
        </Row>
        <Row>
          <Col>
            <Projects />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Contact />
          </Col>
        </Row>
      </Layout>
    </Grommet>
  </ScreenClassProvider>
);

export default IndexPage;
