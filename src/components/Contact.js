import React from 'react'
import styled from 'styled-components'
import { Row } from 'styled-bootstrap-grid'
import { FlexCol } from './styles/flex'
import githubMark from '../pages/Github-Mark-64px.png'

const ContactBackground = styled(Row)`
  min-height: 18rem;
  background: #16222a;
  background: -webkit-linear-gradient(to right, #3a6073, #16222a);
  background: linear-gradient(to right, #3a6073, #16222a);
`

const Contact = () => (
  <ContactBackground justifyContent="center">
    <FlexCol col={8} style={{ paddingTop: '50px', color: 'whitesmoke' }}>
      <Row justifyContent="center">
        <h3 id="contact">Contact Me</h3>
      </Row>
      <Row
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: '8rem' }}
      >
        <FlexCol col={12}>
          <p>
            I'm available for hire, and I'd love to hear from you if you have
            questions about me and my work.
          </p>
        </FlexCol>
        <FlexCol col={6}>
          <a
            href="mailto:jaredjgebel@gmail.com"
            style={{ alignSelf: 'center' }}
          >
            <button>
              <h5 style={{ paddingTop: '10px' }}>Email Me</h5>
            </button>
          </a>
        </FlexCol>
        <FlexCol col={6}>
          <h5 style={{ alignSelf: 'center', paddingTop: '25px' }}>
            My Github Profile
          </h5>
          <a
            href="https://github.com/jaredjgebel"
            style={{ alignSelf: 'center' }}
          >
            <img src={githubMark} alt="Github Profile" />
          </a>
        </FlexCol>
      </Row>
    </FlexCol>
  </ContactBackground>
)

export default Contact
