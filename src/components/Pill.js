import React from "react";
import { FlexCol } from "./styles/flex";
import styled from "styled-components/macro";

const StyledButton = styled.button`
  background: ${props => (props.active ? "#608699" : "white")};
  border-radius: 25px;
  width: 15rem;
  align-self: center;
  padding: 5px 0px;
  margin-top: "20px";
`;

const Pill = ({ active, text, onClick }) => (
  <div>
    <FlexCol
      col={12}
      style={{ marginTop: "5px", paddingLeft: "5px", paddingRight: "5px" }}
    >
      <StyledButton active={active} onClick={onClick}>
        {text}
      </StyledButton>
    </FlexCol>
  </div>
);

export default Pill;
