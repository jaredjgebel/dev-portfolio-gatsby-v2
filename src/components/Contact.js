import React from "react";
import styled from "styled-components";
import { Row } from "styled-bootstrap-grid";
import { FlexCol } from "./styles/flex";
import Headshot from "../components/Headshot";
import * as c from "./styles/index";
import github from "../images/github.png";

const ContactBackground = styled(Row)`
  min-height: 36rem;
  margin: 0px;
  background: ${c.default.forest};
  background: linear-gradient(
    to top,
    #0d2620,
    #12382e,
    #184b3d,
    #1e5f4c,
    #26735b
  );
  background-image: -webkit-linear-gradient(
    to top,
    #0d2620,
    #12382e,
    #184b3d,
    #1e5f4c,
    #26735b
  );
`;

const Contact = () => (
  <ContactBackground justifyContent="center">
    <FlexCol col={12}>
      <h2 id="contact" style={{ color: "whitesmoke", textAlign: "center" }}>
        Contact
      </h2>
    </FlexCol>
    <FlexCol xs={12} sm={6} alignItems="center">
      <div>
        <Headshot />
      </div>
    </FlexCol>
    <FlexCol xs={12} sm={6}>
      <p style={{ color: "whitesmoke" }}>
        I'm available for hire, and I'd love to hear from you if you have
        questions about me and my work.
      </p>
      <Row>
        <FlexCol col={6} alignItems="center" justifyContent="center">
          <a
            href="mailto:jaredjgebel@gmail.com"
            style={{ alignSelf: "center" }}
          >
            <button>Email Me</button>
          </a>
        </FlexCol>
        <FlexCol col={6} alignItems="center" justifyContent="center">
          <a href="https://github.com/jaredjgebel">
            <img src={github} />
          </a>
        </FlexCol>
      </Row>
    </FlexCol>
  </ContactBackground>
);

export default Contact;
