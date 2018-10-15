import React from 'react'
import styled from 'styled-components'
import gatsby from '../images/gatsby-icon.png'

const FooterBackground = styled.footer`
  height: 2rem;
  background-color: #17242d;
  color: whitesmoke;
  display: flex;
`

const Footer = () => (
  <FooterBackground>
    <div style={{ alignSelf: 'center' }}>
      <p
        style={{
          marginBottom: '0px',
          paddingLeft: '10px',
          fontSize: '16spx',
        }}
      >
        Site created with{' '}
        <a
          href="https://www.gatsbyjs.org/"
          style={{ textDecoration: 'none', color: 'whitesmoke' }}
        >
          <img src={gatsby} style={{ width: '25px' }} alt="Gatsby.js" />
        </a>{' '}
        v2
      </p>
    </div>
  </FooterBackground>
)

export default Footer
