import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
  const data = useStaticQuery(graphql`
    query PracticeJeopardyImage {
      file(
        relativePath: {
          eq: "images/screenshots/practice-jeopardy-screenshot.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Img
      fluid={data.file.childImageSharp.fluid}
      alt="Practice Jeopardy! demo screenshot"
    />
  );
};
