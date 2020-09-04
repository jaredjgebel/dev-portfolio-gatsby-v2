import React from "react";
import { Flex, Icon, Link, Text, PseudoBox } from "@chakra-ui/core";

const Footer = () => (
  <Flex alignItems="center" px={6} py={2}>
    <Text fontSize="lg" fontWeight="bold" paddingRight="5px">
      Created with{" "}
    </Text>
    <Link href="https://gatsbyjs.com" target="_blank" rel="noopener noreferrer">
      <PseudoBox
        as={Icon}
        name="gatsby"
        color="purple.700"
        role="img"
        size="20px"
        _hover={{ color: "purple.900" }}
      />
    </Link>
  </Flex>
);

export default Footer;
