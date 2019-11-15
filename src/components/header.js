import React from "react";
import styled from "styled-components/macro";
import { Container, Row, Col, ScreenClassRender } from "react-grid-system";
import { FlexCol } from "./styles/flex";
import NavLink from "../components/NavLink";
import * as c from "./styles/index";

const HeaderRow = styled(Row)`
  min-height: 2.5rem;
  background-color: ${c.default.lightTeal};
`;

const Header = () => (
  <Container fluid={true}>
    <HeaderRow>
      <FlexCol direction="row" alignItems="center">
        <ScreenClassRender
          render={screenClass => (
            <Col
              style={{
                width: "auto",
                paddingRight: "0px",
                display: "flex",
                justifyContent: ["xs"].includes(screenClass)
                  ? "center"
                  : "flex-end"
              }}
            >
              <NavLink name="About" href="/#about" />
              <NavLink name="Projects" href="/#projects" />
              <NavLink name="Contact" href="/#contact" />
            </Col>
          )}
        />
      </FlexCol>
    </HeaderRow>
  </Container>
);

export default Header;
