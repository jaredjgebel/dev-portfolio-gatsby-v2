import React from "react";
import { Flex, Heading, Grid } from "@chakra-ui/core";
import topography from "../images/topography.svg";

function Hero() {
  return (
    <Grid
      backgroundImage={`url('${topography}'), linear-gradient(90deg, hsla(33, 21%, 81%, 1) 0%, hsla(26, 7%, 80%, 1) 100%)`}
      minHeight="100vh"
      p={[4, 10, 10, 10]}
      gridTemplateRows="1fr 1fr"
    >
      <Flex className="hero-headings" direction="column" align="flex-end">
        <Heading
          as="h1"
          fontStyle="italic"
          fontSize={["42px", "56px", "64px", "80px"]}
        >
          Jared Gebel
        </Heading>
        <Heading
          as="h2"
          fontStyle="italic"
          fontWeight="medium"
          fontSize={["28px", "34px", "42px", "50px"]}
        >
          Web Developer
        </Heading>
      </Flex>

      <Flex
        className="hero-subheadings"
        direction="column"
        align="flex-end"
        justify="flex-end"
      >
        <Heading
          as="h3"
          fontStyle="italic"
          fontWeight=""
          fontSize={["20px", "24px", "28px", "32px"]}
        >
          JavaScript • Node.js • React
        </Heading>
        <Heading
          as="h3"
          fontStyle="italic"
          fontWeight="medium"
          fontSize={["20px", "24px", "28px", "32px"]}
        >
          Express • Gatsby • REST APIs
        </Heading>
      </Flex>
    </Grid>
  );
}

export default Hero;
