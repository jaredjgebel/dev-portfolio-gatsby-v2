import React from "react";
import { Flex, Heading, Icon, Link, Text, PseudoBox } from "@chakra-ui/core";

const Contact = () => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="space-around"
    minHeight="75vh"
    py={8}
    px={[4, 10, 10, 10]}
    backgroundColor="green.800"
    color="whitesmoke"
  >
    <Heading as="h2" paddingBottom={4}>
      Contact
    </Heading>
    <Text textAlign="center" width="60%" fontSize="xl" paddingBottom={4}>
      I'm available for hire, and I'd love to speak with you about your web
      development needs.
    </Text>
    <Flex width="60%" justifyContent="space-around">
      <Link
        href="mailto:jaredjgebel@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PseudoBox
          as={Icon}
          focusable
          name="mail"
          size={["50px", "65px", "80px", "95px"]}
          _hover={{ color: "green.100" }}
        />
      </Link>
      <Link
        href="https://github.com/jaredjgebel"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PseudoBox
          as={Icon}
          focusable
          name="github"
          size={["50px", "65px", "80px", "95px"]}
          _hover={{ color: "green.100" }}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/jaredjgebel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PseudoBox
          as={Icon}
          focusable
          name="linkedin"
          size={["50px", "65px", "80px", "95px"]}
          _hover={{ color: "green.100" }}
        />
      </Link>
    </Flex>
  </Flex>
);

export default Contact;
