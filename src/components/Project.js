import React from "react";
import githubIcon from "../images/github.png";

const Project = ({
  text,
  technologies,
  github,
  demo,
  projectHighlights,
  screenshot
}) => (
  <div style={{ padding: "0px 70px" }}>
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
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      {demo ? (
        <div
          className="demo"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <a
            href={demo}
            style={{ color: "black" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4 style={{ textAlign: "center" }}>Demo</h4>
            {screenshot}
          </a>

          <small>May need a few extra seconds to load</small>
        </div>
      ) : null}

      <a href={github} rel="noopener noreferrer" style={{ paddingTop: "20px" }}>
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
  </div>
);

export default Project;
