import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10px',
          //  paddingRight: '10px',
          //  paddingLeft: '10px',
        }}
      >
        <div style={{ maxWidth: '650px' }}>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <Link to="/blog">Back to blog</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
