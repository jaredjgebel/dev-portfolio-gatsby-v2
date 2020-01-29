import React from "react";
import styled from "styled-components/macro";
import { Row, Col } from "react-grid-system";
import ProjectTable from "./ProjectTable";

const ProjectsBackground = styled("div")`
  min-height: 100vh;
  background-color: whitesmoke;
  padding-bottom: 30px;
  margin: 0px;
`;

const Projects = () => (
  <ProjectsBackground>
    <Row>
      <Col>
        <h2 id="projects" style={{ textAlign: "center", paddingTop: "20px" }}>
          Projects
        </h2>
      </Col>
    </Row>

    <Row>
      <Col>
        <ProjectTable style={{ paddingTop: "20px" }} />
      </Col>
    </Row>
  </ProjectsBackground>
);

export default Projects;
