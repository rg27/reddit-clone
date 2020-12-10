import React from "react";
import Live from "./live";
import Header from "./header";
import Chatbox from "./chatbox";
import Performance from "./performance";
import ChatApp from "../chatApp";

import { Row, Col,Container } from "reactstrap";
const Navbar = () => {
  return (
    <div className=" d-block">
      <Container>
        <Header/>
          <Row>
            <Col sm="7" className="py-4 "><span><Live /></span></Col>
            <Col sm="5" className="py-4 "><span> <ChatApp /></span></Col>
          </Row>
      </Container>
      <Performance/>
    </div>
  );
};

export default Navbar;
