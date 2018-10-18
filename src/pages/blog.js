import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10px',
          paddingRight: '10px',
          paddingLeft: '10px',
        }}
      >
        <div style={{ maxWidth: '650px' }}>
          <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>
            Blog Posts
          </h1>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div
              key={node.id}
              style={{
                paddingLeft: '5px',
                paddingRight: '5px',
              }}
            >
              <Link to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
              </Link>
              <small>Posted on {node.frontmatter.date}</small>
              <p>{node.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
