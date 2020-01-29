import React from "react";
import styled from "styled-components/macro";
import gatsby from "../images/gatsby-icon.png";
import * as c from "./styles/index";

const FooterBackground = styled.footer`
  height: 2rem;
  background-color: ${c.default.forest};
  color: whitesmoke;
  display: flex;
`;

const Footer = () => (
  <FooterBackground>
    <div style={{ alignSelf: "center" }}>
      <p
        style={{
          marginBottom: "0px",
          paddingLeft: "10px"
        }}
      >
        Site created with{" "}
        <a
          href="https://www.gatsbyjs.org/"
          style={{ textDecoration: "none", color: "whitesmoke" }}
        >
          <img src={gatsby} style={{ height: "18px" }} alt="Gatsby.js" />
        </a>{" "}
      </p>
    </div>
  </FooterBackground>
);

export default Footer;
