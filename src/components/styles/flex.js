import styled from 'styled-components'
import { Col } from 'styled-bootstrap-grid'

export const FlexCol = styled(Col)`
  display: flex;
  flex-direction: ${props => (props.direction === 'row' ? 'row' : 'column')};
  padding-right: 0px;
`
