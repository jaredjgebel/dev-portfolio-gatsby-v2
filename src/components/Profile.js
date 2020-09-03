import React from "react";
import { Flex, Image } from "@chakra-ui/core";
import JavaScriptLogo from "../images/svg/javascript.svg";
import ReactLogo from "../images/svg/react.svg";
import NodeLogo from "../images/svg/node.svg";

const Profile = () => (
  <Flex minHeight="110vh">
    <Image src={JavaScriptLogo} alt="CSS3 logo" />
    <Image src={ReactLogo} alt="CSS3 logo" />
    <Image src={NodeLogo} alt="CSS3 logo" />
  </Flex>
);

export default Profile;

//         I focus on building websites and applications for both the browser and
// server, primarily in JavaScript. On the front-end I've mostly been using
// React to build applications, and
