import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => (
  <Layout>
    <Hero title="Jared Gebel" subtitle="Web Developer, JavaScript" />
    <Profile />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
