import React from "react";
import { Row } from "styled-bootstrap-grid";
import { FlexCol } from "./styles/flex";
import githubIcon from "../images/github.png";

const Article = ({
  text,
  technologies,
  github,
  projectHighlights,
  visible
}) => (
  <div hidden={visible}>
    <Row style={{ display: "flex", alignItems: "center" }}>
      <article style={{ padding: "0.25rem 1rem 0.25rem 1rem", height: "8rem" }}>
        {text}
      </article>
    </Row>
    <Row style={{ display: "flex", justifyContent: "center" }}>
      <FlexCol col={10}>
        <ul>
          {projectHighlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </FlexCol>
    </Row>
    <Row>
      <FlexCol>
        <a href={github} style={{ textAlign: "center" }}>
          <img src={githubIcon} alt="Github repository" />
        </a>
        <h4>Technologies</h4>
        <p>
          {technologies.map((technology, i) => (
            <a
              href={technology.link}
              style={{ textDecoration: "none", color: "black" }}
              key={i}
            >
              {technology.name}
              {i === technologies.length - 1 ? "" : ", "}
            </a>
          ))}
        </p>
      </FlexCol>
    </Row>
    <Row>
      <FlexCol></FlexCol>
    </Row>
  </div>
);

export default Article;
