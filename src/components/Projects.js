import React from "react";
import styled from "styled-components/macro";
import { Row, Col } from "react-grid-system";
import { FlexCol } from "./styles/flex";
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
        <h3 id="projects" style={{ textAlign: "center" }}>
          Projects
        </h3>
      </Col>
    </Row>

    <Row>
      <Col>
        <ProjectTable />
      </Col>
    </Row>
  </ProjectsBackground>
);

export default Projects;
