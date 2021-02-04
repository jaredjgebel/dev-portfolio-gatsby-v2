import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
} from "@chakra-ui/core";

import Project from "./Project";
import ArtSlidePuzzlesImage from "../images/gatsby-images/art-slide-puzzles-image";
import PracticeJeopardyImage from "../images/gatsby-images/practice-jeopardy-image";

const getScreenshot = (title) => {
  switch (title) {
    case "Art Slide Puzzles":
      return <ArtSlidePuzzlesImage />;
    case "Practice Jeopardy!":
      return <PracticeJeopardyImage />;
    default:
      return null;
  }
};

export default function AccordionContainer({ edges }) {
  return (
    <Accordion allowToggle display="flex" flexDirection="column">
      {edges.map((edge, i) => (
        <AccordionItem py={6} key={i}>
          <AccordionHeader
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading as="h4" size="lg">
              {edge.node.title}
            </Heading>
            <AccordionIcon />
          </AccordionHeader>

          <AccordionPanel>
            <Project
              text={edge.node.subtitle}
              technologies={edge.node.technologies}
              github={edge.node.github}
              demo={edge.node.demo}
              projectHighlights={edge.node.projectHighlights}
              screenshot={getScreenshot(edge.node.title)}
              key={i}
            />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
