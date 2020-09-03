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
      alt="Art Slide Puzzles demo screenshot"
    />
  );
};
