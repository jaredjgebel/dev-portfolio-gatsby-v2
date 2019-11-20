import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
  const data = useStaticQuery(graphql`
    query ArtSlidePuzzlesImage {
      file(
        relativePath: {
          eq: "images/screenshots/art-slide-puzzles-screenshot.png"
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
      alt="Art Slide Puzzles demo screenshot"
    />
  );
};
