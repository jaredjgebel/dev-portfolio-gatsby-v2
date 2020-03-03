import React, { Component } from "react";
import { Accordion, AccordionPanel, Box, Grommet } from "grommet";
import styled from "styled-components";
import Project from "./Project";
import ArtSlidePuzzlesImage from "../images/gatsby-images/art-slide-puzzles-image";
import PracticeJeopardyImage from "../images/gatsby-images/practice-jeopardy-image";

const getScreenshot = title => {
  switch (title) {
    case "Art Slide Puzzles":
      return <ArtSlidePuzzlesImage />;
    case "Practice Jeopardy!":
      return <PracticeJeopardyImage />;
    default:
      return null;
  }
};

const SizedAccordion = styled(Accordion)`
  h3 {
    margin-top: 30px;
  }
`;

const CustomAccordionTheme = {
  accordion: {
    heading: { level: "3" },
    border: { color: "black" },
    icons: { color: "#0D2620" }
  }
};

class AccordionContainer extends Component {
  render() {
    const { edges } = this.props;

    const Projects = edges.map((edge, i) => (
      <AccordionPanel label={edge.node.title}>
        <Box pad="medium">
          <Project
            text={edge.node.article}
            technologies={edge.node.technologies}
            github={edge.node.github}
            demo={edge.node.demo}
            projectHighlights={edge.node.projectHighlights}
            screenshot={getScreenshot(edge.node.title)}
            key={i}
          />
        </Box>
      </AccordionPanel>
    ));

    return (
      <>
        <Grommet theme={CustomAccordionTheme}>
          <Box pad="large" margin="small" align="center">
            <SizedAccordion multiple>{Projects}</SizedAccordion>
          </Box>
        </Grommet>
      </>
    );
  }
}

export default AccordionContainer;
