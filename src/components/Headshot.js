import React from "react";
import headshot from "../images/headshot.png";

const Headshot = () => (
  <img
    src={headshot}
    alt="Jared's headshot"
    style={{
      height: "200px",
      borderRadius: "10px",
      width: "auto"
    }}
  />
);

export default Headshot;
