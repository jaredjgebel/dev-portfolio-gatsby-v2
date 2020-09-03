import React from "react";
import { Flex, Icon, Text } from "@chakra-ui/core";

const Footer = () => (
  <Flex alignItems="center" px={6} py={2}>
    <Text fontSize="lg" fontWeight="bold" paddingRight="5px">
      Created with{" "}
    </Text>
    <Icon name="gatsby" color="purple.700" role="img" />
  </Flex>
);

export default Footer;
