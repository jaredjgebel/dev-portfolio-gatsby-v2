import React from "react";
import {
  Box,
  Flex,
  Link,
  List,
  Text,
  Heading,
  Icon,
  PseudoBox,
} from "@chakra-ui/core";
import Demo from "./Demo";

const Project = ({
  text,
  technologies,
  github,
  demo,
  projectHighlights,
  screenshot,
}) => (
  <Flex direction="column">
    <Text fontSize="lg" paddingBottom={4}>
      {text}
    </Text>

    <List styleType="disc" paddingBottom={4}>
      {projectHighlights.map((highlight, i) => (
        <li key={i}>{highlight}</li>
      ))}
    </List>

    <Box py={4}>
      <Heading as="h4" fontSize="lg" color="gray.700">
        Technologies
      </Heading>
      {technologies.map((technology, i) => (
        <Link key={i}>
          {technology.name}
          {i === technologies.length - 1 ? "" : ", "}
        </Link>
      ))}
    </Box>

    {demo && <Demo demo={demo} screenshot={screenshot} />}

    <Flex justifyContent="center" paddingTop={3}>
      <Link
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        height="50px"
      >
        <PseudoBox
          as={Icon}
          focusable
          name="github"
          color="gray.700"
          size="50px"
          _hover={{ color: "gray.900" }}
        />
      </Link>
    </Flex>
  </Flex>
);

export default Project;
