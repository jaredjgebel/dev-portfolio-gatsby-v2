import React from "react";
import { Row, Col } from "react-grid-system";

const Profile = () => (
  <Row
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      backgroundColor: "#e6f5f1",
      marginRight: "0px",
      textAlign: "center",
      padding: "0px 70px"
    }}
  >
    <Col xs={12} xl={4}>
      <svg
        style={{ height: "250px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z" />
      </svg>
    </Col>
    <Col xs={12} xl={8}>
      <p id="about">
        I'm a web developer, focusing on building websites and applications for
        both the browser and server, primarily in JavaScript. I have a strong
        base in browser essentials: HTML, CSS, and the utilizing the DOM. I use
        React and the React ecosystem to create fast, responsive websites and
        single-page applications. I enjoy exploring libraries and frameworks to
        see how developers identify and deal with tricky aspects of development
        like lifecycle and state management. I have integrated external API
        sources into my work and deployed projects to Heroku and Netlify. I aim
        to put together sites and applications with user-friendly and accessible
        interfaces.
      </p>
    </Col>
  </Row>
);

export default Profile;
