import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/Hero'
import Profile from '../components/Profile'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const IndexPage = () => (
  <Layout>
    <Hero 
      title="Jared Gebel"
      subtitle="Full Stack Software Developer, JavaScript"
    />
    <Profile />
    <Projects />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
