import React from 'react'
import { Row } from 'styled-bootstrap-grid'
import headshot from '../images/headshot.png'
import { FlexCol } from './styles/flex'

const Headshot = () => (
  <Row justifyContent="center">
    <FlexCol col={8}>
      <Row justifyContent="center" style={{ paddingTop: '75px' }}>
        <img
          src={headshot}
          alt="Jared's headshot"
          style={{
            height: '200px',
            borderRadius: '10px',
            width: 'auto',
          }}
        />
      </Row>
      <Row>
        <p>
          Welcome to my developer page. I'm Jared, a full-stack web and software
          developer from Portland, Maine. When I'm not coding, I enjoy reading,
          music, adult coloring books, and spending time with my partner and big
          fluffy dog.
        </p>
      </Row>
    </FlexCol>
  </Row>
)

export default Headshot
