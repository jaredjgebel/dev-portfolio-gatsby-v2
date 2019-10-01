import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Row, Col, ScreenClassProvider } from "react-grid-system";

const IndexPage = () => (
  <ScreenClassProvider>
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
  </ScreenClassProvider>
);

export default IndexPage;
