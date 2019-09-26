import React from "react";
import { Row, Col } from "react-grid-system";
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
    <article
      style={{
        padding: "0.25rem 1rem 0.25rem 1rem",
        height: "8rem",
        display: "flex",
        alignItems: "center"
      }}
    >
      {text}
    </article>
    <ul>
      {projectHighlights.map((highlight, i) => (
        <li key={i}>{highlight}</li>
      ))}
    </ul>
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
  </div>
);

export default Article;
