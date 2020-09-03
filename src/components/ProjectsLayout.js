import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/core";
import ProjectsQuery from "./ProjectsQuery";

const ProjectsLayout = () => (
  <Flex
    direction="column"
    alignItems="center"
    minHeight="100vh"
    p={[4, 10, 10, 10]}
    backgroundColor="#ADD3F0"
  >
    <Box width={["90%", "90%", "80%", "75%"]}>
      <Heading as="h2" textAlign="center" py={8}>
        Projects
      </Heading>
      <Flex direction="column" justifyContent="center">
        <ProjectsQuery />
      </Flex>
    </Box>
  </Flex>
);

export default ProjectsLayout;
