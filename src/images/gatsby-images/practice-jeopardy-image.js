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
          fixed(height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Img
      fixed={data.file.childImageSharp.fixed}
      alt="Practice Jeopardy! demo screenshot"
    />
  );
};
