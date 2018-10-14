import React from 'react'
import { Col, Row } from 'styled-bootstrap-grid'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { FlexCol } from './styles/flex'
import PillContainer from './PillContainer'

const TableBorder = styled.div`
  width: 100%;
  border: solid 2px blue;
  border-radius: 10px;
`

const ProjectTable = () => (
  <StaticQuery
    query={graphql`
      query {
        allJson {
          edges {
            node {
              title
              article
            }
          }
        }
      }
    `}
    render={data => (
      <TableBorder>
        <PillContainer edges={data.allJson.edges} />
      </TableBorder>
    )}
  />
)

export default ProjectTable
