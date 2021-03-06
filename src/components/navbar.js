import React from "react";
import Live from "./live";
import Header from "./header";
import Chatbox from "./chatbox";
import SurveyDashboard from "./surveyDashboard";
import TiktokCompilations from "./tiktokCompilations";
import ChatApp from "../chatApp";

import { Row, Col,Container } from "reactstrap";
const Navbar = () => {
  return (
    <div className=" d-block">
      <Container>
        <Header/>
          <Row>
            <Col sm="6" className="py-4 "><span><Live /></span></Col>
            <Col sm="6" className="py-4 "><span> <TiktokCompilations /></span></Col>
          </Row>
          <SurveyDashboard/>
      </Container>
     
    </div>
  );
};

export default Navbar;
