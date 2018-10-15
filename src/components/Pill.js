import React from 'react'
import { Col, Row } from 'styled-bootstrap-grid'
import { FlexCol } from './styles/flex'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => (props.active ? 'lightblue' : 'white')};
  border-radius: '10px 10px';
  margin-top: '20px';
`

const Pill = ({ active, text, onClick }) => (
  <div>
    <FlexCol
      col={12}
      style={{ marginTop: '5px', paddingLeft: '5px', paddingRight: '5px' }}
    >
      <StyledButton active={active} onClick={onClick}>
        {text}
      </StyledButton>
    </FlexCol>
  </div>
)

export default Pill
