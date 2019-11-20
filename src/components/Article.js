import React from "react";
import { Col } from "react-grid-system";
import githubIcon from "../images/github.png";

const Article = ({
  title,
  text,
  technologies,
  github,
  demo,
  projectHighlights,
  visible
}) => (
  <Col hidden={visible}>
    <h3 style={{ textAlign: "center" }}>{title}</h3>
    <article style={{ padding: "0px 70px" }}>
      <p>{text}</p>
      <ul>
        {projectHighlights.map((highlight, i) => (
          <li key={i}>{highlight}</li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <a href={github}>
          <img src={githubIcon} alt="Github repository" />
        </a>

        {demo ? (
          <div
            className="demo"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <a
              href={demo}
              style={{ color: "black" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <small>May need a few extra seconds to load</small>
          </div>
        ) : null}
      </div>
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
    </article>
  </Col>
);

export default Article;
