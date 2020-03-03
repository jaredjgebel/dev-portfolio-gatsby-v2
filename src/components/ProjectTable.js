import React from "react";
import { StaticQuery, graphql } from "gatsby";
import AccordionContainer from "./AccordionContainer";

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
    render={data => <AccordionContainer edges={data.allProjectJson.edges} />}
  />
);

export default ProjectTable;
