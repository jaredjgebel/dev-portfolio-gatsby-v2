import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import PillContainer from './PillContainer'

const TableBorder = styled.div`
  width: 100%;
  border: solid 2px #17242d;
  border-radius: 10px;
  min-height: 15rem;
  padding: 0.5rem;
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
              technologies {
                name
                link
              }
              github
              projectHighlights
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
