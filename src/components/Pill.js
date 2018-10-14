import React from 'react'
// import { Col, Row } from 'styled-bootstrap-grid'
// import { FlexCol } from './styles/flex'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => (props.active ? 'blue' : 'white')};
  border-radius: '10px 10px';
`

const Pill = ({ active, text, onClick }) => (
  <div>
    <StyledButton active={active} onClick={onClick}>
      {text}
    </StyledButton>
  </div>
)

export default Pill
