import React from "react";
import styled from "styled-components/macro";
import { Row } from "react-grid-system";
import { FlexCol } from "./styles/flex";
import Headshot from "../components/Headshot";
import * as c from "./styles/index";
import github from "../images/github.png";
import linkedIn from "../images/linkedin.png";

const ContactBackground = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 425px;
  margin: 0px;
  padding-top: 15px;
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
  <ContactBackground>
    <h2
      id="contact"
      style={{ color: "whitesmoke", textAlign: "center", marginTop: "1.5rem" }}
    >
      Contact
    </h2>

    <Row>
      <FlexCol xs={12} md={6} alignItems="center">
        <div>
          <Headshot />
        </div>
      </FlexCol>

      <FlexCol xs={12} md={6}>
        <p style={{ color: "whitesmoke", padding: "0px 10px 0px 10px" }}>
          I'm available for hire, and I'd love to hear from you if you have
          questions about me and my work.
        </p>
        <Row>
          <FlexCol xs={6} md={12} alignItems="center" justifyContent="center">
            <a
              href="mailto:jaredjgebel@gmail.com"
              style={{ alignSelf: "center" }}
            >
              <button>Email Me</button>
            </a>
          </FlexCol>
          <FlexCol xs={6} md={12} alignItems="center" justifyContent="center">
            <div style={{ marginTop: "25px" }}>
              <a href="https://github.com/jaredjgebel">
                <img
                  src={github}
                  alt="Github Profile"
                  style={{ marginRight: "30px", height: "64px" }}
                />
              </a>
              <a href="https://www.linkedin.com/in/jaredjgebel/">
                <img
                  src={linkedIn}
                  alt="LinkedIn Page"
                  style={{ height: "64px" }}
                />
              </a>
            </div>
          </FlexCol>
        </Row>
      </FlexCol>
    </Row>
  </ContactBackground>
);

export default Contact;
