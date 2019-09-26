import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-grid-system";
import { FlexCol } from "./styles/flex";
import ProjectTable from "./ProjectTable";

const ProjectsBackground = styled(Row)`
  min-height: 100vh;
  background-color: whitesmoke;
  padding-bottom: 30px;
  margin: 0px;
`;

const Projects = () => (
  <ProjectsBackground>
    <Row>
      <Col>
        <h3 id="projects">Projeasdfasdfcts</h3>
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
