import styled from "styled-components/macro";
import { Col } from "react-grid-system";

export const FlexCol = styled(Col)`
  display: flex;
  flex-direction: ${props => (props.direction === "row" ? "row" : "column")};
  align-items: ${props => props && props.alignItems};
  justify-content: ${props => props && props.justifyContent};
  padding-right: 0px;
  padding-left: 0px;
`;
