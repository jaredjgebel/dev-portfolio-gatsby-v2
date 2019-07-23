import React from "react";
import { Row } from "styled-bootstrap-grid";
import { FlexCol } from "./styles/flex";

const JavaScript = () => (
  <Row
    justifyContent="center"
    style={{
      minHeight: "20rem",
      backgroundColor: "whitesmoke",
      margin: "0px"
    }}
  >
    <FlexCol col={8}>
      <Row justifyContent="center" style={{ paddingTop: "75px" }}>
        <h3>Why learn JavaScript?</h3>
        <p>
          As someone working in the sphere of web technologies, JavaScript is an
          essential tool of the browser, while the Node ecosystem has exploded.
          I have a strong interest in using robust frameworks like React and
          build tools like Webpack and Babel to optimize the developing
          experience. JS as a language has changed a lot in the last five years,
          and I'm excited to see where it will head in the future. Finally, I
          enjoy the multi-paradigm nature of JavaScript. I'm really intrigued by
          functional programming, and it's great to be able to use JavaScript to
          explore it.
        </p>
      </Row>
    </FlexCol>
  </Row>
);

export default JavaScript;
