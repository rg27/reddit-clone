import React from "react";
// import AddNewPost from "./add-new-post";
import Live from "./live";
import Header from "./header";
import Chatbox from "./chatbox";
import Performance from "./performance";


import { Row, Col,Container } from "reactstrap";
const Navbar = () => {
  return (
 
    <div className="  d-block">
      <Header/>
      <Container>
        <Row>
          <Col sm="8" className="py-4 "><span><Live /></span></Col>
          <Col sm="4" className="py-4 "><span> <Chatbox /></span></Col>
        </Row>
      </Container>
      <Performance/>
     
    </div>
  );
};

export default Navbar;
