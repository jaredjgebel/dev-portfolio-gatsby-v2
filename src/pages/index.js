import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Column } from 'react-rasta'
import Layout from '../components/layout'
import Hero from '../components/Hero'

const IndexPage = () => (
  <Layout>
    <Hero 
      title="Jared Gebel"
      subtitle="Full Stack Software Developer, JavaScript"
    />
  </Layout>
)

export default IndexPage
