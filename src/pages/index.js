import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Profile from '../components/Profile'
import JavaScript from '../components/JavaScript'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const IndexPage = () => (
  <Layout>
    <Hero title="Jared Gebel" subtitle="Full Stack Web Developer, JavaScript" />
    <Profile />
    <JavaScript />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
