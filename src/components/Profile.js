import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'styled-bootstrap-grid'
import Headshot from './Headshot'
import { FlexCol } from './styles/flex'

const Profile = () => (
  <Row
    style={{
      minHeight: '28rem',
      backgroundColor: '#eddb8b',
    }}
  >
    <Col col={12}>
      <Headshot />
    </Col>
  </Row>
)

export default Profile
