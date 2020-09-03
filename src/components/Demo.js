import React from "react";
import { Box, Flex, Link, Heading } from "@chakra-ui/core";

const Demo = ({ demo, screenshot }) => (
  <Flex flexDirection="column" alignItems="center" paddingBottom={5}>
    <Heading as="h5" fontSize="md" textAlign="center" paddingY={3}>
      Demo
    </Heading>
    <Box
      as={Link}
      href={demo}
      target="_blank"
      rel="noopener noreferrer"
      width={["300px", "400px", "550px", "700px"]}
    >
      {screenshot}
    </Box>
  </Flex>
);

export default Demo;
