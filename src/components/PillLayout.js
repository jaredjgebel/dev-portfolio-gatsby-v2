import React from "react";
import styled from "styled-components/macro";
import { ScreenClassRender } from "react-grid-system";

const LayoutGrid = styled.div`
  display: grid;
  grid-template: ${props =>
    props.screenClass === "xs" ? "1fr / 1fr" : "1fr 1fr / 1fr 1fr"};
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
`;

const PillLayout = ({ children }) => {
  return (
    <ScreenClassRender
      render={screenClass => (
        <LayoutGrid screenClass={screenClass}>{children}</LayoutGrid>
      )}
    ></ScreenClassRender>
  );
};

export default PillLayout;

/* 
    <ScreenClassRender
      render={screenClass => (
        <LayoutGrid
          style={{
            gridTemplate: ["xs"].includes(screenClass)
              ? "1fr / 1fr"
              : "1fr 1fr / 1fr 1fr"
          }}
        >
          {children}
        </LayoutGrid>
      )}
    ></ScreenClassRender>
*/
