import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PillContainer from "./PillContainer";

const ProjectTable = () => (
  <StaticQuery
    query={graphql`
      query {
        allProjectJson {
          edges {
            node {
              id
              title
              article
              technologies {
                name
                link
              }
              github
              demo
              projectHighlights
            }
          }
        }
      }
    `}
    render={data => <PillContainer edges={data.allProjectJson.edges} />}
  />
);

export default ProjectTable;
