import React from "react";
import { StaticQuery, graphql } from "gatsby";
import AccordionContainer from "./Accordion";

const ProjectsQuery = () => (
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

export default ProjectsQuery;
