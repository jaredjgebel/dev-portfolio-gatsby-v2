import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'styled-bootstrap-grid'

const ProfileBackground = styled.div`
  height: 16rem;
  background-color: #eddb8b;
`

const Profile = () => (
  <ProfileBackground>
    <Row justifyContent="center" alignItems="center">
      <Col col={4} style={{ height: '30px' }}>
        <p>Profile</p>
      </Col>
      <Col col={4}>
        <p>Hey</p>
      </Col>
    </Row>
  </ProfileBackground>
)

export default Profile
