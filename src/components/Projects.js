import React from 'react'
import styled from 'styled-components'
import { Row } from 'styled-bootstrap-grid'
import { FlexCol } from './styles/flex'
import ProjectTable from './ProjectTable'

const ProjectsBackground = styled(Row)`
  min-height: 28rem;
  background-color: whitesmoke;
  padding-bottom: 30px;
`

const Projects = () => (
  <ProjectsBackground justifyContent="center">
    <FlexCol col={8}>
      <Row justifyContent="center" style={{ paddingTop: '75px' }}>
        <h3 id="projects">Projects</h3>
      </Row>
      <Row justifyContent="center">
        <ProjectTable />
      </Row>
    </FlexCol>
  </ProjectsBackground>
)

export default Projects
