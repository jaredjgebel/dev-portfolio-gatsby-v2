import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import { FlexCol } from "./styles/flex";
import NavLink from "../components/NavLink";
import * as c from "./styles/index";

const HeaderRow = styled(Row)`
  min-height: 2.5rem;
  background-color: ${c.default.forest};
`;

const Header = () => (
  <Container fluid={true}>
    <HeaderRow>
      <FlexCol col={12} direction="row">
        <Row
          justifyContent="center"
          smJustifyContent="end"
          alignItems="center"
          style={{ width: "100%" }}
        >
          <Col style={{ width: "auto", paddingRight: "0px" }}>
            <NavLink name="About" href="#about" />
            <NavLink name="Projects" href="#projects" />
            <NavLink name="Contact" href="#contact" />
          </Col>
        </Row>
      </FlexCol>
    </HeaderRow>
  </Container>
);

export default Header;
