import React from "react";
import { Box } from "@chakra-ui/core";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import ProjectsLayout from "../components/ProjectsLayout";
import Contact from "../components/contact/Contact";
import topography from "../images/svg/topography.svg";
import Footer from "../components/Footer";

const IndexPage = () => (
  <Layout>
    <Box
      backgroundImage={`url('${topography}'), linear-gradient(90deg, hsla(33, 21%, 81%, 1) 0%, hsla(26, 7%, 80%, 1) 100%)`}
    >
      <Hero />
      <ProjectsLayout />
      <Contact />
      <Footer />
    </Box>
  </Layout>
);

export default IndexPage;
