import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Accordion from "./Accordion";

const ProjectsQuery = () => (
  <StaticQuery
    query={graphql`
      query {
        allProjectJson {
          edges {
            node {
              id
              title
              subtitle
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
    render={(data) => <Accordion edges={data.allProjectJson.edges} />}
  />
);

export default ProjectsQuery;
